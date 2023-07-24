import React from "react";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton
} from "@mui/material";
import { ApplicationContext, Environment } from "./ApplicationContext";

const AppEnvironmentToggle: React.FC = () => {
  const { environment, setEnvironment } = React.useContext(ApplicationContext);

  const handleEnvironmentChange = (
    event: React.MouseEvent<HTMLElement>,
    newEnvironment: Environment
  ) => {
    setEnvironment(newEnvironment);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "auto",
        pb: 2,
        px: 2,
        backgroundColor: "white",
        borderRadius: "4px"
      }}
    >
      <Typography sx={{ color: "darkgrey" }}>Environment</Typography>
      <ToggleButtonGroup
        value={environment}
        exclusive
        onChange={handleEnvironmentChange}
        size="small"
        sx={{ display: "flex", flexWrap: "wrap" }}
      >
        <ToggleButton
          size="small"
          value={Environment.gms}
          sx={{ flex: "1 1 50%" }}
        >
          GMS
        </ToggleButton>
        <ToggleButton
          size="small"
          value={Environment.portal}
          sx={{ flex: "1 1 50%", borderRadius: "0 4px 4px 0 !important" }}
        >
          Portal
        </ToggleButton>
        <ToggleButton
          size="small"
          value={Environment.nextgen}
          sx={{
            flex: "0 0 100%",
            borderLeft: "1px solid rgba(0, 0, 0, 0.12) !important",
            borderRadius: "4px !important",
            mt: 0.5
          }}
        >
          NextGen
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default AppEnvironmentToggle;
