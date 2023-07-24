import React from "react";
import { format, intervalToDuration } from "date-fns";
import {
  alpha,
  Box,
  Button,
  Chip,
  Fade,
  IconButton,
  List,
  ListItem,
  Skeleton,
  Tooltip,
  Typography,
  useTheme
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";
import FreeBreakfastOutlinedIcon from "@mui/icons-material/FreeBreakfastOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CoffeeOffOutlinedIcon from "../Custom/Icons/CoffeeOff";
import LicensePlate from "../Custom/Components/LicensePlate";
import ShortTimer from "../Custom/Functions/ShortTimer";
import { WorkOrderData } from "../Assets/Types";
import WorkOrdersData from "../Assets/WorkOrdersData";
import { ApplicationContext } from "../ApplicationContext";

export const TimeRegistrationWidgetAction: React.FC = () => {
  const { isWorking, setIsWorking, onBreak, setOnBreak } = React.useContext(
    ApplicationContext
  );
  return (
    <>
      <Button
        startIcon={
          onBreak ? (
            <CoffeeOffOutlinedIcon fontSize="small" />
          ) : (
            <FreeBreakfastOutlinedIcon fontSize="small" />
          )
        }
        size="small"
        color={onBreak ? "warning" : "primary"}
        sx={{ mr: 1 }}
        onClick={() => setOnBreak(!onBreak)}
        disabled={!isWorking}
      >
        {onBreak ? "End break" : "Start break"}
      </Button>
      <Button
        startIcon={
          isWorking ? (
            <StopCircleOutlinedIcon fontSize="small" />
          ) : (
            <PlayCircleOutlineOutlinedIcon fontSize="small" />
          )
        }
        size="small"
        variant="contained"
        color={isWorking ? "warning" : "primary"}
        onClick={() => {
          setIsWorking(!isWorking);
          if (isWorking) {
            setOnBreak(false);
          }
        }}
        disableElevation
        disabled={onBreak}
      >
        {isWorking ? "End workday" : "Start workday"}
      </Button>
    </>
  );
};

interface WorkOrderItemProps {
  data: WorkOrderData;
  started: number | undefined;
  setStarted: React.Dispatch<React.SetStateAction<number | undefined>>;
  index: number;
}

const WorkOrderItem: React.FC<WorkOrderItemProps> = ({
  data,
  started,
  setStarted,
  index
}) => {
  const theme = useTheme();
  const active = started === index;

  return (
    <Tooltip title={!active ? "start" : "stop"} placement="left">
      <ListItem
        divider
        disablePadding
        sx={{
          display: "flex",
          width: "100%",
          paddingY: 0.3,
          "&:last-child": { border: "none" },
          opacity: started !== undefined && !active ? 0.3 : 1,
          pointerEvents: started !== undefined && !active ? "none" : "auto",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: alpha(theme.palette.primary.main, 0.04)
          }
        }}
        onClick={() => (active ? setStarted(undefined) : setStarted(index))}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <LicensePlate
            registration={data.registration}
            country={data.country}
            endEmblem={data.emblem}
            size="small"
          />
          <Box sx={{ ml: 2 }}>
            <IconButton size="small" color={active ? "warning" : "default"}>
              {!active && <PlayCircleOutlineOutlinedIcon />}
              {active && <StopCircleOutlinedIcon color="warning" />}
            </IconButton>
          </Box>
        </Box>
      </ListItem>
    </Tooltip>
  );
};

const ClockActionsData = [
  { name: "Generic clock action" },
  {
    name:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam turpis sit amet urna vehicula, at condimentum urna cursus."
  }
];

interface ClockActionItemProps {
  name: string;
  started: number | undefined;
  setStarted: React.Dispatch<React.SetStateAction<number | undefined>>;
  index: number;
}

const ClockActionItem: React.FC<ClockActionItemProps> = ({
  name,
  started,
  setStarted,
  index
}) => {
  const theme = useTheme();
  const active = started === index;

  return (
    <Tooltip title={!active ? "start" : "stop"} placement="left">
      <ListItem
        divider
        disablePadding
        sx={{
          display: "flex",
          width: "100%",
          paddingY: 0.3,
          "&:last-child": { border: "none" },
          opacity: started !== undefined && !active ? 0.3 : 1,
          pointerEvents: started !== undefined && !active ? "none" : "auto",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: alpha(theme.palette.primary.main, 0.04)
          }
        }}
        onClick={() => (active ? setStarted(undefined) : setStarted(index))}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Typography noWrap>{name}</Typography>
          <Box sx={{ ml: 2 }}>
            <IconButton size="small" color={active ? "warning" : "default"}>
              {!active && <PlayCircleOutlineOutlinedIcon />}
              {active && <StopCircleOutlinedIcon color="warning" />}
            </IconButton>
          </Box>
        </Box>
      </ListItem>
    </Tooltip>
  );
};

const TimeRegistration: React.FC = () => {
  const theme = useTheme();
  const { isWorking, onBreak } = React.useContext(ApplicationContext);
  const [breakTimer, setBreakTimer] = React.useState<Duration>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [workOrderStarted, setWorkOrderStarted] = React.useState<
    number | undefined
  >(undefined);
  const [workOrderTimer, setWorkOrderTimer] = React.useState<Duration>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [clockActionStarted, setClockActionStarted] = React.useState<
    number | undefined
  >(undefined);
  const [clockActionTimer, setClockActionTimer] = React.useState<Duration>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    if (onBreak) {
      const currentDate = new Date();
      const onBreakTick = setInterval(() => {
        setBreakTimer(
          intervalToDuration({ start: currentDate, end: new Date() })
        );
      }, 500);

      return () => clearInterval(onBreakTick);
    } else {
      setBreakTimer({ hours: 0, minutes: 0, seconds: 0 });
    }

    if (onBreak) {
      setWorkOrderStarted(undefined);
      setClockActionStarted(undefined);
    }
  }, [onBreak]);

  React.useEffect(() => {
    if (workOrderStarted !== undefined) {
      const currentDate = new Date();
      const workOrderTick = setInterval(() => {
        setWorkOrderTimer(
          intervalToDuration({ start: currentDate, end: new Date() })
        );
      }, 500);

      return () => clearInterval(workOrderTick);
    } else {
      setWorkOrderTimer({ hours: 0, minutes: 0, seconds: 0 });
    }

    if (workOrderStarted !== undefined) {
      setClockActionStarted(undefined);
    }
  }, [workOrderStarted]);

  React.useEffect(() => {
    if (clockActionStarted !== undefined) {
      const currentDate = new Date();
      const clockActionTick = setInterval(() => {
        setClockActionTimer(
          intervalToDuration({ start: currentDate, end: new Date() })
        );
      }, 500);

      return () => clearInterval(clockActionTick);
    } else {
      setClockActionTimer({ hours: 0, minutes: 0, seconds: 0 });
    }

    if (clockActionStarted !== undefined) {
      setWorkOrderStarted(undefined);
    }
  }, [clockActionStarted]);

  return (
    <Box
      sx={
        isWorking
          ? { position: "relative" }
          : { opacity: 0.3, pointerEvents: "none", position: "relative" }
      }
    >
      <Box sx={{ opacity: !onBreak ? 1 : 0.1 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ lineHeight: 1, display: "flex", alignItems: "center" }}
          >
            Started workday at
          </Typography>
          <Chip
            icon={<AccessTimeOutlinedIcon fontSize="small" />}
            label={
              <Typography
                variant="body2"
                sx={{ lineHeight: 1, opacity: isWorking ? 1 : 0 }}
              >
                {isWorking ? format(new Date(), "HH:mm") : "00:00"}
              </Typography>
            }
            sx={{ ml: 1 }}
          />
        </Box>
        <Grid container spacing={3} sx={{ p: 0, mt: 1, mb: 0 }}>
          <Grid xs={6} sx={{ pb: 0 }}>
            <Box sx={{ mb: 1, display: "flex" }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                My clock actions
              </Typography>
              <Fade in={clockActionStarted !== undefined}>
                <Box
                  sx={{
                    ml: "auto",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <TimerOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                  {ShortTimer(clockActionTimer)}
                </Box>
              </Fade>
            </Box>

            {!isWorking && <Skeleton variant="rounded" height={48} />}
            {isWorking && (
              <List disablePadding>
                {ClockActionsData.map((clockAction, index) => {
                  return (
                    <ClockActionItem
                      key={`${index}-timed-clockaction`}
                      name={clockAction.name}
                      started={clockActionStarted}
                      setStarted={setClockActionStarted}
                      index={index}
                    />
                  );
                })}
              </List>
            )}
          </Grid>

          <Grid xs={6} sx={{ pb: 0 }}>
            <Box sx={{ mb: 1, display: "flex" }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                My workorders
              </Typography>
              <Fade in={workOrderStarted !== undefined}>
                <Box
                  sx={{
                    ml: "auto",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <TimerOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                  {ShortTimer(workOrderTimer)}
                </Box>
              </Fade>
            </Box>

            {!isWorking && <Skeleton variant="rounded" height={48} />}
            {isWorking && (
              <List disablePadding>
                {WorkOrdersData.map((worderOrder, index) => {
                  return (
                    <WorkOrderItem
                      key={`${index}-timed-workorder`}
                      data={worderOrder}
                      started={workOrderStarted}
                      setStarted={setWorkOrderStarted}
                      index={index}
                    />
                  );
                })}
              </List>
            )}
          </Grid>
        </Grid>
      </Box>
      <Fade in={onBreak}>
        <Box
          sx={{
            width: `calc(100% + ${theme.spacing(4)})`,
            height: `calc(100% + ${theme.spacing(4)})`,
            position: "absolute",
            top: `-${theme.spacing(2)}`,
            left: `-${theme.spacing(2)}`,
            zIndex: 2,
            backgroundColor: "rgba(0,0,0,.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "100%",
              border: `5px solid ${theme.palette.warning.main}`,
              width: "12em",
              height: "12em",
              color: theme.palette.warning.main
            }}
          >
            <FreeBreakfastOutlinedIcon sx={{ fontSize: "4rem" }} />
            <Typography sx={{ fontWeight: 700, fontSize: "2rem" }}>
              On break
            </Typography>
            <Typography sx={{ fontWeight: 700 }}>
              {ShortTimer(breakTimer)}
            </Typography>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default TimeRegistration;
