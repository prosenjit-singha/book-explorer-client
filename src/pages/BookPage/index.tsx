import { Box, Typography, Button } from "@mui/material";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../../redux/features/books/books.api";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import Reviews from "./Reviews";
import ConfirmDelete from "./ConfirmDelete";
import React from "react";
import UpdateBook from "./UpdateBook";

function BookPage() {
  const { bookId } = useParams();
  const [open, setOpen] = React.useState(false);
  const [isEditOpen, setEditOpen] = React.useState(false);

  const [deleteBook, result] = useDeleteBookMutation();

  const { data } = useGetSingleBookQuery(bookId!);

  const openDelete = () => setOpen(true);
  const closeDelete = () => setOpen(false);
  const openEdit = () => setEditOpen(true);
  const closeEdit = () => setEditOpen(false);

  const onDelete = async () => {
    await deleteBook(bookId);
    closeDelete();
  };

  if (!data || !data.data) return null;

  // console.log(data.data.genre);

  return (
    <Box component="article">
      <Box component="section" p={3}>
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
        <Typography align="center">Author: {data.data.author}</Typography>
        <Typography align="center">Genre: {data.data.genre}</Typography>
        <Typography align="center">
          Published On: {dayjs(data.data.publishedOn).format("DD MMM, YYYY")}
        </Typography>

        <Box className="flex justify-center gap-4 mt-5">
          <Button onClick={openEdit} variant="outlined">
            Edit
          </Button>
          <Button onClick={openDelete} variant="outlined" color="error">
            Delete
          </Button>
        </Box>
      </Box>

      <Reviews />

      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <ConfirmDelete
        open={open}
        onClose={closeDelete}
        onDelete={onDelete}
        disable={result.isLoading}
      />

      <UpdateBook data={data.data} open={isEditOpen} onClose={closeEdit} />
    </Box>
  );
}

export default BookPage;
