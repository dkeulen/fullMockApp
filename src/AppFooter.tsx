import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme
} from "@mui/material";
import { grey } from "@mui/material/colors";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const AppFooter: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box sx={{ backgroundColor: grey[600], color: "white", px: 2, py: 4 }}>
        <Grid container xl={12}>
          <Grid xl={3}>
            <List
              subheader={
                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    textTransform: "uppercase",
                    opacity: 0.8
                  }}
                >
                  Legal notices
                </Typography>
              }
              dense
              disablePadding
            >
              <ListItem disablePadding>
                <ListItemText primary="Privacy" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Security" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Cookies" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Terms & Conditions" />
              </ListItem>
            </List>
          </Grid>
          <Grid xl={3}>
            <List
              subheader={
                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    textTransform: "uppercase",
                    opacity: 0.8
                  }}
                >
                  Customer support
                </Typography>
              }
              dense
              disablePadding
            >
              <ListItem disablePadding>
                <ListItemText primary="Contact us" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="FAQ" />
              </ListItem>
            </List>
          </Grid>
          <Grid xl={3}>
            <List
              subheader={
                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    textTransform: "uppercase",
                    opacity: 0.8
                  }}
                >
                  Your shop
                </Typography>
              }
              dense
              disablePadding
            >
              <ListItem disablePadding>
                <ListItemText primary="Name: Your shop-name" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Shop ID: NL000001" />
              </ListItem>
            </List>
          </Grid>
          <Grid xl={3}>
            <List
              subheader={
                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    textTransform: "uppercase",
                    opacity: 0.8
                  }}
                >
                  Your supplier
                </Typography>
              }
              dense
              disablePadding
            >
              <ListItem disablePadding>
                <ListItemText primary="Name: Your suplier-name" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Suplier ID: SUP000001" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="- contact details -" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: grey[700],
          p: 3,
          color: "white"
        }}
      >
        <Box
          sx={{
            borderRadius: theme.shape.borderRadius,
            backgroundColor: "white",
            mr: 1,
            p: 0.5
          }}
        >
          <img
            src="images/logo.svg"
            alt="footer-logo"
            style={{
              display: "block",
              height: "1em",
              marginRight: theme.spacing(1)
            }}
          />
        </Box>

        <Box
          component="span"
          sx={{ display: "flex", alignItems: "center", opacity: 0.6, mr: 1 }}
        >
          {/* with <FavoriteBorderOutlinedIcon sx={{ fontSize: 18, mx: 0.5 }} /> */}
          by
        </Box>
        <Typography>Software Co.</Typography>
        <Box component="span" sx={{ opacity: 0.6, mx: 1 }}>
          a
        </Box>
        <Typography>Bussines Company</Typography>
      </Box>
    </Box>
  );
};

export default AppFooter;
