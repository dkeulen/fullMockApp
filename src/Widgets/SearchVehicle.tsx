import React from "react";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchVehicle: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Button
        startIcon={<SearchIcon fontSize="small" />}
        variant="outlined"
        fullWidth
        sx={{ fontSize: { xs: "0.7rem", xl: theme.typography.fontSize } }}
      >
        Registration or VIN
      </Button>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          marginX: 1,
          width: "2em",
          alignSelf: "stretch"
        }}
      >
        <Divider orientation="vertical" />
        <Typography
          variant="caption"
          sx={{
            backgroundColor: "white",
            position: "absolute",
            zIndex: 2
          }}
        >
          Or
        </Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{
          paddingX: 4,
          fontSize: { xs: "0.7rem", xl: theme.typography.fontSize }
        }}
      >
        Manualy
      </Button>
    </Box>
  );
};

export default SearchVehicle;
