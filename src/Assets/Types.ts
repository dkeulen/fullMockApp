import { AlertColor } from "@mui/material";

export interface WorkOrderData {
  registration: string | null;
  country: CountryCodes | null;
  emblem: string | null;
}

export interface Relation {
  type: "person" | "organisation" | "rental";
  name: string;
}

export interface TaskStatuses {
  status: AlertColor;
  delivery: string | null;
  relationWaiting: boolean;
  mot: boolean;
  clockedIn: boolean;
  tyreChange: boolean;
}

export interface Mechanic {
  color: string;
  name: string;
}

export type CountryCodes = "NL" | "BE" | "FR" | undefined | null;

export interface ScheduleTask {
  registration: string | null;
  country: CountryCodes;
  emblem: string | null;
  startTime: string;
  duration: number;
  relation: Relation;
  statuses: TaskStatuses;
  mechanic: Mechanic;
  remark: string;
}

export interface demoDay {
  date: Date;
  tasks: ScheduleTask[];
  totalAbsent: number;
}

export interface ShopSettings {
  workingHours: number;
  totalMechanics: number;
}

export const shopSettings: ShopSettings = {
  workingHours: 8,
  totalMechanics: 5
};

interface IFormatDistanceLocale {
  xSeconds: string;
  xMinutes: string;
  xHours: string;
}

const formatDistanceLocale: IFormatDistanceLocale = {
  xSeconds: "{{count}}",
  xMinutes: "{{count}}",
  xHours: "{{count}}"
};
export const shortFormatDurationLocale = {
  formatDistance: (token: keyof IFormatDistanceLocale, count: string) =>
    formatDistanceLocale[token].replace(
      "{{count}}",
      +count > 9 ? count : "0" + count
    )
};
