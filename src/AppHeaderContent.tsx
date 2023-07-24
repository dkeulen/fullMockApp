import React from "react";
import {
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Stack,
  Chip,
  SelectChangeEvent,
  IconButton,
  useTheme,
  Tooltip,
  formControlClasses,
  textFieldClasses,
  outlinedInputClasses,
  inputBaseClasses
} from "@mui/material";
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import User from "./AppHeaderItems/User";
import Messages from "./AppHeaderItems/Messages";
import Shops from "./AppHeaderItems/Shops";
import SetupProgress from "./AppHeaderItems/SetupProgress";
import TimeRegistrationHeader from "./AppHeaderItems/TimeRegistrationHeader";
import DateTime from "./AppHeaderItems/DateTime";
import { ApplicationContext } from "./ApplicationContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from ".";

interface AppHeaderContentProps {
  sideMenuOpen: boolean;
}

const AppHeaderContent: React.FC<AppHeaderContentProps> = ({
  sideMenuOpen
}) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const { isPortal } = React.useContext(ApplicationContext);

  const [searchFilter, setSearchFilter] = React.useState("1");
  const handleSearchChange = (event: SelectChangeEvent) => {
    setSearchFilter(event.target.value as string);
  };

  const searchPlaceholder = () => {
    switch (searchFilter) {
      case "1" || 1:
        return "Search on:";
      case "2" || 2:
        return "e.g. L-132-LD";
      case "3" || 3:
        return "e.g. 2023000001";
      case "4" || 4:
        return "e.g. 2023000001";
      default:
        return "Search on:";
    }
  };
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mr: 2
          }}
        >
          <Box
            sx={{
              display: sideMenuOpen ? "block" : "none",
              height: { lg: "1.5em", xl: "auto" },
              "& > img": { height: "inherit" }
            }}
          >
            <img src="images/logogram.svg" alt="logo" />
          </Box>
          <Box
            sx={{
              display: sideMenuOpen ? "none" : "block",
              height: { lg: "1.5em", xl: "auto" },
              "& > img": { height: "inherit" }
            }}
          >
            <img src="images/logo.svg" alt="logo" />
          </Box>
        </Box>
        {/* <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
          <DateTime />
        </Box> */}
        <TextField
          InputProps={{
            startAdornment: <SearchOutlinedIcon fontSize="small" />,
            endAdornment: (
              <FormControl
                sx={{
                  display: "inline-flex",
                  flex: "0 0 auto"
                }}
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={searchFilter}
                  onChange={handleSearchChange}
                  size="small"
                  autoWidth={false}
                  sx={{
                    "& .MuiSelect-select": {
                      paddingX: 1,
                      paddingY: 0,
                      borderColor: "#ccc"
                    }
                  }}
                >
                  <MenuItem value={1}>All</MenuItem>
                  <MenuItem value={2}>Vehicles</MenuItem>
                  <MenuItem value={3}>Quotations</MenuItem>
                  <MenuItem value={4}>Workorders</MenuItem>
                </Select>
              </FormControl>
            )
          }}
          placeholder={searchPlaceholder()}
          size="small"
          sx={{
            mr: 2,
            minWidth: { lg: "18em", xl: "22em" },
            borderColor: "transparent",
            [`& .${inputBaseClasses.root}`]: {
              backgroundColor: theme.background.topBar.search.backgroundColor
            },
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "transparent"
            },
            [`& .${outlinedInputClasses.root}`]: {
              borderColor: "transparent",
              "&:hover": {
                [`& .${outlinedInputClasses.notchedOutline}`]: {
                  borderColor: "rgba(0,0,0,0.2)"
                }
              }
            }
          }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Stack
          spacing={{ lg: 2, xl: 3 }}
          direction="row"
          sx={{ "& *": { color: "inherit !important" } }}
        >
          {!isPortal && <TimeRegistrationHeader />}
          <SetupProgress />
          <Shops />
          <Messages />
          <User />
          <Chip
            icon={<SupportOutlinedIcon />}
            label="Help"
            variant="outlined"
            // sx={{ borderColor: theme.palette.primary.light }}
          />
          <IconButton
            // sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Tooltip title="Enable light mode">
                <Brightness7Icon fontSize="small" />
              </Tooltip>
            ) : (
              <Tooltip title="Enable dark mode">
                <Brightness4Icon fontSize="small" />
              </Tooltip>
            )}
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default AppHeaderContent;
