import {
  Box,
  Stack,
  Avatar,
  TextField,
  InputAdornment,
  Tooltip,
  IconButton,
} from "@mui/material";
import UserIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";

function Reviews() {
  return (
    <Stack className="p-6">
      <Box className="flex gap-6">
        <Avatar>
          <UserIcon />
        </Avatar>
        <TextField
          name="content"
          placeholder="Write your thought"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title="Submit" placement="left">
                  <IconButton edge="end">
                    <SendIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
          rows={3}
          fullWidth
          multiline
        />
      </Box>
    </Stack>
  );
}

export default Reviews;
