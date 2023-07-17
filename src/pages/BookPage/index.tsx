import { Box, Typography } from "@mui/material";
import { useGetSingleBookQuery } from "../../redux/features/books/books.api";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

function BookPage() {
  const { bookId } = useParams();
  const { data } = useGetSingleBookQuery(bookId!);

  if (!data || !data.data) return null;

  // console.log(data.data.genre);

  return (
    <Box p={3}>
      <Typography
        mb={4}
        align="center"
        component="h1"
        variant="h4"
        fontWeight={500}
      >
        Book Details
      </Typography>
      <Typography align="center" component="h2" variant="h5" fontWeight={500}>
        Title: {data.data.title}
      </Typography>
      <Typography align="center">
        Author: {data.data.author.fullName}
      </Typography>
      <Typography align="center">
        Genre: {data.data.genre.join(", ")}
      </Typography>
      <Typography align="center">
        Published On: {dayjs(data.data.publishedOn).format("DD MMM, YYYY")}
      </Typography>
    </Box>
  );
}

export default BookPage;
