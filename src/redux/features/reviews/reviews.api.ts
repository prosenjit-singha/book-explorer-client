import { Book } from "../../../types/book.type";
import reduxApi from "../../api";

const reviewsApi = reduxApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookReviews: builder.query({
      query: () => "/books",
      providesTags: ["reviews"],
    }),
    postBookReview: builder.mutation({
      query: (data: Partial<Book>) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetBookReviewsQuery, usePostBookReviewMutation } = reviewsApi;
