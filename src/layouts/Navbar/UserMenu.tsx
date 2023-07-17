import { Menu, MenuItem } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logoutUser } from "../../redux/features/user/user.slice";
import { Link } from "react-router-dom";

type UserMenuProps = {
  anchorEl: HTMLElement | null;
  onClose: () => void;
};

const UserMenu = ({ anchorEl, onClose }: UserMenuProps) => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const menuId = "user-menu";
  const isMenuOpen = Boolean(anchorEl);

  const fullName = user
    ? user?.fullName.slice(0, 10) + (user?.fullName.length > 9 ? "..." : "")
    : "Welcome";

  const handleLogout = async () => {
    await dispatch(logoutUser());
    onClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={onClose}
    >
      <MenuItem divider disableRipple>
        {fullName}
      </MenuItem>
      <MenuItem onClick={onClose}>My Profile</MenuItem>
      <MenuItem onClick={onClose}>Settings</MenuItem>
      <MenuItem component={Link} to="/my-books" onClick={onClose}>
        My Books
      </MenuItem>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
};

export default UserMenu;
