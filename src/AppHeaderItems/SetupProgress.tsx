import React from "react";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress,
  linearProgressClasses,
  Tooltip,
  Typography,
  useTheme
} from "@mui/material";
import { green } from "@mui/material/colors";

const User: React.FC = () => {
  const theme = useTheme();
  const setupPercent = 75;
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <Tooltip title={`Set-up your shop: ${setupPercent}% complete`}>
        <Chip
          label={
            <Box
              sx={{ display: "flex", alignItems: "center", color: "inherit" }}
            >
              <LinearProgress
                value={setupPercent}
                variant="determinate"
                sx={{
                  width: "100%",
                  minWidth: { lg: "3em", xl: "5em" },
                  mr: 0.5,
                  height: 8,
                  borderRadius: 5,
                  [`&.${linearProgressClasses.colorPrimary}`]: {
                    backgroundColor: theme.palette.grey[300]
                  },
                  [`& .${linearProgressClasses.bar}`]: {
                    borderRadius: 5,
                    backgroundColor: green[400]
                  }
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "inherit" }}
              >{`${setupPercent}%`}</Typography>
            </Box>
          }
          sx={{ color: "inherit" }}
          onClick={() => setOpen(true)}
        />
      </Tooltip>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Shop set-up</DialogTitle>
        <DialogContent dividers>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          doloribus beatae neque, sapiente tenetur quod eius dolor minus unde
          voluptates deserunt earum vel. Vitae nemo earum tenetur repellat
          accusamus facere.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default User;
