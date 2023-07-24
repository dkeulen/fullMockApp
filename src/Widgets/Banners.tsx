import React from "react";
import { Box, IconButton, Stack } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CircleIcon from "@mui/icons-material/Circle";

const Banners: React.FC = () => {
  return (
    <Box>
      <Box>
        <img
          src="https://www.fource.nl/wp-content/uploads/sites/27/2022/07/tire-banner-GB.png"
          alt="banner"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1
        }}
      >
        <IconButton size="small">
          <KeyboardArrowLeftIcon fontSize="small" />
        </IconButton>
        <Stack spacing={1} direction="row">
          <CircleIcon sx={{ fontSize: 8 }} color="primary" />
          <CircleIcon sx={{ fontSize: 8, opacity: 0.3 }} />
          <CircleIcon sx={{ fontSize: 8, opacity: 0.3 }} />
        </Stack>
        <IconButton size="small">
          <KeyboardArrowRightIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Banners;
