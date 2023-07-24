import React, { createElement, Dispatch, SetStateAction } from "react";
import MuiDrawer from "@mui/material/Drawer";
import {
  styled,
  Theme,
  CSSObject,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  ListItemButton,
  Divider,
  Box,
  Tooltip,
  Collapse,
  SvgIconTypeMap,
  Popover
} from "@mui/material";
import {
  DashboardOutlined,
  EventOutlined,
  BuildOutlined,
  PersonOutline,
  DirectionsCarOutlined,
  Inventory2Outlined
} from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import AppEnvironmentToggle from "./AppEnvironmentToggle";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ApplicationContext, Route } from "./ApplicationContext";

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

interface drawerListItem {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  label: string;
  bottom: boolean;
  nested?: string[];
  onClick?: () => void | undefined;
}

interface MenuListItemProps {
  open: boolean;
  item: drawerListItem;
  TopIndex: number;
  selectedIndex: number;
  setSelected: Dispatch<SetStateAction<number>>;
  onClick?: () => void | undefined;
}

const MenuListItem: React.FC<MenuListItemProps> = ({
  open,
  item,
  TopIndex,
  selectedIndex,
  setSelected,
  onClick
}) => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const hoverNestedOpen = Boolean(anchorEl);

  const handleSelectedListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelected(index);
    if (onClick) {
      onClick();
    }
  };

  const handleHoverNestedClick = (
    event: MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleHoverNestedClose = () => {
    setSelected(TopIndex);
    if (onClick) {
      onClick();
    }
    setAnchorEl(null);
  };

  React.useEffect(() => {
    if (selectedIndex === TopIndex) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [selectedIndex]);

  return (
    <>
      <ListItem
        disablePadding
        sx={{ display: "block", ...(item.bottom && { mt: "auto" }) }}
      >
        <Tooltip
          title={item.label}
          placement="right"
          arrow
          disableHoverListener={open || (item.nested && item.nested.length > 0)}
        >
          <ListItemButton
            selected={selectedIndex === TopIndex}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              opacity: 0.7,
              "&:hover": { backgroundColor: "rgba(0,0,0,.2)", opacity: 1 },
              "&.Mui-selected": {
                backgroundColor: "rgba(255,255,255,.2)",
                opacity: 1
              },
              "&.Mui-selected:hover": {
                backgroundColor: "rgba(255,255,255,.2)"
              }
            }}
            onClick={(event) => handleSelectedListItemClick(event, TopIndex)}
            onMouseOver={(event) =>
              !open ? handleHoverNestedClick(event) : null
            }
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 2 : "auto",
                justifyContent: "center",
                color: "inherit"
              }}
            >
              {createElement(item.icon)}
            </ListItemIcon>

            <ListItemText
              primary={item.label}
              sx={{ opacity: open ? 1 : 0, color: "inherit" }}
            />
            {open &&
              item.nested &&
              item.nested.length > 0 &&
              (expanded ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
        </Tooltip>
      </ListItem>
      {open && item.nested && item.nested.length > 0 && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.nested.map((nestedItem, index) => {
              return index !== 0 ? (
                <ListItemButton
                  key={`${index}-nestedItem-${item.label}`}
                  sx={{
                    minHeight: 48,
                    justifyContent: "initial",
                    px: 2.5,
                    backgroundColor: "rgba(255,255,255,.1)",
                    "&:hover": { backgroundColor: "rgba(0,0,0,.2)" }
                  }}
                  onClick={onClick}
                >
                  <ListItemText primary={nestedItem} />
                </ListItemButton>
              ) : null;
            })}
          </List>
        </Collapse>
      )}
      {!open && item.nested && item.nested.length > 0 && (
        <Popover
          anchorEl={anchorEl}
          open={hoverNestedOpen}
          elevation={0}
          onClose={handleHoverNestedClose}
          onMouseLeave={handleHoverNestedClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          PaperProps={{ sx: { borderRadius: 0 } }}
        >
          <List
            disablePadding
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "white"
            }}
          >
            {item.nested.map((nestedItem, index) => (
              <ListItem
                key={`${index}-nestedItem-${item.label}`}
                disablePadding
              >
                <ListItemButton
                  onClick={handleHoverNestedClose}
                  sx={{ "&:hover": { backgroundColor: "rgba(0,0,0,.2)" } }}
                >
                  <ListItemText primary={nestedItem} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Popover>
      )}
    </>
  );
};

interface AppSideMenuProps {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
}

const AppSideMenu: React.FC<AppSideMenuProps> = ({
  open,
  handleClose,
  handleOpen
}) => {
  const theme = useTheme();
  const { setRoute } = React.useContext(ApplicationContext);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const drawerListItems: drawerListItem[] = [
    {
      icon: DashboardOutlined,
      label: "Dashboard",
      bottom: false,
      onClick: () => setRoute(Route.dashboard)
    },
    { icon: EventOutlined, label: "Calendar", bottom: false },
    {
      icon: BuildOutlined,
      label: "Orders",
      bottom: false,
      onClick: () => setRoute(Route.orders),
      nested: ["Orders", "Quotations", "Invoices", "Claims"]
    },
    { icon: PersonOutline, label: "Accounts", bottom: false },
    { icon: DirectionsCarOutlined, label: "Vehicles", bottom: false },
    {
      icon: Inventory2Outlined,
      label: "Stock",
      bottom: false,
      nested: [
        "Stock",
        "Order suggestions",
        "Receive stock",
        "Returns",
        "Tyre storage"
      ]
    },
    { icon: TuneOutlinedIcon, label: "Settings", bottom: true }
  ];

  const drawer = (
    <Box
      sx={{ display: "flex", flexDirection: "column", flex: "0 0 100%", pb: 2 }}
    >
      <DrawerHeader>
        {open && (
          <IconButton onClick={handleClose} sx={{ color: "inherit" }}>
            <ChevronLeftIcon />
          </IconButton>
        )}
        {!open && (
          <IconButton
            onClick={handleOpen}
            sx={{ margin: "auto", color: "inherit" }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </DrawerHeader>
      <Divider />
      <List sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {drawerListItems.map((item, index) => (
          <MenuListItem
            key={`${index}-${item.label}`}
            TopIndex={index}
            selectedIndex={selectedIndex}
            setSelected={setSelectedIndex}
            open={open}
            item={item}
            onClick={item.onClick}
          />
        ))}
      </List>
      <Divider />
      <Tooltip title={<AppEnvironmentToggle />}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
            "& > img": { display: "block" }
          }}
        >
          <>
            <Box sx={{ display: open ? "none" : "block" }}>
              <img src="images/logogram-b.svg" alt="menulogo" />
            </Box>
            <Box sx={{ display: open ? "block" : "none" }}>
              <img src="images/logo-b.svg" alt="menulogo" />
            </Box>
          </>
        </Box>
      </Tooltip>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        "& > .MuiPaper-root": {
          backgroundColor: theme.palette.primary.main,
          color: "white"
        }
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default AppSideMenu;
