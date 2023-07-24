import React from "react";
import {
  ListItem,
  Box,
  Typography,
  Tooltip,
  ListItemIcon,
  IconButton
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import InfoIcon from "@mui/icons-material/Info";

interface LabelListItemProps {
  label?: string;
  value: string;
  copy?: boolean;
  info?: string;
  startIcon?: any;
}

const LabelListItem: React.FC<LabelListItemProps> = ({
  label,
  value,
  copy,
  info,
  startIcon
}) => {
  return (
    <ListItem disablePadding sx={{ fontSize: 13, pb: 0.25 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {!startIcon && label && (
          <Typography
            sx={{
              mr: 1,
              fontWeight: 700,
              lineHeight: 1,
              fontSize: 13,
              display: "flex",
              alignItems: "center"
            }}
          >
            {label}
            {info && (
              <Tooltip title={info}>
                <InfoIcon fontSize="small" sx={{ marginX: 0.5 }} />
              </Tooltip>
            )}
            :
          </Typography>
        )}
        {startIcon && (
          <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
            {startIcon}
          </ListItemIcon>
        )}
        {value ? value : <Typography variant="caption">-</Typography>}
        {copy && (
          <IconButton size="small" sx={{ ml: 1 }}>
            <ContentCopyIcon sx={{ fontSize: 14, color: "white" }} />
          </IconButton>
        )}
      </Box>
    </ListItem>
  );
};

export default LabelListItem;
