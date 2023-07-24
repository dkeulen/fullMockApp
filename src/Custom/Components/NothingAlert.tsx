import React, { ReactNode } from "react";
import { Alert, SxProps, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

interface NothingAlertProps {
  message: ReactNode;
  sx?: SxProps;
}

const NothingAlert: React.FC<NothingAlertProps> = ({ message, sx }) => {
  const theme = useTheme();

  return (
    <Alert
      variant="filled"
      icon={<HelpOutlineOutlinedIcon fontSize="inherit" />}
      sx={{
        backgroundColor: theme.background.emptyAlert.backgroundColor,
        color: theme.background.emptyAlert.color,
        ...sx
      }}
    >
      {message}
    </Alert>
  );
};

export default NothingAlert;
