import { Link, Stack } from "@mui/material";

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
      <Link href="/">Home</Link>
      <Link href="/all-books">All Books</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </Stack>
  );
}

export default NavLinks;
