import React from "react";
import { Box, Typography, Toolbar, useTheme, styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import PortalDash from "./PortalDash";
import GmsDash from "./GmsDash";
import NextGenDash from "./NextGenDash";
import AppHeaderContent from "./AppHeaderContent";
import WidgetSelect from "./Assets/NextGen/WidgetSelect";
import { ApplicationContext, Option } from "./ApplicationContext";
import AppSideMenu from "./AppSideMenu";
import { grey } from "@mui/material/colors";
import AppFooter from "./AppFooter";
import Orders from "./Orders";

const drawerWidth = 200;
const toolBarHeight = "64px"; // using px here, the amount of px is derived from the mui theme itself

export const isOption = (currentOption: Option, options: string[]) => {
  return options.includes(currentOption);
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
  width: `calc(100% - ${theme.spacing(8)})`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const App: React.FC = () => {
  const theme = useTheme();
  const { environment, route } = React.useContext(ApplicationContext);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        Height: "100vh",
        maxHeight: "100vh",
        overflow: "hidden"
      }}
    >
      <AppBar position="fixed" elevation={0} open={open}>
        <Toolbar
          sx={{
            paddingX: `${theme.spacing(2)} !important`,
            backgroundColor: theme.background.topBar.backgroundColor,
            color: theme.background.topBar.color,
            height: toolBarHeight
          }}
        >
          <AppHeaderContent sideMenuOpen={open} />
        </Toolbar>
      </AppBar>

      <AppSideMenu
        open={open}
        handleClose={handleDrawerClose}
        handleOpen={handleDrawerOpen}
      />

      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          Height: `calc(100vh - ${toolBarHeight})`,
          mt: toolBarHeight,
          backgroundColor: theme.background.view
        }}
      >
        <Box sx={{ minHeight: `calc(100vh - ${toolBarHeight})` }}>
          <Box sx={{ p: 2, pt: 1 }}>
            {route === "dashboard" && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: 0.5,
                    mb: 1
                  }}
                >
                  <Typography variant="h6" sx={{ lineHeight: 1 }}>
                    Dashboard
                  </Typography>
                  {environment === "NextGen" && <WidgetSelect />}
                </Box>

                {environment === "Portal" && <PortalDash />}
                {environment === "GMS" && <GmsDash />}
                {environment === "NextGen" && (
                  <NextGenDash sideMenuOpen={open} />
                )}
              </>
            )}
            {route === "orders" && (
              <>
                <Orders />
              </>
            )}
          </Box>
        </Box>
        <AppFooter />
      </Box>
    </Box>
  );
};

export default App;
