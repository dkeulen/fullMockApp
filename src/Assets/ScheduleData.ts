import { demoDay } from "../Assets/Types";
import { Emblems } from "./CarEmblems";
import { addDays, subDays } from "date-fns";

export const demoDays: demoDay[] = [
  {
    date: subDays(new Date(), 2),
    totalAbsent: 1,
    tasks: [
      {
        registration: "01-WGX-3",
        country: "NL",
        emblem: Emblems.tesla,
        startTime: "15:00",
        relation: { type: "person", name: "Mr. Ipkiss" },
        statuses: {
          status: "success",
          delivery: "in delivery",
          relationWaiting: true,
          mot: false,
          clockedIn: false,
          tyreChange: true
        },
        mechanic: {
          color: "red",
          name: "Raphael"
        },
        duration: 2,
        remark: "lorem ipsum dolor sit ameth"
      }
    ]
  },
  {
    date: subDays(new Date(), 1),
    totalAbsent: 0,
    tasks: [
      {
        registration: "23-ZA9-1",
        country: "BE",
        emblem: Emblems.volkswagen,
        startTime: "15:00",
        relation: { type: "person", name: "Mr. Bond" },
        statuses: {
          status: "success",
          delivery: "in delivery",
          relationWaiting: true,
          mot: true,
          clockedIn: false,
          tyreChange: false
        },
        mechanic: {
          color: "green",
          name: "Splinter"
        },
        duration: 1,
        remark: "lorem ipsum dolor sit ameth"
      }
    ]
  },
  {
    date: new Date(),
    totalAbsent: 1,
    tasks: [
      {
        registration: "01-23A-B",
        country: "NL",
        emblem: Emblems.mini,
        startTime: "10:20",
        relation: { type: "person", name: "Mr. Bean" },
        statuses: {
          status: "success",
          delivery: "",
          relationWaiting: false,
          mot: true,
          clockedIn: true,
          tyreChange: false
        },
        mechanic: {
          color: "orange",
          name: "Michaelangelo"
        },
        duration: 1.5,
        remark: ""
      },
      {
        registration: "AB-123-C",
        country: "FR",
        emblem: Emblems.tesla,
        startTime: "11:40",
        relation: { type: "organisation", name: "Tesla" },
        statuses: {
          status: "warning",
          delivery: "test",
          relationWaiting: true,
          mot: false,
          clockedIn: false,
          tyreChange: true
        },
        mechanic: {
          color: "red",
          name: "Raphael"
        },
        duration: 1,
        remark: ""
      },
      {
        registration: "00-WGX-1",
        country: "BE",
        emblem: Emblems.opel,
        startTime: "12:20",
        relation: { type: "rental", name: "Mr. Wick" },
        statuses: {
          status: "success",
          delivery: "",
          relationWaiting: false,
          mot: true,
          clockedIn: true,
          tyreChange: true
        },
        mechanic: {
          color: "blue",
          name: "Leonardo"
        },
        duration: 2,
        remark: "lorem ipsum dolor sit ameth"
      },
      {
        registration: "09-112-X",
        country: "NL",
        emblem: Emblems.audi,
        startTime: "12:50",
        relation: { type: "organisation", name: "Audi" },
        statuses: {
          status: "error",
          delivery: "in delivery",
          relationWaiting: false,
          mot: false,
          clockedIn: false,
          tyreChange: false
        },
        mechanic: {
          color: "green",
          name: "Splinter"
        },
        duration: 2.5,
        remark: "lorem ipsum dolor sit ameth"
      },
      {
        registration: "AX-007-F",
        country: "BE",
        emblem: Emblems.astonmartin,
        startTime: "13:15",
        relation: { type: "person", name: "Mr. Bond" },
        statuses: {
          status: "success",
          delivery: "",
          relationWaiting: true,
          mot: true,
          clockedIn: true,
          tyreChange: true
        },
        mechanic: {
          color: "orange",
          name: "Michaelangelo"
        },
        duration: 4,
        remark: ""
      },
      {
        registration: "CX-234-5",
        country: "NL",
        emblem: Emblems.maserati,
        startTime: "14:30",
        relation: { type: "rental", name: "Mr. Anderson-ellipsistest" },
        statuses: {
          status: "success",
          delivery: "",
          relationWaiting: false,
          mot: false,
          clockedIn: false,
          tyreChange: true
        },
        mechanic: {
          color: "purple",
          name: "Donatello"
        },
        duration: 5,
        remark: ""
      },
      {
        registration: "A1-QWE-R",
        country: "NL",
        emblem: Emblems.audi,
        startTime: "15:00",
        relation: { type: "person", name: "Mr. Smith" },
        statuses: {
          status: "info",
          delivery: "",
          relationWaiting: false,
          mot: true,
          clockedIn: false,
          tyreChange: false
        },
        mechanic: {
          color: "green",
          name: "Splinter"
        },
        duration: 1.5,
        remark: "lorem ipsum dolor sit ameth"
      },
      {
        registration: "01-23A-B",
        country: "NL",
        emblem: Emblems.audi,
        startTime: "10:20",
        relation: { type: "person", name: "Mr. Bean" },
        statuses: {
          status: "success",
          delivery: "",
          relationWaiting: true,
          mot: true,
          clockedIn: false,
          tyreChange: false
        },
        mechanic: {
          color: "orange",
          name: "Michaelangelo"
        },
        duration: 1,
        remark: ""
      },
      {
        registration: "01-23A-B",
        country: "NL",
        emblem: Emblems.audi,
        startTime: "10:20",
        relation: { type: "person", name: "Mr. Bean" },
        statuses: {
          status: "success",
          delivery: "",
          relationWaiting: false,
          mot: true,
          clockedIn: true,
          tyreChange: false
        },
        mechanic: {
          color: "orange",
          name: "Michaelangelo"
        },
        duration: 1,
        remark: ""
      },
      {
        registration: "01-23A-B",
        country: "NL",
        emblem: Emblems.audi,
        startTime: "10:20",
        relation: { type: "person", name: "Mr. Bean" },
        statuses: {
          status: "success",
          delivery: "in delivery",
          relationWaiting: true,
          mot: false,
          clockedIn: false,
          tyreChange: false
        },
        mechanic: {
          color: "orange",
          name: "Michaelangelo"
        },
        duration: 3,
        remark: ""
      },
      {
        registration: "01-23A-B",
        country: "NL",
        emblem: Emblems.audi,
        startTime: "10:20",
        relation: { type: "person", name: "Mr. Bean" },
        statuses: {
          status: "success",
          delivery: "",
          relationWaiting: false,
          mot: true,
          clockedIn: false,
          tyreChange: false
        },
        mechanic: {
          color: "orange",
          name: "Michaelangelo"
        },
        duration: 6,
        remark: ""
      }
    ]
  },
  { date: addDays(new Date(), 1), totalAbsent: 0, tasks: [] },
  {
    date: addDays(new Date(), 2),
    totalAbsent: 2,
    tasks: [
      {
        registration: "00-WGX-4",
        country: "FR",
        emblem: Emblems.ferrari,
        startTime: "15:00",
        relation: { type: "person", name: "Mr. McFly" },
        statuses: {
          status: "success",
          delivery: "in delivery",
          relationWaiting: true,
          mot: true,
          clockedIn: true,
          tyreChange: false
        },
        mechanic: {
          color: "purple",
          name: "Donatello"
        },
        duration: 2,
        remark: ""
      }
    ]
  }
];
