import ApiResponse from "../../../types/apiResponse";
import { Book } from "../../../types/book.type";
import { Review } from "../../../types/review.type";
import reduxApi from "../../api";

const reviewsApi = reduxApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookReviews: builder.query<ApiResponse<Review[]>, unknown>({
      query: (bookId: string) => ({
        url: `/book/reviews/${bookId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
        },
      }),
      providesTags: ["reviews"],
    }),
    postBookReview: builder.mutation({
      query: (context: { bookId: string; content: string }) => ({
        url: `/book/reviews`,
        method: "POST",
        body: context,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
        },
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetBookReviewsQuery, usePostBookReviewMutation } = reviewsApi;
