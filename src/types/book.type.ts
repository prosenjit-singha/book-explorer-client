export type Books = {
  _id: string;
  title: string;
  author: {
    fullName: string;
  };
  genre: string[];
  publishedOn: string;
  isPublished: boolean;
  totalViews: number;
  createdAt: string;
  updatedAt: string;
}[];

export type Book = Books[number] & {
  author: {
    fullName: "Test 1";
    gender: null;
    email: "test@gmail.com";
  };
  totalReviews: 0;
};
