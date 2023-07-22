import { useGetWishlistQuery } from "../../../redux/features/wishlist/wishlist.api";
import { Books } from "../../../types/book.type";
import Book from "./Book";
import { Box } from "@mui/material";

type BooksProps = {
  data: Books;
};

function Books({ data }: BooksProps) {
  const { data: wishlist } = useGetWishlistQuery(undefined);

  const isInWishlist = (bookId: string) => {
    let found = false;
    if (wishlist && wishlist.data) {
      wishlist.data.forEach((book) => {
        if (book.bookId === bookId) found = true;
      });
    }
    return found;
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(400px, 1fr))`,
        gap: 3,
      }}
    >
      {data.map((book) => (
        <Book key={book._id} data={book} isInWishlist={isInWishlist} />
      ))}
    </Box>
  );
}

export default Books;
