import { Books } from "../../types/book.type";
import { Paper, Box, Typography, IconButton, Tooltip } from "@mui/material";
import BookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/PersonRounded";
import CalenderIcon from "@mui/icons-material/EventRounded";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderRounded";
// import FavoriteFilledIcon from "@mui/icons-material/FavoriteRounded";
// import ReadingFilledIcon from "@mui/icons-material/AutoStoriesRounded";
import ReadingIcon from "@mui/icons-material/AutoStoriesOutlined";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

type BookProps = {
  data: Books[number];
};
function Book({ data }: BookProps) {
  const addToWishlist = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const addToReadingList = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
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
        <Tooltip placement="left" title="Add to wishlist">
          <IconButton onClick={addToWishlist} size="small">
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip placement="left" title="Add to reading">
          <IconButton onClick={addToReadingList} size="small">
            <ReadingIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Paper>
  );
}

export default Book;
