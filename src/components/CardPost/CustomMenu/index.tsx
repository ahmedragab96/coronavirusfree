import React from "react";
import { Menu, MenuItem, IconButton } from "@material-ui/core";

const CustomMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        aria-label="More"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6875 5.41406C10.6875 5.76216 10.8258 6.096 11.0719 6.34214C11.3181 6.58828 11.6519 6.72656 12 6.72656C12.3481 6.72656 12.6819 6.58828 12.9281 6.34214C13.1742 6.096 13.3125 5.76216 13.3125 5.41406C13.3125 5.06597 13.1742 4.73213 12.9281 4.48598C12.6819 4.23984 12.3481 4.10156 12 4.10156C11.6519 4.10156 11.3181 4.23984 11.0719 4.48598C10.8258 4.73213 10.6875 5.06597 10.6875 5.41406ZM10.6875 11.9766C10.6875 12.3247 10.8258 12.6585 11.0719 12.9046C11.3181 13.1508 11.6519 13.2891 12 13.2891C12.3481 13.2891 12.6819 13.1508 12.9281 12.9046C13.1742 12.6585 13.3125 12.3247 13.3125 11.9766C13.3125 11.6285 13.1742 11.2946 12.9281 11.0485C12.6819 10.8023 12.3481 10.6641 12 10.6641C11.6519 10.6641 11.3181 10.8023 11.0719 11.0485C10.8258 11.2946 10.6875 11.6285 10.6875 11.9766ZM10.6875 18.5391C10.6875 18.8872 10.8258 19.221 11.0719 19.4671C11.3181 19.7133 11.6519 19.8516 12 19.8516C12.3481 19.8516 12.6819 19.7133 12.9281 19.4671C13.1742 19.221 13.3125 18.8872 13.3125 18.5391C13.3125 18.191 13.1742 17.8571 12.9281 17.611C12.6819 17.3648 12.3481 17.2266 12 17.2266C11.6519 17.2266 11.3181 17.3648 11.0719 17.611C10.8258 17.8571 10.6875 18.191 10.6875 18.5391Z"
            fill="#211F1F"
          />
        </svg>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Report Link</MenuItem>
      </Menu>
    </>
  );
};
export default CustomMenu;
