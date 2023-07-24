import { DashBoardItem } from "./Types";

import Schedule, {
  ScheduleWidgetAction
} from "../../Widgets/Schedule/Schedule";
import TimeRegistration, {
  TimeRegistrationWidgetAction
} from "../../Widgets/TimeRegistration";
import Approvals, { ApprovalsWidgetAction } from "../../Widgets/Approvals";
import ServiceOrders from "../../Widgets/ServiceOrders";

// default grid item properties, set: width, height, minWidth, minHeight of widgets.
// const defaultGridItemProps = { w: 3, h: 2, minW: 3, minH: 1 };

export const DashBoardWidgets: DashBoardItem[] = [
  {
    id: 0,
    active: true,
    name: "Work schedule",
    component: Schedule,
    title: "Work Schedule",
    disablePadding: true,
    divider: false,
    action: ScheduleWidgetAction,
    gridItemProps: {
      lg: { x: 0, y: 0, w: 6, h: 5, minW: 6, minH: 3 },
      xl: { x: 0, y: 0, w: 8, h: 3, minW: 8, minH: 3 }
    }
    // gridItemProps: { x: 0, y: 0, w: 8, h: 3, minW: 8, minH: 3 }
  },
  {
    id: 1,
    active: true,
    name: "Time registration",
    component: TimeRegistration,
    title: "Time Registration",
    action: TimeRegistrationWidgetAction,
    gridItemProps: {
      lg: { x: 6, y: 0, w: 6, h: 3, minW: 4, minH: 2 },
      xl: { x: 8, y: 0, w: 4, h: 3, minW: 4, minH: 2 }
    }
    // gridItemProps: { x: 8, y: 0, w: 4, h: 3, minW: 4, minH: 2 }
  },
  {
    id: 2,
    active: true,
    name: "Proposals",
    component: Approvals,
    title: "Proposals",
    disablePadding: true,
    divider: true,
    action: ApprovalsWidgetAction,
    gridItemProps: {
      lg: { x: 0, y: 6, w: 12, h: 3, minW: 6, minH: 3 },
      xl: { x: 0, y: 3, w: 8, h: 3, minW: 6, minH: 3 }
    }
    // gridItemProps: { x: 0, y: 3, w: 8, h: 3, minW: 6, minH: 3 }
  },
  {
    id: 3,
    active: true,
    name: "Service orders status",
    component: ServiceOrders,
    disablePadding: true,
    title: "Service orders status",
    gridItemProps: {
      lg: { x: 6, y: 4, w: 6, h: 2, minW: 3, minH: 2 },
      xl: { x: 8, y: 3, w: 4, h: 2, minW: 3, minH: 2 }
    }
    // gridItemProps: { x: 8, y: 3, w: 4, h: 2, minW: 3, minH: 2 }
  }
];
