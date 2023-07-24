import * as React from "react";
import { createContext } from "react";
import { DashBoardWidgets } from "./Assets/NextGen/Data";
import { DashBoardItem } from "./Assets/NextGen/Types";

export enum Environment {
  gms = "GMS",
  portal = "Portal",
  nextgen = "NextGen"
}

export enum Route {
  dashboard = "dashboard",
  orders = "orders"
}

export enum Option {
  a = "a",
  b = "b",
  c = "c",
  d = "d",
  e = "e"
}

interface Settings {
  environment: Environment;
  setEnvironment: React.Dispatch<React.SetStateAction<Environment>>;
  route: Route;
  setRoute: React.Dispatch<React.SetStateAction<Route>>;
  isPortal: boolean;
  option: Option;
  setOption: React.Dispatch<React.SetStateAction<Option>>;
  isWorking: boolean;
  setIsWorking: React.Dispatch<React.SetStateAction<boolean>>;
  onBreak: boolean;
  setOnBreak: React.Dispatch<React.SetStateAction<boolean>>;
  activeWidgets: DashBoardItem[];
  setActiveWidgets: React.Dispatch<React.SetStateAction<DashBoardItem[]>>;
}

export const ApplicationContext = createContext<Settings>({} as Settings);

export const ApplicationContextProvider: React.FC = (props) => {
  const [environment, setEnvironment] = React.useState<Environment>(
    Environment.gms
  );
  const [route, setRoute] = React.useState<Route>(Route.dashboard);
  const [option, setOption] = React.useState<Option>(Option.a);
  const [isPortal, setIsportal] = React.useState<boolean>(false);
  const [isWorking, setIsWorking] = React.useState<boolean>(false);
  const [onBreak, setOnBreak] = React.useState<boolean>(false);
  const [activeWidgets, setActiveWidgets] = React.useState<DashBoardItem[]>(
    DashBoardWidgets
  );

  const settings = React.useMemo(() => {
    setIsportal(environment === Environment.portal);

    return {
      environment,
      setEnvironment,
      route,
      setRoute,
      isPortal,
      option,
      setOption,
      isWorking,
      setIsWorking,
      onBreak,
      setOnBreak,
      activeWidgets,
      setActiveWidgets
    };
  }, [environment, route, isPortal, option, isWorking, onBreak, activeWidgets]);

  return (
    <ApplicationContext.Provider value={settings}>
      {props.children}
    </ApplicationContext.Provider>
  );
};
