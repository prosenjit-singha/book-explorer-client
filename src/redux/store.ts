import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/books/books.slice";
import userReducer from "./features/user/user.slice";
import api from "./api";

const store = configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
