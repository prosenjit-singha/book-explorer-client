import * as yup from "yup";

const required = "Required";

export const loginSchema = yup.object({
  email: yup.string().email().required(required),
  password: yup.string().min(6).required(required),
});
