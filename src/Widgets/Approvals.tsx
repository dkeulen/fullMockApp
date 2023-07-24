import React from "react";
import {
  Box,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
  Button,
  Divider
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NothingAlert from "../Custom/Components/NothingAlert";

export const ApprovalsWidgetAction: React.FC = () => {
  return <Button>View all approvals</Button>;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

interface DataTableProps {
  dataCells: string[];
}

const DataTable: React.FC<DataTableProps> = ({ dataCells }) => {
  return (
    <Box sx={{ overflowX: "auto" }}>
      {/* <Divider /> */}
      <Table size="small" stickyHeader>
        <TableHead>
          <TableRow sx={{ "& > th": { fontWeight: 700 } }}>
            {dataCells.map((cell, index) => {
              return (
                <TableCell key={`${index}-tablecell`} style={{ minWidth: 140 }}>
                  {cell}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody sx={{ "& tr:last-child > td": { borderBottom: "none" } }}>
          <TableRow>
            <TableCell colSpan={12}>
              <NothingAlert message="No incomming proposals" sx={{ my: 1 }} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

const Approvals: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ "& button": { fontSize: 12 } }}
        >
          <Tab label="Incoming" {...a11yProps(0)} />
          <Tab label="Changed" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ p: 2 }}>
          <TextField
            size="small"
            fullWidth
            placeholder="Search on: Easy ID, Reference ID, Registration"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              )
            }}
          />
        </Box>
        <DataTable
          dataCells={[
            "Easy ID",
            "Reference ID",
            "Name",
            "Registration",
            "Proposed date",
            "Proposed time"
          ]}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NothingAlert message="No recently changed approvals" />
      </TabPanel>
    </Box>
  );
};

export default Approvals;
