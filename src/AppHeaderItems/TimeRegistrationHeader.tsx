import React from "react";
import { Box, Chip, IconButton, Tooltip, useTheme } from "@mui/material";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";
import FreeBreakfastOutlinedIcon from "@mui/icons-material/FreeBreakfastOutlined";
import { intervalToDuration } from "date-fns";
import { ApplicationContext } from "../ApplicationContext";
import ShortTimer from "../Custom/Functions/ShortTimer";
import CoffeeOffOutlinedIcon from "../Custom/Icons/CoffeeOff";

const TimeRegistrationHeader: React.FC = () => {
  const theme = useTheme();
  const { isWorking, setIsWorking, onBreak, setOnBreak } = React.useContext(
    ApplicationContext
  );
  const [breakTimer, setBreakTimer] = React.useState<Duration>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const label = () => {
    if (!onBreak) {
      return (
        <Box sx={{ opacity: onBreak ? 0.3 : 1, mr: 2 }}>
          {isWorking ? "End workday" : "Start workday"}
        </Box>
      );
    }

    if (onBreak) {
      return <Box sx={{ color: "inherit" }}>{ShortTimer(breakTimer)}</Box>;
    }
  };

  React.useEffect(() => {
    if (onBreak) {
      const currentDate = new Date();
      const breakTick = setInterval(() => {
        setBreakTimer(
          intervalToDuration({ start: currentDate, end: new Date() })
        );
      }, 500);

      return () => clearInterval(breakTick);
    } else {
      setBreakTimer({ hours: 0, minutes: 0, seconds: 0 });
    }
  }, [onBreak]);

  return (
    <Chip
      icon={
        isWorking ? (
          <StopCircleOutlinedIcon sx={{ opacity: onBreak ? 0.3 : 1 }} />
        ) : (
          <PlayCircleOutlineOutlinedIcon />
        )
      }
      label={label()}
      deleteIcon={
        <Tooltip
          title={isWorking ? (onBreak ? "End break" : "Start break") : ""}
        >
          <IconButton
            size="small"
            sx={{
              opacity: isWorking ? 1 : 0.3,
              backgroundColor: onBreak
                ? theme.palette.warning.main
                : "rgba(0,0,0,.2)",
              "&:hover": {
                backgroundColor: theme.palette.warning.main
              },
              transition: "background-color ease-in-out 150ms",
              pointerEvents: isWorking ? "auto" : "none",
              borderRadius: theme.shape.borderRadius,
              width: "2em",
              ...(onBreak && { color: "white !important" })
            }}
          >
            {onBreak && <CoffeeOffOutlinedIcon sx={{ fontSize: 22 }} />}
            {!onBreak && <FreeBreakfastOutlinedIcon sx={{ fontSize: 22 }} />}
          </IconButton>
        </Tooltip>
      }
      onDelete={isWorking ? () => setOnBreak(!onBreak) : () => {}}
      onClick={onBreak ? undefined : () => setIsWorking(!isWorking)}
      color={isWorking ? "warning" : "default"}
      variant={onBreak ? "outlined" : "filled"}
      sx={{
        "& .MuiChip-deleteIcon": { mr: 0 },
        ...(isWorking && { color: "white !important" }),
        ...(onBreak && { color: "inherit !important" })
      }}
    />
  );
};

export default TimeRegistrationHeader;
