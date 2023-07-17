import ApiResponse from "../../../types/apiResponse";
import { Book, Books } from "../../../types/book.type";
import reduxApi from "../../api";

type SearchParams = {
  limit?: string;
  genre?: string;
  publishedOn?: string;
  page?: number;
};

const booksApi = reduxApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<ApiResponse<Books>, unknown>({
      query: (query: SearchParams) => {
        let searchParams = "";

        for (const key in query) {
          if (!searchParams.length) {
            searchParams = "?";
          }
          type Key = keyof SearchParams;
          const value = query[key as Key];
          if (value !== undefined && !!value) {
            searchParams = searchParams + key + "=" + String(value) + "&";
          }
        }

        return "/books" + searchParams;
      },
      providesTags: ["books"],
    }),
    getSingleBook: builder.query<ApiResponse<Book>, unknown>({
      query: (id: string) => `/books/${id}`,
      providesTags: ["books"],
    }),
    addBook: builder.mutation({
      query: (data: Partial<Book>) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: (data: Partial<Book>) => ({
        url: `/books/${data._id!}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation<ApiResponse<Book>, unknown>({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = booksApi;
