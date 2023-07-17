import { Typography, Box, Paper } from "@mui/material";
import { useGetBooksQuery } from "../../redux/features/books/books.api";
function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, isLoading } = useGetBooksQuery(undefined);

  console.log(isLoading, data);

  return (
    <div className="p-6">
      <Typography variant="h5" component="h1" className="font-medium">
        Latest Published Book Books
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
        }}
      >
        <Paper></Paper>
      </Box>
    </div>
  );
}

export default HomePage;
