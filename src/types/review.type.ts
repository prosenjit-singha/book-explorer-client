export type Review = {
  _id: string;
  user: {
    _id: string;
    fullName: string;
  };
  bookId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};
