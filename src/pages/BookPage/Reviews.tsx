import {
  Box,
  Stack,
  Avatar,
  TextField,
  InputAdornment,
  Tooltip,
  IconButton,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import UserIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";
import {
  useGetBookReviewsQuery,
  usePostBookReviewMutation,
} from "../../redux/features/reviews/reviews.api";
import React from "react";

function Reviews() {
  const { bookId } = useParams();
  const { data } = useGetBookReviewsQuery(bookId);
  const [postReview, { isLoading }] = usePostBookReviewMutation();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onPostClick = async () => {
    if (inputRef.current && bookId) {
      const payload = {
        bookId,
        content: inputRef.current.value,
      };
      await postReview(payload);
    }
  };

  return (
    <Stack className="flex flex-col gap-4 p-6">
      <Typography className="text-2xl">Reviews</Typography>
      <Box className="flex gap-6">
        <Avatar>
          <UserIcon />
        </Avatar>
        <TextField
          name="content"
          placeholder="Write your thought"
          InputProps={{
            inputRef: inputRef,
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title="Submit" placement="left">
                  <IconButton
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onClick={onPostClick}
                    disabled={isLoading}
                    edge="end"
                  >
                    {isLoading ? (
                      <CircularProgress
                        size={20}
                        sx={{ color: "text.disabled" }}
                      />
                    ) : (
                      <SendIcon />
                    )}
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
          disabled={isLoading}
          rows={3}
          fullWidth
          multiline
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(400px, 1fr))`,
          gap: 3,
        }}
      >
        {data &&
          data.data?.map((review) => (
            <Paper key={review._id} className="flex items-center gap-4 p-4">
              <Avatar>
                <UserIcon />
              </Avatar>

              <Box>
                <Typography className="text-xl">
                  {review.user.fullName}
                </Typography>
                <Typography color="text.secondary">{review.content}</Typography>
              </Box>
            </Paper>
          ))}
      </Box>
    </Stack>
  );
}

export default Reviews;
