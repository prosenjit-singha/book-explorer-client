import {
  Paper,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useFormik } from "formik";
import { bookSchema } from "./book.schema";
import { genre } from "../../constants/book.const";
import { useAddBookMutation } from "../../redux/features/books/books.api";
import { useNavigate } from "react-router-dom";

function AddNewBookPage() {
  const navigate = useNavigate();
  const [addBook] = useAddBookMutation();
  const formik = useFormik({
    initialValues: {
      title: "",
      genre: "",
      author: "",
      publishedOn: "",
    },
    onSubmit: async (values, actions) => {
      await addBook(values);
      navigate("/books");
      actions.resetForm();
    },
    validationSchema: bookSchema,
  });

  // handle genre change
  const handleChange = async (event: SelectChangeEvent) => {
    await formik.setFieldValue("genre", event.target.value);
  };
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <Paper
        onSubmit={formik.handleSubmit}
        elevation={3}
        component="form"
        className="flex flex-col gap-4 p-4 shadow-none min-w-[400px]"
      >
        <Typography variant="h5" component="h1">
          Add Book
        </Typography>

        <TextField
          name="title"
          placeholder="Title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && !!formik.errors.title}
          helperText={formik.touched.title && formik.errors.title}
          disabled={formik.isSubmitting}
        />
        <TextField
          name="author"
          placeholder="Author"
          label="Author"
          value={formik.values.author}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.author && !!formik.errors.author}
          helperText={formik.touched.author && formik.errors.author}
          disabled={formik.isSubmitting}
        />

        {/* select genre */}
        <FormControl sx={{ minWidth: 250 }} size="small">
          <InputLabel id="select-genre">Genre</InputLabel>
          <Select
            disabled={formik.isSubmitting}
            labelId="select-genre"
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

        {/* select date */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              disabled={formik.isSubmitting}
              sx={{ width: "100%" }}
              label="Published On"
              value={
                formik.values.publishedOn
                  ? dayjs(formik.values.publishedOn)
                  : null
              }
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onChange={async (newValue) =>
                await formik.setFieldValue(
                  "publishedOn",
                  newValue?.toISOString()
                )
              }
            />
          </DemoContainer>
        </LocalizationProvider>

        <Button
          disabled={formik.isSubmitting}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </Paper>
    </section>
  );
}

export default AddNewBookPage;
