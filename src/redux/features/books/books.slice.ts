import { createSlice } from "@reduxjs/toolkit";
import { Books } from "../../../types/book.type";

const initialState: Books = [];

const booksSlice = createSlice({
  name: "Books",
  initialState,
  reducers: {},
});

export const BooksActions = booksSlice.actions;

export default booksSlice.reducer;
