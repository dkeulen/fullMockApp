import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";
import NothingAlert from "../Custom/Components/NothingAlert";

const ServiceOrders: React.FC = () => {
  return (
    <Box sx={{ overflowX: "auto" }}>
      <Table size="small">
        <TableHead>
          <TableRow sx={{ "& > th": { fontWeight: 700 } }}>
            <TableCell sx={{ minWidth: 100 }}>Last updated</TableCell>
            <TableCell colSpan={3} sx={{ minWidth: 100 }}>
              Registration
            </TableCell>
            <TableCell align="right" sx={{ minWidth: 100 }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ "& tr:last-child > td": { borderBottom: "none" } }}>
          <TableRow>
            <TableCell colSpan={12} sx={{ minWidth: 100 }}>
              <NothingAlert message="No service orders" sx={{ my: 1 }} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default ServiceOrders;
