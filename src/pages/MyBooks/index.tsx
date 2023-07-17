import { useGetBooksQuery } from "../../redux/features/books/books.api";
import Books from "../../components/Books";
import {
  Box,
  Paper,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
  CircularProgress,
  Button,
} from "@mui/material";
import { genre } from "../../constants/book.const";
import SearchIcon from "@mui/icons-material/Search";
import { useFormik } from "formik";
import { useAppSelector } from "../../redux/hooks";

function MyBooksPage() {
  const { user } = useAppSelector((state) => state.user);
  const formik = useFormik({
    initialValues: {
      searchTerm: "",
      publishedOn: "",
      genre: "",
      createdBy: user ? user._id : "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { data, isLoading } = useGetBooksQuery(formik.values);

  const handleChange = async (event: SelectChangeEvent) => {
    await formik.setFieldValue("genre", event.target.value);
  };

  if (!data) return null;
  return (
    <Box p={3}>
      <Paper
        component="form"
        onSubmit={formik.handleSubmit}
        className="flex gap-4 p-4 mb-4"
        elevation={3}
      >
        <TextField
          label="Search"
          autoComplete="off"
          name="searchTerm"
          size="small"
          placeholder="Search Book..."
          value={formik.values.searchTerm}
          onChange={formik.handleChange}
        />
        <TextField
          label="Publication Year"
          size="small"
          name="publishedOn"
          placeholder="Publication Year"
          type="number"
          inputProps={{
            min: 0,
          }}
          value={formik.values.publishedOn || ""}
          onChange={formik.handleChange}
        />

        {/* Select genre */}
        <FormControl sx={{ minWidth: 250 }} size="small">
          <InputLabel id="select-genre">Genre</InputLabel>
          <Select
            labelId="select-genre"
            // id="select-genre"
            value={formik.values.genre}
            label="Genre"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            {genre.map((value) => (
              <MenuItem value={value} key={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Search Button */}
        <Button
          variant="contained"
          startIcon={
            isLoading ? (
              <CircularProgress size={20} sx={{ color: "text.disabled" }} />
            ) : (
              <SearchIcon />
            )
          }
          type="submit"
          className="ml-auto"
          disabled={isLoading}
        >
          Search
        </Button>
      </Paper>
      <Books data={data.data!} />
    </Box>
  );
}

export default MyBooksPage;
