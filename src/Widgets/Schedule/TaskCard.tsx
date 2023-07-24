import {
  Paper,
  Box,
  Typography,
  Divider,
  Tooltip,
  useTheme
} from "@mui/material";
import LicensePlate from "../../Custom/Components/LicensePlate";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CoffeeIcon from "@mui/icons-material/Coffee";
import BusinessIcon from "@mui/icons-material/Business";
import TollIcon from "@mui/icons-material/Toll";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import TimerIcon from "@mui/icons-material/Timer";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import CarRentalIcon from "@mui/icons-material/CarRental";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import { ScheduleTask } from "../../Assets/Types";
import { grey } from "@mui/material/colors";

interface TaskCardProps {
  taskdata: ScheduleTask;
}

const TaskCard: React.FC<TaskCardProps> = ({ taskdata }) => {
  const theme = useTheme();

  return (
    <Paper variant="outlined" sx={{ overflow: "hidden" }}>
      <Box sx={{ p: 1 }}>
        <Box sx={{ display: "flex" }}>
          <LicensePlate
            registration={taskdata.registration}
            country={taskdata.country}
            size="small"
            endEmblem={taskdata.emblem}
          />
          {taskdata.remark && (
            <Box sx={{ ml: "auto" }}>
              <Tooltip title={taskdata.remark} arrow>
                <CommentIcon
                  sx={{
                    fontSize: 16,
                    color: grey[600],
                    lineHeight: 1
                  }}
                />
              </Tooltip>
            </Box>
          )}
        </Box>

        <Box sx={{ display: "flex", mt: 1, maxWidth: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: 1,
              flex: "1 1 auto"
            }}
          >
            <AccessTimeIcon fontSize="small" sx={{ mr: 0.2 }} />
            <Typography variant="body2" sx={{ lineHeight: 1 }}>
              {taskdata.startTime}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: 1,
              flex: "1 1 auto"
            }}
          >
            <TimerOutlinedIcon fontSize="small" sx={{ mr: 0.2 }} />
            <Typography variant="body2" sx={{ lineHeight: 1 }}>
              {taskdata.duration}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignSelf: "baseline",
              flex: "1 1 40%",
              overflow: "hidden"
            }}
          >
            {taskdata.relation.type === "person" && (
              <AccountCircleOutlinedIcon fontSize="small" sx={{ mr: 0.2 }} />
            )}
            {taskdata.relation.type === "organisation" && (
              <BusinessIcon fontSize="small" sx={{ mr: 0.2 }} />
            )}
            {taskdata.relation.type === "rental" && (
              <CarRentalIcon fontSize="small" sx={{ mr: 0.2 }} />
            )}
            <Typography variant="body2" noWrap sx={{ lineHeight: 1 }}>
              {taskdata.relation.name}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          backgroundColor:
            theme.background.schedule.taskCard.status.backgroundColor
        }}
      >
        <Box
          sx={{
            display: "flex",
            "& > div": {
              display: "flex",
              paddingX: 1,
              paddingY: 0.5,
              lineHeight: 1,
              // borderRight: "1px solid rgba(0, 0, 0, 0.12)",
              "&:last-child": { borderRight: "none" },
              "& > svg": { fontSize: 16, lineHeight: 1 }
            }
          }}
        >
          <Box>
            <Tooltip
              title="workorder status"
              disableHoverListener={!taskdata.statuses.status}
            >
              <ThumbUpAltOutlinedIcon
                color={
                  taskdata.statuses.status
                    ? taskdata.statuses.status
                    : "inherit"
                }
                sx={{ opacity: taskdata.statuses.status ? 0.7 : 0.2 }}
              />
            </Tooltip>
          </Box>
          <Box>
            <Tooltip
              title="delivery status"
              disableHoverListener={!taskdata.statuses.delivery}
            >
              <LocalShippingIcon
                sx={{ opacity: taskdata.statuses.delivery ? 0.7 : 0.2 }}
              />
            </Tooltip>
          </Box>
          <Box>
            <Tooltip
              title="MOT"
              disableHoverListener={!taskdata.statuses.relationWaiting}
            >
              <AssignmentTurnedInIcon
                sx={{ opacity: taskdata.statuses.mot ? 0.7 : 0.2 }}
              />
            </Tooltip>
          </Box>
          <Box>
            <Tooltip
              title="clocked in"
              disableHoverListener={!taskdata.statuses.relationWaiting}
            >
              <TimerIcon
                sx={{ opacity: taskdata.statuses.clockedIn ? 0.7 : 0.2 }}
              />
            </Tooltip>
          </Box>
          <Box>
            <Tooltip
              title="customer waiting in shop"
              disableHoverListener={!taskdata.statuses.relationWaiting}
            >
              <CoffeeIcon
                sx={{ opacity: taskdata.statuses.relationWaiting ? 0.7 : 0.2 }}
              />
            </Tooltip>
          </Box>
          <Box>
            <Tooltip
              title="tyre change"
              disableHoverListener={!taskdata.statuses.relationWaiting}
            >
              <TollIcon
                sx={{ opacity: taskdata.statuses.tyreChange ? 0.7 : 0.2 }}
              />
            </Tooltip>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            ml: "auto",
            paddingX: 1,
            paddingY: 0.5
          }}
        >
          <Tooltip title={`Mechanic: ${taskdata.mechanic.name}`}>
            <BuildCircleIcon
              sx={{
                color: taskdata.mechanic.color
                  ? taskdata.mechanic.color
                  : "black",
                fontSize: 16,
                lineHeight: 1
              }}
            />
          </Tooltip>
        </Box>
      </Box>
    </Paper>
  );
};

export default TaskCard;
