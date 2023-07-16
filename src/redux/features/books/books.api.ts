import { Book } from "../../../types/book.type";
import reduxApi from "../../api";

const productApi = reduxApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`,
    }),
    addBook: builder.mutation({
      query: (data: Partial<Book>) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetSingleBookQuery, useAddBookMutation } =
  productApi;
