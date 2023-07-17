import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  TextField,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Select,
  MenuItem,
} from "@mui/material";
import { Book } from "../../types/book.type";
import { genre } from "../../constants/book.const";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { useUpdateBookMutation } from "../../redux/features/books/books.api";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

type UpdateBookProps = {
  open: boolean;
  data: Book;
  onClose: () => void;
};

function UpdateBook({ open, onClose, data }: UpdateBookProps) {
  const [updateBook, result] = useUpdateBookMutation();
  const formik = useFormik({
    initialValues: data,
    onSubmit: async (values) => {
      await updateBook(values);
      onClose();
    },
  });

  const handleChange = async (event: SelectChangeEvent) => {
    await formik.setFieldValue("genre", event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update Book Details</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2, py: 2 }}
        >
          <TextField
            name="title"
            placeholder="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && !!formik.errors.title}
            helperText={formik.touched.title && formik.errors.title}
            fullWidth
            label="Title"
            size="small"
            disabled={result.isLoading}
          />
          <TextField
            name="author"
            placeholder="Author Name"
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.author && !!formik.errors.author}
            helperText={formik.touched.author && formik.errors.author}
            fullWidth
            label="Author"
            size="small"
            disabled={result.isLoading}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Publication Date"
                format="DD/MM/YYYY"
                value={dayjs(formik.values.publishedOn)}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onChange={async (newValue) =>
                  await formik.setFieldValue(
                    "publishedOn",
                    newValue?.toISOString()
                  )
                }
                disabled={result.isLoading}
              />
            </DemoContainer>
          </LocalizationProvider>

          {/* select genre */}

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
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={result.isLoading}
          //   eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={onClose}
          variant="outlined"
          type="button"
        >
          Cancel
        </Button>
        <Button
          disabled={result.isLoading}
          variant="outlined"
          color="error"
          type="submit"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={formik.submitForm}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UpdateBook;
