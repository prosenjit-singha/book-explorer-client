import { Paper, Typography, TextField, Stack, Button } from "@mui/material";
import { useFormik } from "formik";
import { registerUserSchema } from "./form.validation";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: registerUserSchema,
  });
  return (
    <div className="flex items-center justify-center">
      <Paper className="min-w-[400px] p-4 my-4 flex-col">
        <Typography variant="h5" component="h1" mb={2}>
          Register
        </Typography>
        <Stack gap={2}>
          <TextField
            label="Full Name"
            name="fullName"
            placeholder="Enter your full name"
            size="small"
            autoComplete="off"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && !!formik.errors.fullName}
            helperText={formik.touched.fullName && formik.errors.fullName}
            disabled={formik.isSubmitting}
          />
          <TextField
            label="Email"
            name="email"
            placeholder="Enter Email Address"
            size="small"
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
            disabled={formik.isSubmitting}
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            placeholder="Enter phoneNumber"
            autoComplete="off"
            size="small"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            disabled={formik.isSubmitting}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            size="small"
            placeholder="Enter a strong password"
            autoComplete="off"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && !!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
            disabled={formik.isSubmitting}
          />
          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Enter your full name"
            size="small"
            autoComplete="off"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword && !!formik.errors.confirmPassword
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            disabled={formik.isSubmitting}
          />

          <Button variant="contained">Register</Button>

          <Typography>
            Already have an account? <Link to="/login">Login here</Link>
          </Typography>
        </Stack>
      </Paper>
    </div>
  );
};

export default RegisterPage;
