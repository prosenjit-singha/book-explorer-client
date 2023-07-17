import { Typography, Box } from "@mui/material";
import { useGetBooksQuery } from "../../redux/features/books/books.api";
import Book from "./Book";
function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, isLoading } = useGetBooksQuery(undefined);

  return (
    <div className="p-6">
      <Typography variant="h5" component="h1" className="font-medium">
        Latest Published Book Books
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(400px, 1fr))`,
          gap: 3,
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
        {data &&
          data.data &&
          data.data.map((book) => <Book key={book._id} data={book} />)}
      </Box>
    </div>
  );
}

export default HomePage;
