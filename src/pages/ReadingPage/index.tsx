import { Typography } from "@mui/material";
import Books from "./Books";
import { useGetReadingListQuery } from "../../redux/features/reading/reading.api";

function ReadingPage() {
  const { data } = useGetReadingListQuery(undefined);

  const books =
    (data &&
      data.data &&
      data.data.map((value) => ({
        ...value.book,
        readingStatus: value.status,
      }))) ||
    [];
  return (
    <div className="p-4">
      <Typography variant="h5" mb={1}>
        Reading List
      </Typography>
      <Books data={books} />
    </div>
  );
}

export default ReadingPage;
