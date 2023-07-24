import React from "react";
import {
  Chip,
  Menu,
  MenuItem,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import KeyboardArrowDownOutlined from "@mui/icons-material/KeyboardArrowDownOutlined";
import { DashBoardItem } from "./Types";
import { ApplicationContext } from "../../ApplicationContext";

const WidgetSelect: React.FC = () => {
  const { activeWidgets, setActiveWidgets } = React.useContext(
    ApplicationContext
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleWidgetActiveChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    widget: DashBoardItem
  ) =>
    setActiveWidgets((prevState) =>
      prevState.map((item) => {
        if (item.id === widget.id) {
          item.active = event.target.checked;
        }
        return item;
      })
    );

  return (
    <>
      <Chip
        label="Widgets"
        deleteIcon={<KeyboardArrowDownOutlined fontSize="small" />}
        onDelete={() => {}}
        onClick={handleClick}
        sx={{ "& .MuiChip-deleteIcon": { pointerEvents: "none" } }}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        {activeWidgets.map((widget, index) => {
          return (
            <MenuItem key={`${index}-widgetselectoption`}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={widget.active}
                    onChange={(event) =>
                      handleWidgetActiveChange(event, widget)
                    }
                    sx={{ paddingY: 0, paddingX: 1 }}
                  />
                }
                label={widget.name}
              />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default WidgetSelect;
