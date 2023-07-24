import React from "react";
import { Chip, Box, Tooltip, IconButton } from "@mui/material";
import { orange, green } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";

interface ScheduleAbsentProps {
  totalAbsent: number;
}

const ScheduleAbsent: React.FC<ScheduleAbsentProps> = ({ totalAbsent }) => {
  const areAbsent = totalAbsent !== 0;

  return (
    <Chip
      label={<>{totalAbsent} absent</>}
      deleteIcon={
        <Tooltip title="Add absence">
          <IconButton
            size="small"
            color={areAbsent ? "warning" : "success"}
            sx={{
              backgroundColor: "white",
              border: "1px solid black",
              borderColor: areAbsent ? orange[300] : green[500],
              m: "0px !important",
              p: 0.4,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.8)" }
            }}
          >
            <AddIcon
              sx={{ fontSize: 16 }}
              color={areAbsent ? "warning" : "success"}
            />
          </IconButton>
        </Tooltip>
      }
      onDelete={() => {}}
      variant="filled"
      size="small"
      sx={{
        backgroundColor: areAbsent ? orange[300] : green[500]
      }}
    />
  );
};

export default ScheduleAbsent;
