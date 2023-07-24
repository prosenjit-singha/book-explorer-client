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
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";

type Credential = {
  email: string;
  password: string;
};

const initialValues: Credential = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const { isLoading, user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onSubmit = async (
    values: Credential
    // actions: FormikHelpers<Credential>
  ) => {
    await toast.promise(dispatch(loginUser(values)), {
      loading: "Logging you in...",
      success: "Logged in successfully!",
      error: "Invalid credentials!",
    });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: loginSchema,
  });

  // console.log(data);
  if (user) return <Navigate to={"/"} replace />;

  return (
    <div className="flex justify-center h-full my-auto">
      <Paper
        component="form"
        onSubmit={formik.handleSubmit}
        className="min-w-[400px] p-4 flex-col shadow-none"
        elevation={5}
      >
        <Typography variant="h5" component="h1" mb={2}>
          Login
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
            Login
          </Button>

          <Typography>
            Don't have an account? <Link to="/register">Register here</Link>
          </Typography>
        </Stack>
      </Paper>
    </div>
  );
};

export default LoginPage;
