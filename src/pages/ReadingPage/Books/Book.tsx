import { Paper, Box, Typography, IconButton, Tooltip } from "@mui/material";
import BookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/PersonRounded";
import CalenderIcon from "@mui/icons-material/EventRounded";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteFilledIcon from "@mui/icons-material/FavoriteRounded";
import ReadingFilledIcon from "@mui/icons-material/AutoStoriesRounded";
import ReadingIcon from "@mui/icons-material/AutoStoriesOutlined";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import {
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} from "../../../redux/features/wishlist/wishlist.api";
import { Books } from "../../../types/book.type";
import {
  useAddToReadingListMutation,
  useRemoveFromReadingListMutation,
} from "../../../redux/features/reading/reading.api";
import ReadingStatus from "./ReadingStatus";
import { toast } from "react-hot-toast";

type BookProps = {
  data: Books[number] & { readingStatus: "reading" | "finished" };
  isInWishlist: (bookId: string) => boolean;
  isInReadingList: (bookId: string) => boolean;
};

function Book({ data, isInWishlist, isInReadingList }: BookProps) {
  const [add] = useAddToWishlistMutation();
  const [remove] = useRemoveFromWishlistMutation();
  const [addToReadingList] = useAddToReadingListMutation();
  const [removeFromReadingList] = useRemoveFromReadingListMutation();

  const toggleWishlist = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();

    if (isInWishlist(data._id)) {
      await toast.promise(remove(data._id), {
        loading: "Removing from wishlist",
        success: "Book removed from wishlist",
        error: "Something went wrong",
      });
    } else {
      await toast.promise(add({ bookId: data._id }), {
        loading: "Adding to wishlist",
        success: "Book added to wishlist",
        error: "Something went wrong",
      });
    }
  };

  const toggleReadingList = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();

    if (isInReadingList(data._id)) {
      await toast.promise(removeFromReadingList(data._id), {
        loading: "Removing from reading list",
        success: "Book removed from reading list",
        error: "Something went wrong",
      });
    } else {
      await toast.promise(addToReadingList({ bookId: data._id }), {
        loading: "Adding to reading list",
        success: "Book added to reading list",
        error: "Something went wrong",
      });
    }
  };
  return (
    <Paper
      component={Link}
      to={`/books/${data._id}`}
      elevation={3}
      className="relative z-0 flex gap-4 p-2 cursor-pointer"
    >
      {/* image */}
      <Box
        sx={(theme) => ({ border: `1px solid ${theme.palette.divider}` })}
        className="flex items-center justify-center px-2 pb-1 rounded"
      >
        <BookIcon sx={{ fontSize: 40 }} />
      </Box>
      {/* Content */}
      <Box className="p-1">
        {/* title */}
        <Typography
          component="h1"
          className="text-xl font-semibold line-clamp-1"
        >
          {data.title}
        </Typography>
        <Typography>{data.genre}</Typography>
        {/* publisher */}
        <Box className="flex gap-4">
          <Box className="flex items-center gap-2">
            <PersonIcon />
            <Typography pt={0.5}>{data.author}</Typography>
          </Box>
          <Box className="flex items-center gap-2">
            <CalenderIcon />
            <Typography pt={0.5}>
              {dayjs(data.publishedOn).format("DD MMM, YYYY")}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="relative z-10 flex flex-col items-center justify-center ml-auto">
        <Tooltip
          placement="left"
          title={
            isInWishlist(data._id) ? "Remove from wishlist" : "Add to wishlist"
          }
        >
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <IconButton onClick={toggleWishlist} size="small">
            {isInWishlist(data._id) ? <FavoriteFilledIcon /> : <FavoriteIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip
          placement="left"
          title={
            isInReadingList(data._id)
              ? "Remove from reading list"
              : "Add to reading list"
          }
        >
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <IconButton onClick={toggleReadingList} size="small">
            {isInReadingList(data._id) ? (
              <ReadingFilledIcon />
            ) : (
              <ReadingIcon />
            )}
          </IconButton>
        </Tooltip>
      </Box>

      <ReadingStatus bookId={data._id} status={data.readingStatus} />
    </Paper>
  );
}

export default Book;
