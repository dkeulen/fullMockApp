import React from "react";
import { Button, Stack } from "@mui/material";

const QuickLinks: React.FC = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ "& button > img": { height: { xs: "1.2rem", xl: "1.5rem" } } }}
    >
      <Button variant="outlined" fullWidth sx={{ paddingX: 4 }}>
        <img
          src="https://carsys-media.s3.eu-central-1.amazonaws.com/cbgms/catalog/logo_ToolSpecial_nl-NL.png"
          alt="quicklink"
        />
      </Button>
      <Button variant="outlined" fullWidth sx={{ paddingX: 4 }}>
        <img
          src="https://carsys-media.s3.eu-central-1.amazonaws.com/cbgms/catalog/logo_UniversalParts_nl-NL.png"
          alt="quicklink"
        />
      </Button>
    </Stack>
  );
};

export default QuickLinks;
