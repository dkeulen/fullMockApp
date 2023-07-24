import React from "react";
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Paper,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { isToday, isWeekend } from "date-fns";
import TaskCard from "./TaskCard";
import ScheduleHours from "./ScheduleHours";
import { demoDays } from "../../Assets/ScheduleData";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import NothingAlert from "../../Custom/Components/NothingAlert";
import ScheduleAbsent from "./ScheduleAbsent";

export const ScheduleWidgetAction: React.FC = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.down("xl"));
  return (
    <>
      <Button size="small">View full schedule</Button>
      {isLg ? (
        <Tooltip title="Add workorder">
          <IconButton
            color="success"
            size="small"
            sx={{
              border: "1px solid green",
              borderColor: theme.palette.success.main,
              ml: 1
            }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      ) : (
        <Button
          startIcon={<AddIcon fontSize="small" />}
          color="success"
          size="small"
          variant="outlined"
          sx={{ ml: 1 }}
        >
          Add workorder
        </Button>
      )}
    </>
  );
};

interface PaginationDayProps {
  dateString: Date;
  localeString: string;
  tasks: number;
}

const PaginationDay: React.FC<PaginationDayProps> = ({
  dateString,
  localeString,
  tasks
}) => {
  const theme = useTheme();
  const getDayName = () => {
    return dateString.toLocaleDateString(localeString, { weekday: "short" });
  };

  const getDayNumber = () => {
    return dateString.getDate();
  };

  return (
    <Tooltip
      title={`${tasks} ${tasks === 1 ? `task` : `tasks`} for ${
        isToday(dateString) ? `today` : `this day`
      }`}
      disableHoverListener={tasks === 0}
      placement="top"
    >
      <Avatar
        sx={{
          width: { lg: 38, xl: 48 },
          height: { lg: 38, xl: 48 },
          overflow: "visible",
          backgroundColor: isToday(dateString)
            ? alpha(theme.palette.primary.main, 0.2)
            : "#f0f0f0",
          color: "black",
          "& .MuiBadge-badge": {
            right: -5,
            fontSize: 10
          },
          opacity: isWeekend(dateString) ? 0.4 : 1
        }}
      >
        <Badge badgeContent={isWeekend(dateString) ? 0 : tasks} color="info">
          <Box
            sx={{
              textAlign: "center"
            }}
          >
            <Typography
              variant="caption"
              sx={{ fontSize: { lg: ".5rem", xl: ".6rem" } }}
            >
              {getDayName()}
            </Typography>
            <Typography sx={{ fontSize: { lg: ".7rem", xl: ".9rem" } }}>
              {getDayNumber()}
            </Typography>
          </Box>
        </Badge>
      </Avatar>
    </Tooltip>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const Schedule: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);
  const tasksToShow = 7;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    demoDays.find((day, index) => {
      return isToday(day.date) ? setValue(index) : null;
    });
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {demoDays.map((day) => {
            return (
              <Tab
                key={`${day.date.toString()}-tab`}
                label={
                  <PaginationDay
                    dateString={day.date}
                    localeString="en-GB"
                    tasks={day.tasks.length}
                  />
                }
                sx={{ paddingX: 2, minWidth: 0 }}
                {...a11yProps(1)}
                disabled={isWeekend(day.date)}
              />
            );
          })}
          <Box
            sx={{
              ml: "auto",
              paddingX: 2,
              paddingY: 0.5,
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              alignItems: "flex-end"
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ScheduleAbsent totalAbsent={demoDays[value].totalAbsent} />
            </Box>
            <Box>
              <ScheduleHours
                absentMechanics={demoDays[value].totalAbsent}
                tasks={demoDays[value].tasks}
              />
            </Box>
          </Box>
        </Tabs>
      </Box>
      {demoDays.map((day, index) => {
        return (
          <TabPanel
            key={`${day.date.toString()}-tabpannel`}
            value={value}
            index={index}
          >
            <Grid container spacing={2} sx={{ p: 0 }}>
              {day.tasks.length > 0 &&
                day.tasks.slice(0, tasksToShow).map((task, index) => {
                  return (
                    <Grid key={`${index}-calendar-task`} lg={6} xl={3}>
                      <TaskCard taskdata={task} />
                    </Grid>
                  );
                })}
              {day.tasks.length > tasksToShow && (
                <Grid lg={6} xl={3}>
                  <Paper
                    variant="outlined"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%"
                    }}
                  >
                    <Box sx={{}}>
                      <Typography
                        variant="body2"
                        sx={{ lineHeight: 1, mb: 1, textAlign: "center" }}
                      >
                        + {day.tasks.length - tasksToShow} more{" "}
                        {day.tasks.length === 1 ? "task" : "tasks"} for{" "}
                        {isToday(day.date) ? "today." : "this day."}
                      </Typography>
                      <Button
                        startIcon={<CalendarMonthOutlinedIcon />}
                        color="primary"
                        variant="text"
                        size="small"
                      >
                        View complete day
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              )}
            </Grid>
            {day.tasks.length === 0 && (
              <Box sx={{ mt: 2 }}>
                <NothingAlert message="No tasks for today" />
              </Box>
            )}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default Schedule;
