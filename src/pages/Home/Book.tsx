import { Books } from "../../types/book.type";
import { Paper, Box, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/PersonRounded";
import CalenderIcon from "@mui/icons-material/EventRounded";
import dayjs from "dayjs";

type BookProps = {
  data: Books[number];
};
function Book({ data }: BookProps) {
  return (
    <Paper elevation={3} className="flex gap-4 p-2">
      {/* image */}
      <Box
        sx={(theme) => ({ border: `1px solid ${theme.palette.divider}` })}
        className="flex items-center justify-center px-1 pb-1 rounded"
      >
        <BookIcon sx={{ fontSize: 40 }} />
      </Box>
      {/* Content */}
      <Box className="p-1">
        {/* title */}
        <Typography className="text-lg">{data.title}</Typography>
        {/* publisher */}
        <Box className="flex gap-4">
          <Box className="flex items-center gap-2">
            <PersonIcon />
            <Typography pt={0.5}>{data.author.fullName}</Typography>
          </Box>
          <Box className="flex items-center gap-2">
            <CalenderIcon />
            <Typography pt={0.5}>
              {dayjs(data.publishedOn).format("DD MMM, YYYY")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default Book;
