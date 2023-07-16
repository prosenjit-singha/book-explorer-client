import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
function NavLinks() {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: 2,
        px: 2,
        ml: "auto",
        "&  a": {
          color: "text.primary",
          textDecoration: "none",
        },
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/all-books">All Books</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </Stack>
  );
}

export default NavLinks;
