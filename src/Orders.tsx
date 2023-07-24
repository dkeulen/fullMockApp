import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {
  Box,
  Breadcrumbs,
  FormControl,
  Link,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
  useTheme
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`
  }
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
];

enum Options {
  a = "a",
  b = "b",
  c = "c",
  d = "d",
  f = "f"
}

const Orders: React.FC = () => {
  const theme = useTheme();
  const [option, setOption] = React.useState<string>("a");
  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  return (
    <>
      {option === "f" && (
        <Box>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={
              <NavigateNextIcon fontSize="small" sx={{ opacity: 0.5 }} />
            }
            sx={{
              textTransform: "capitalize",
              fontSize: 11,
              lineHeight: 1,
              borderColor: "rgba(0,0,0,.2)",
              "& .MuiBreadcrumbs-separator": { m: 0 }
            }}
          >
            <Link underline="hover" color="inherit">
              one
            </Link>
            <Link underline="hover" color="inherit">
              two
            </Link>
            <Typography
              color="text.primary"
              sx={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              final
            </Typography>
          </Breadcrumbs>
        </Box>
      )}

      <Box
        sx={{
          display: option !== "c" ? "flex" : "block",
          alignItems: "center",
          py: 0.5,
          mb: 1,
          justifyContent: option === "b" ? "space-between" : "normal"
        }}
      >
        {option === "d" && (
          <BuildOutlinedIcon fontSize="small" sx={{ opacity: 0.5, mr: 1 }} />
        )}
        <Typography
          variant="h6"
          sx={{
            lineHeight: 1
          }}
        >
          Orders
        </Typography>
        {/* <Divider orientation="vertical" sx={{ mx: 1 }} /> */}
        {option !== "f" && (
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={
              <NavigateNextIcon fontSize="small" sx={{ opacity: 0.5 }} />
            }
            sx={{
              textTransform: "capitalize",
              fontSize: 11,
              lineHeight: 1,
              borderLeft:
                option === "a" || option === "d" ? "2px solid black" : "none",
              borderColor: "rgba(0,0,0,.2)",
              pl: option === "a" || option === "d" ? 1.5 : 0,
              ml: option === "a" || option === "d" ? 1.5 : 0,
              "& .MuiBreadcrumbs-separator": { m: 0 }
            }}
          >
            <Link underline="hover" color="inherit">
              one
            </Link>
            <Link underline="hover" color="inherit">
              two
            </Link>
            <Typography
              color="text.primary"
              sx={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              final
            </Typography>
          </Breadcrumbs>
        )}
      </Box>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5
              }
            }
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{ border: "none" }}
        />
      </Paper>
      <Box sx={{ mt: 2 }}>
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={option}
            onChange={handleChange}
            size="small"
            // sx={{ color: "white" }}
          >
            {(Object.keys(Options) as (keyof typeof Options)[]).map(
              (option) => {
                return (
                  <MenuItem value={option} key={option.toUpperCase()}>
                    Title Option {option.toUpperCase()}
                  </MenuItem>
                );
              }
            )}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default Orders;
