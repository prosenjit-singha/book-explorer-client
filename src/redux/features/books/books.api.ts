import ApiResponse from "../../../types/apiResponse";
import { Book, Books } from "../../../types/book.type";
import reduxApi from "../../api";

type SearchParams = {
  limit?: string;
  genre?: string;
  publishedOn?: string;
  page?: number;
};

const productApi = reduxApi.injectEndpoints({
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
