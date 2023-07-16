import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/books/books.slice";
import userReducer from "./features/user/user.slice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
  },
});

export default store;
