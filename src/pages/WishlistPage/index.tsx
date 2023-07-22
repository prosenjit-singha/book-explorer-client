import { Typography } from "@mui/material";
import Books from "../../components/Books";
import { useGetWishlistQuery } from "../../redux/features/wishlist/wishlist.api";

function WishlistPage() {
  const { data } = useGetWishlistQuery(undefined);

  const books =
    (data && data.data && data.data.map((value) => value.book)) || [];

  console.log(data);

  return (
    <div className="p-4">
      <Typography variant="h5" mb={1}>
        Wishlist
      </Typography>
      <Books data={books} />
    </div>
  );
}

export default WishlistPage;
