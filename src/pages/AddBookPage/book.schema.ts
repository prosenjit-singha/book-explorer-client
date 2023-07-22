import * as yup from "yup";

const required = "Required";

export const bookSchema = yup.object({
  title: yup.string().required(required),
  author: yup.string().required(required),
  genre: yup.string().required(required),
  publishedOn: yup.string().required(required),
});
