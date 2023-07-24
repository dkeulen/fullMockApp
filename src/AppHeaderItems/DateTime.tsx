import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import React from "react";

const DateTime: React.FC = () => {
  const [currentTime, setCurrentTime] = React.useState<Date>(new Date());

  React.useEffect(() => {
    const tick = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
    }, 500);

    return () => clearInterval(tick);
  }, []);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="subtitle2" sx={{ lineHeight: 1, mb: 0.5 }}>
        {format(currentTime, "H:mm:ss")}
      </Typography>
      <Typography variant="subtitle2" sx={{ lineHeight: 1 }}>
        {format(new Date(), "d MMMM y")}
      </Typography>
    </Box>
  );
};

export default DateTime;
