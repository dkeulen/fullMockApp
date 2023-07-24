import React from "react";
import { Box, LinearProgress, Typography, useTheme } from "@mui/material";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import { ScheduleTask, shopSettings } from "../../Assets/Types";

interface ScheduleHoursProps {
  absentMechanics: number;
  tasks: ScheduleTask[];
}

const ScheduleHours: React.FC<ScheduleHoursProps> = ({
  absentMechanics = 0,
  tasks
}) => {
  const theme = useTheme();
  const totalHours =
    (shopSettings.totalMechanics - absentMechanics) * shopSettings.workingHours;
  const plannedHours = () => {
    let totalTaskHours = 0;
    tasks.map((task) => {
      return (totalTaskHours = totalTaskHours + task.duration);
    });
    return totalTaskHours;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        width: "6.5em"
      }}
    >
      <Typography variant="caption" sx={{ lineHeight: 1, mb: 0.5 }}>
        <>
          {plannedHours()} of {totalHours} hours
        </>
      </Typography>
      <LinearProgress
        value={(plannedHours() / totalHours) * 100}
        variant="determinate"
        sx={{
          width: "100%",
          height: 8,
          borderRadius: 5,
          [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[300]
          },
          [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.primary.light
          }
        }}
      />
    </Box>
  );
};

export default ScheduleHours;
