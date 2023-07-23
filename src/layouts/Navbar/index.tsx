import React from "react";
import { AppBar, Box, Toolbar, IconButton, Badge } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logo from "../../components/Logo";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import { useAppSelector } from "../../redux/hooks";
import FavoriteFilledIcon from "@mui/icons-material/FavoriteRounded";
import ReadingFilledIcon from "@mui/icons-material/AutoStoriesRounded";
import { Link } from "react-router-dom";
import { useGetReadingListQuery } from "../../redux/features/reading/reading.api";
import { useGetWishlistQuery } from "../../redux/features/wishlist/wishlist.api";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { data: readingList } = useGetReadingListQuery(undefined);

  const { data: wishlist } = useGetWishlistQuery(undefined);

  const totalReadingBooks =
    (readingList && readingList.meta?.totalResults) || 0;

  const totalWishlistBooks = (wishlist && wishlist.meta?.totalResults) || 0;

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Logo />

          <NavLinks />

          <Box sx={{ display: user ? "block" : "none" }}>
            {/* Wishlist */}
            <IconButton
              component={Link}
              to="/wishlist"
              size="large"
              aria-label="wishlist"
              color="inherit"
            >
              <Badge badgeContent={totalWishlistBooks} color="error">
                <FavoriteFilledIcon />
              </Badge>
            </IconButton>

            {/* Reading list */}
            <IconButton size="large" aria-label="reading" color="inherit">
              <Badge badgeContent={totalReadingBooks} color="error">
                <ReadingFilledIcon />
              </Badge>
            </IconButton>

            {/* User Account */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <UserMenu anchorEl={anchorEl} onClose={handleMenuClose} />
    </Box>
  );
};

export default Navbar;
