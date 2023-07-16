import { Paper, Typography, TextField, Stack } from "@mui/material";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center">
      <Paper className="min-w-[400px] min-h-[500px] p-4 my-4 flex-col">
        <Typography variant="h2">Register</Typography>
        <Stack gap={2}>
          <TextField name="fullName" placeholder="Enter your full name" />
          <TextField
            type="email"
            name="email"
            size="medium"
            autoComplete="off"
            placeholder="Enter your full name"
          />
          <TextField name="phoneNumber" placeholder="Enter your full name" />
          <TextField
            type="password"
            name="password"
            size="small"
            placeholder="Enter your full name"
          />
          <TextField
            type="password"
            name="confirmPassword"
            placeholder="Enter your full name"
          />
        </Stack>
      </Paper>
    </div>
  );
};

export default RegisterPage;
