import { Book } from "../../../types/book.type";
import reduxApi from "../../api";

const reviewsApi = reduxApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookReviews: builder.query({
      query: (bookId: string) => `/books/reviews/${bookId}`,
      providesTags: ["reviews"],
    }),
    postBookReview: builder.mutation({
      query: (context: { bookId: string; data: Partial<Book> }) => ({
        url: `/books/reviews/${context.bookId}`,
        method: "POST",
        body: context.data,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetBookReviewsQuery, usePostBookReviewMutation } = reviewsApi;
