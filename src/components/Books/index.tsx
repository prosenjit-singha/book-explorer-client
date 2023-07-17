import { Books } from "../../types/book.type";
import Book from "./Book";

type BooksProps = {
  data: Books;
};

function Books({ data }: BooksProps) {
  return data.map((book) => <Book key={book._id} data={book} />);
}

export default Books;
