import React from "react";
import {
  Avatar,
  Chip,
  Divider,
  Menu,
  MenuItem,
  Typography,
  useTheme
} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const User: React.FC = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Chip
        avatar={<Avatar>JD</Avatar>}
        deleteIcon={<KeyboardArrowDownOutlinedIcon />}
        onDelete={() => {}}
        variant="outlined"
        sx={{
          // borderColor: theme.palette.primary.light,
          "& .MuiChip-deleteIcon": { pointerEvents: "none" }
        }}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <Typography sx={{ paddingX: 2, fontWeight: 700, pb: 1 }}>
          John Doe
        </Typography>
        <Divider />
        <MenuItem onClick={handleClose}>User settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default User;
