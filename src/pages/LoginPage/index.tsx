import {
  Paper,
  Typography,
  TextField,
  Stack,
  Button,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import { loginUser } from "../../redux/features/user/user.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ArrowIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { loginSchema } from "./form.validation";

type Credential = {
  email: string;
  password: string;
};

const initialValues: Credential = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const { isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onSubmit = async (
    values: Credential
    // actions: FormikHelpers<Credential>
  ) => {
    await dispatch(loginUser(values));
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: loginSchema,
  });

  // console.log(data);

  return (
    <div className="flex justify-center h-full my-auto">
      <Paper
        component="form"
        onSubmit={formik.handleSubmit}
        className="min-w-[400px] p-4 flex-col shadow-none"
        elevation={5}
      >
        <Typography variant="h5" component="h1" mb={2}>
          Register
        </Typography>
        <Stack gap={2}>
          <TextField
            type="email"
            name="email"
            size="small"
            placeholder="Enter your full name"
            disabled={isLoading}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            type="password"
            name="password"
            size="small"
            placeholder="Enter your full name"
            disabled={isLoading}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && !!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button
            type="submit"
            variant="contained"
            startIcon={
              isLoading ? (
                <CircularProgress size={20} sx={{ color: "text.disabled" }} />
              ) : (
                <ArrowIcon />
              )
            }
          >
            Submit
          </Button>
        </Stack>
      </Paper>
    </div>
  );
};

export default LoginPage;
