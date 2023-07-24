import { FunctionComponent, ReactNode } from "react";

interface layoutProps {
  x: number;
  y: number;
  w: number;
  h: number;
  minW: number;
  minH: number;
}

export interface DashBoardItem {
  id: number;
  active: boolean;
  name: string;
  component: FunctionComponent;
  title: ReactNode;
  action?: FunctionComponent | null;
  disablePadding?: boolean;
  divider?: boolean;
  gridItemProps: { lg: layoutProps; xl: layoutProps };
}
