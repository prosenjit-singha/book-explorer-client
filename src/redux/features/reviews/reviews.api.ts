import ApiResponse from "../../../types/apiResponse";
import { Book } from "../../../types/book.type";
import { Review } from "../../../types/review.type";
import reduxApi from "../../api";

const reviewsApi = reduxApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookReviews: builder.query<ApiResponse<Review>, unknown>({
      query: (bookId: string) => `/book/reviews/${bookId}`,
      providesTags: ["reviews"],
    }),
    postBookReview: builder.mutation({
      query: (context: { bookId: string; content: Partial<Book> }) => ({
        url: `/book/reviews`,
        method: "POST",
        body: context,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetBookReviewsQuery, usePostBookReviewMutation } = reviewsApi;
