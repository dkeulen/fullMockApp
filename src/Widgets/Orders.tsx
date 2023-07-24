import React from "react";
import {
  Alert,
  AlertColor,
  alpha,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme
} from "@mui/material";
import LicensePlate from "../Custom/Components/LicensePlate";
import { CountryCodes } from "../Assets/Types";

export const OrdersWidgetAction: React.FC = () => {
  return <Button size="small">View all orders</Button>;
};

interface Line {
  registration: string;
  country: CountryCodes;
  status: string;
  severity: AlertColor;
  relation: string;
  created: string;
}

const Orders: React.FC = () => {
  const theme = useTheme();

  const lines: Line[] = [
    {
      registration: "XG-00W-0",
      country: "NL",
      status: "In delivery",
      severity: "info",
      relation: "Mr. Bean",
      created: "01/23/4567"
    },
    {
      registration: "XG-00W-1",
      country: "BE",
      status: "Need approval",
      severity: "warning",
      relation: "Mr. Tumnus",
      created: "02/34/5678"
    },
    {
      registration: "XG-00W-2",
      country: "NL",
      status: "Parts received",
      severity: "success",
      relation: "Mr. Bond",
      created: "09/87/6543"
    },
    {
      registration: "XG-00W-3",
      country: "FR",
      status: "Approval declined",
      severity: "error",
      relation: "Mr. McFly",
      created: "12/12/1985"
    },
    {
      registration: "",
      country: undefined,
      status: "Need approval",
      severity: "warning",
      relation: "Mr. Anderson",
      created: "17/06/1999"
    }
  ];

  return (
    <Box>
      <Table size="small">
        <TableHead>
          <TableRow sx={{ "& > th": { fontWeight: 700 } }}>
            <TableCell colSpan={2}>Registration</TableCell>
            <TableCell colSpan={3}>Status</TableCell>
            <TableCell align="right" colSpan={4}>
              Relation
            </TableCell>
            <TableCell align="right" colSpan={4}>
              Created
            </TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody sx={{ "& tr:last-child > td": { borderBottom: "none" } }}> */}
        <TableBody
          sx={{
            "& tr > td": { borderBottom: "none" },
            "& tr:nth-child(even)": { backgroundColor: "#fafafa" }
          }}
        >
          {lines.map((line, index) => {
            return (
              <TableRow
                key={`${index}-tablerow`}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: alpha(theme.palette.primary.main, 0.04)
                  }
                }}
              >
                <TableCell colSpan={2}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LicensePlate
                      country={line.country}
                      registration={line.registration}
                    />
                  </Box>
                </TableCell>
                <TableCell colSpan={3}>
                  <Alert
                    severity={line.severity}
                    sx={{
                      p: 1,
                      "& > *": { p: `${theme.spacing(0)} !important` }
                    }}
                  >
                    {line.status}
                  </Alert>
                </TableCell>
                <TableCell align="right" colSpan={4}>
                  {line.relation}
                </TableCell>
                <TableCell align="right" colSpan={4}>
                  {line.created}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Orders;
