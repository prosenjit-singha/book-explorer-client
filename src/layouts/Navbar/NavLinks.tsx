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
      <Link>Home</Link>
      <Link>All Books</Link>
      <Link>Login</Link>
      <Link>Register</Link>
    </Stack>
  );
}

export default NavLinks;
