import { Books } from "../../types/book.type";
import Book from "./Book";
import { Box } from "@mui/material";

type BooksProps = {
  data: Books;
};

function Books({ data }: BooksProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(400px, 1fr))`,
        gap: 3,
      }}
    >
      {data.map((book) => (
        <Book key={book._id} data={book} />
      ))}
    </Box>
  );
}

export default Books;
