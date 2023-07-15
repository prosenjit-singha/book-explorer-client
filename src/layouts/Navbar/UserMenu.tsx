import { Menu, MenuItem } from "@mui/material";

type UserMenuProps = {
  anchorEl: HTMLElement | null;
  onClose: () => void;
};

const UserMenu = ({ anchorEl, onClose }: UserMenuProps) => {
  const menuId = "user-menu";
  const isMenuOpen = Boolean(anchorEl);

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
      <MenuItem onClick={onClose}>My Profile</MenuItem>
      <MenuItem onClick={onClose}>Settings</MenuItem>
      <MenuItem onClick={onClose}>My Books</MenuItem>
      <MenuItem onClick={onClose}>Logout</MenuItem>
    </Menu>
  );
};

export default UserMenu;
