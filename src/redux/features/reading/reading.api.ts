import ApiResponse from "../../../types/apiResponse";
import { Book } from "../../../types/book.type";
import reduxApi from "../../api";

type Wishlist = {
  book: Book;
  _id: string;
  bookId: string;
  userId: string;
  status: "reading" | "finished";
};

const ReadingBooksAPI = reduxApi.injectEndpoints({
  endpoints: (builder) => ({
    getReadingList: builder.query<ApiResponse<Wishlist[]>, unknown>({
      query: () => ({
        url: `/reading/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
        },
      }),
      providesTags: ["readings"],
    }),
    addToReadingList: builder.mutation({
      query: (context: { bookId: string }) => ({
        url: `/reading`,
        method: "POST",
        body: context,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
        },
      }),
      invalidatesTags: ["readings"],
    }),
    removeFromReadingList: builder.mutation({
      query: (bookId: string) => ({
        url: `/reading/${bookId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
        },
      }),
      invalidatesTags: ["readings"],
    }),
    changeReadingStatus: builder.mutation({
      query: (context: { bookId: string; status: string }) => ({
        url: `/reading/${context.bookId}`,
        method: "PATCH",
        body: { status: context.status },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
        },
      }),
      invalidatesTags: ["readings"],
    }),
  }),
});

export const {
  useGetReadingListQuery,
  useAddToReadingListMutation,
  useRemoveFromReadingListMutation,
  useChangeReadingStatusMutation,
} = ReadingBooksAPI;
