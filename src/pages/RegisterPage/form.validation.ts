import * as yup from "yup";

const required = "Required";

export const registerUserSchema = yup.object({
  fullName: yup.string().required(),
  email: yup.string().email().required(required),
  phoneNumber: yup.string().required(required),
  password: yup.string().min(6).required(required),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match.")
    .required(required),
});
