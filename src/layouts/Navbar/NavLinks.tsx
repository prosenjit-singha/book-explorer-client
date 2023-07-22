import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
function NavLinks() {
  const { user } = useAppSelector((state) => state.user);
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
      <Link to="/books">All Books</Link>
      <Link to="/add-book" style={{ display: user ? "inline" : "none" }}>
        Add Book
      </Link>
      <Link to="/login" style={{ display: user ? "none" : "inline" }}>
        Login
      </Link>
      <Link to="/register" style={{ display: user ? "none" : "inline" }}>
        Register
      </Link>
    </Stack>
  );
}

export default NavLinks;
