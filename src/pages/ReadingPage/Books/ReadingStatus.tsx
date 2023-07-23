import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useChangeReadingStatusMutation } from "../../../redux/features/reading/reading.api";

type ReadingStatusProps = {
  status: "reading" | "finished";
  bookId: string;
};

function ReadingStatus({ status, bookId }: ReadingStatusProps) {
  const [changeStatus] = useChangeReadingStatusMutation();

  const handleChange = async (
    e: React.MouseEvent<HTMLElement>,
    newStatus: string
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (newStatus !== null)
      await changeStatus({ status: newStatus, bookId: bookId });
  };
  return (
    <ToggleButtonGroup
      color="primary"
      orientation="vertical"
      value={status}
      exclusive
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="reading">Reading</ToggleButton>
      <ToggleButton value="finished">Finished</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ReadingStatus;
