export type Books = {
  _id: string;
  title: string;
  author: string;
  genre: string[];
  publishedOn: string;
  isPublished: boolean;
  totalViews: number;
  createdAt: string;
  updatedAt: string;
}[];

export type Book = Books & {
  author: {
    fullName: "Test 1";
    gender: null;
    email: "test@gmail.com";
  };
  totalReviews: 0;
};
