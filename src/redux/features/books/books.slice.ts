import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const booksSlice = createSlice({
  name: "Books",
  initialState,
  reducers: {},
});

export const BooksActions = booksSlice.actions;

export default booksSlice.reducer;
