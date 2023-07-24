import React from "react";
import { Chip, useTheme, MenuItem, Menu, Typography, Box } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";

const shops = [
  { name: "Picobello BV", location: "Heerlen" },
  { name: "Westcoast Customs", location: "kerkrade" },
  { name: "Kindig-it", location: "Maastricht" },
  { name: "Overhaulin", location: "Roermond" }
];

const Shops: React.FC = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  return (
    <>
      <Chip
        icon={<StoreOutlinedIcon />}
        label={
          <Box sx={{ display: { lg: "none", xl: "block" } }}>
            {shops[selectedIndex].name}
          </Box>
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
        {shops.map((shop, index) => {
          return (
            <MenuItem
              key={`${index}-shop`}
              divider={index !== shops.length - 1}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              <Box>
                <Typography sx={{ lineHeight: 1 }}>{shop.name}</Typography>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>
                  {shop.location}
                </Typography>
              </Box>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default Shops;
