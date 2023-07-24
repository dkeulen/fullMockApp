import React, { FunctionComponent, ReactNode } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  SxProps,
  Typography,
  useTheme
} from "@mui/material";

interface DashboardWidgetContainerProps {
  title?: ReactNode;
  action?: FunctionComponent | null;
  disablePadding?: boolean;
  divider?: boolean;
  sx?: SxProps;
  children: ReactNode;
}

// Developer note: this code should not be used as per some brainstorming, the setup for this componnent is going to be done different.
// But still with the same result. allowing more freedom too devs on how too layout the content/elements as needed.

const DashboardWidgetContainer: React.FC<DashboardWidgetContainerProps> = ({
  title,
  action,
  disablePadding,
  divider = true,
  sx,
  children
}) => {
  const theme = useTheme();

  return (
    <Card sx={{ overflow: "hidden", ...sx }}>
      {title && (
        <>
          <CardHeader
            title={
              <Typography sx={{ lineHeight: 1.6, fontWeight: 700 }}>
                {title}
              </Typography>
            }
            action={
              action ? (
                <Box sx={{ "& > button": { lineHeight: 1 } }}>
                  {React.createElement(action)}
                </Box>
              ) : undefined
            }
            sx={{
              display: "flex",
              alignItems: "center",
              paddingY: 1,
              paddingX: 2,
              "& .MuiCardHeader-action": { mt: 0 }
            }}
          />
          {divider && <Divider />}
        </>
      )}
      <CardContent
        sx={
          disablePadding
            ? { p: `${theme.spacing(0)} !important` }
            : { p: 2, paddingY: 2, pb: `${theme.spacing(2)} !important` }
        }
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default DashboardWidgetContainer;
