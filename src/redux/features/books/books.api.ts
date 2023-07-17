import ApiResponse from "../../../types/apiResponse";
import { Book, Books } from "../../../types/book.type";
import reduxApi from "../../api";

const productApi = reduxApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<ApiResponse<Books>, unknown>({
      query: () => "/books",
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (id: string) => `/books/${id}`,
      providesTags: ["reviews"],
    }),
    addBook: builder.mutation({
      query: (data: Partial<Book>) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const { useGetBooksQuery, useGetSingleBookQuery, useAddBookMutation } =
  productApi;
