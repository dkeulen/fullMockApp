import React from "react";
import { Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import DashboardWidgetContainer from "./DashboardWidgetContainer";
import SearchVehicle from "./Widgets/SearchVehicle";
import QuickLinks from "./Widgets/QuickLinks";
import Banners from "./Widgets/Banners";
import Orders, { OrdersWidgetAction } from "./Widgets/Orders";
import Communication from "./Widgets/Communication";
import Approvals, { ApprovalsWidgetAction } from "./Widgets/Approvals";
import ServiceOrders from "./Widgets/ServiceOrders";

const PortalDash: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid container xs={8} spacing={2} sx={{ alignSelf: "baseline" }}>
        <Grid xs={6}>
          <DashboardWidgetContainer title="Search vehicle">
            <SearchVehicle />
          </DashboardWidgetContainer>
        </Grid>
        <Grid xs={6}>
          <DashboardWidgetContainer title="Quick links">
            <QuickLinks />
          </DashboardWidgetContainer>
        </Grid>
        <Grid xs={12}>
          <DashboardWidgetContainer
            title={
              <>
                Orders
                <Typography variant="caption" sx={{ ml: 1 }}>
                  - 5 latest open orders
                </Typography>
              </>
            }
            action={OrdersWidgetAction}
            disablePadding
          >
            <Orders />
          </DashboardWidgetContainer>
        </Grid>
        <Grid xs={12} xl={7}>
          <DashboardWidgetContainer
            title="Approvals"
            action={ApprovalsWidgetAction}
            disablePadding
            divider={false}
          >
            <Approvals />
          </DashboardWidgetContainer>
        </Grid>
        <Grid xs={12} xl={5}>
          <DashboardWidgetContainer title="Service order status" disablePadding>
            <ServiceOrders />
          </DashboardWidgetContainer>
        </Grid>
      </Grid>

      <Grid xs={4}>
        <Grid container spacing={2} sx={{ p: 0 }}>
          <Grid xs={12}>
            <DashboardWidgetContainer title="Advertisement" disablePadding>
              <Banners />
            </DashboardWidgetContainer>
          </Grid>
          <Grid xs={12}>
            <DashboardWidgetContainer
              title="Internal"
              disablePadding
              divider={false}
            >
              <Communication />
            </DashboardWidgetContainer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PortalDash;
