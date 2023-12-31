import ApiResponse from "../../../types/apiResponse";
import { Book } from "../../../types/book.type";
import reduxApi from "../../api";

type Wishlist = { book: Book; _id: string; bookId: string; userId: string };

const WishlistApi = reduxApi.injectEndpoints({
  endpoints: (builder) => ({
    getWishlist: builder.query<ApiResponse<Wishlist[]>, unknown>({
      query: () => ({
        url: `/wishlist/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
        },
      }),
      providesTags: ["wishlist"],
    }),
    addToWishlist: builder.mutation({
      query: (context: { bookId: string }) => ({
        url: `/wishlist`,
        method: "POST",
        body: context,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
        },
      }),
      invalidatesTags: ["wishlist"],
    }),
    removeFromWishlist: builder.mutation({
      query: (bookId: string) => ({
        url: `/wishlist/${bookId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
        },
      }),
      invalidatesTags: ["wishlist"],
    }),
  }),
});

export const {
  useGetWishlistQuery,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} = WishlistApi;
