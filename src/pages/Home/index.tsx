import { Typography } from "@mui/material";
import { useGetBooksQuery } from "../../redux/features/books/books.api";
import Books from "../../components/Books";
function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data } = useGetBooksQuery({ limit: 2 });

  return (
    <div className="p-6">
      <Typography mb={2} variant="h5" component="h1" className="font-medium">
        Latest Published Book Books
      </Typography>

      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
      {data && data.data && <Books data={data.data} />}
    </div>
  );
}

export default HomePage;
