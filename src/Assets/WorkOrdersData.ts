import { WorkOrderData } from "./Types";
import { Emblems } from "./CarEmblems";

const WorkOrdersData: WorkOrderData[] = [
  { registration: "01-23A-B", country: "NL", emblem: Emblems.mini },
  { registration: "AB-123-C", country: "FR", emblem: Emblems.tesla },
  { registration: "00-WGX-1", country: "BE", emblem: Emblems.opel },
  { registration: "09-112-X", country: "NL", emblem: Emblems.audi }
];

export default WorkOrdersData;
