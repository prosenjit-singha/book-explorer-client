export type Books = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publishedOn: string;
  isPublished: boolean;
  totalViews: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}[];

export type Book = Books[number] & {
  totalReviews: 0;
};
