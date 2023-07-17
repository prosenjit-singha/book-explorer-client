import { useGetBooksQuery } from "../../redux/features/books/books.api";
import Books from "../../components/Books";
import { Box, Paper, TextField } from "@mui/material";

function AllBooksPage() {
  const { data } = useGetBooksQuery(undefined);
  if (!data) return null;
  return (
    <Box p={3}>
      <Paper className="flex gap-4 p-4 mb-4" elevation={3}>
        <TextField
          autoComplete="off"
          name="searchTerm"
          size="small"
          placeholder="Search Book..."
        />
        <TextField
          size="small"
          name="year"
          placeholder="Publication Year"
          type="number"
        />
      </Paper>
      <Books data={data.data!} />
    </Box>
  );
}

export default AllBooksPage;
