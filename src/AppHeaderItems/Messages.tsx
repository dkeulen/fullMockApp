import React from "react";
import {
  Chip,
  Badge,
  useTheme,
  Menu,
  Divider,
  Typography,
  Box
} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import NothingAlert from "../Custom/Components/NothingAlert";

const Messages: React.FC = () => {
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
        icon={
          <Badge
            badgeContent={2}
            color="error"
            sx={{ "& .MuiBadge-badge": { color: "white !important" } }}
          >
            <NotificationsNoneOutlinedIcon />
          </Badge>
        }
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
          Messages
        </Typography>
        <Divider />
        <Box sx={{ p: 2, pb: 1 }}>
          <NothingAlert message="No new messages (badge shows 2 for demo purpose)." />
        </Box>
      </Menu>
    </>
  );
};

export default Messages;
