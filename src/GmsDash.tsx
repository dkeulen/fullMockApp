import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

import DashboardWidgetContainer from "./DashboardWidgetContainer";
import Approvals, { ApprovalsWidgetAction } from "./Widgets/Approvals";
import ServiceOrders from "./Widgets/ServiceOrders";
import Schedule, { ScheduleWidgetAction } from "./Widgets/Schedule/Schedule";
import TimeRegistration, {
  TimeRegistrationWidgetAction
} from "./Widgets/TimeRegistration";

const GmsDash: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid container lg={6} xl={8}>
        <Grid xs={12}>
          <DashboardWidgetContainer
            title="Work schedule"
            disablePadding
            divider={false}
            action={ScheduleWidgetAction}
          >
            <Schedule />
          </DashboardWidgetContainer>
        </Grid>
        <Grid xs={12}>
          <DashboardWidgetContainer
            title="Proposals"
            disablePadding
            divider={false}
            action={ApprovalsWidgetAction}
          >
            <Approvals />
          </DashboardWidgetContainer>
        </Grid>
      </Grid>
      <Grid container lg={6} xl={4} sx={{ alignSelf: "baseline" }}>
        <Grid xs={12}>
          <DashboardWidgetContainer
            title="Time registration"
            action={TimeRegistrationWidgetAction}
          >
            <TimeRegistration />
          </DashboardWidgetContainer>
        </Grid>
        <Grid xs={12}>
          <DashboardWidgetContainer title="Service order status" disablePadding>
            <ServiceOrders />
          </DashboardWidgetContainer>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GmsDash;
