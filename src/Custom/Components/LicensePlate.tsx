import React from "react";
import { Box, Typography } from "@mui/material";
import { CountryCodes } from "../../Assets/Types";

interface LicensePlateProps {
  registration: string | null;
  country: CountryCodes;
  size?: "small" | "normal" | "large";
  startEmblem?: string;
  endEmblem?: string | null;
}

const LicensePlate: React.FC<LicensePlateProps> = ({
  registration,
  country,
  size = "normal",
  startEmblem,
  endEmblem
}) => {
  const countryColor = (country: CountryCodes) => {
    switch (country) {
      case "NL":
        return { text: "#000", border: "#E8A90C" };
      case "BE":
        return { text: "#8C0000", border: "#C00" };
      case "FR":
        return { text: "#000", border: "#777" };
      default:
        return { text: "#000", border: "#000" };
    }
  };

  const countryCode = (country: CountryCodes) => {
    switch (country) {
      case "NL":
        return "NL";
      case "BE":
        return "B";
      case "FR":
        return "F";
      default:
        return "?";
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {startEmblem && (
        <Box
          sx={{
            mr: 1,
            width: "auto",
            height: size === "small" ? ".8em" : "1.5em"
          }}
        >
          <img
            src={startEmblem}
            alt="emblem"
            style={{ display: "block", width: "auto", height: "100%" }}
          />
        </Box>
      )}
      <Box
        component="span"
        sx={{
          alignItems: "center",
          // backgroundColor: country === "NL" ? "#ffcf00" : "white",
          borderRadius: 1,
          // borderWidth: 2,
          // borderStyle: "solid",
          // borderColor: countryColor(country),
          display: "flex",
          overflow: "hidden",
          width: "fit-content",
          lineHeight: 1,
          opacity: registration ? 1 : 0.3
        }}
      >
        <Box
          sx={{
            backgroundColor: "#003697",
            color: "white",
            display: "flex",
            flexDirection: "column",
            lineHeight: 1,
            fontSize: 10,
            paddingY: size === "small" ? 0.8 : 1.25,
            width: size === "small" ? "2em" : "2.5em",
            textAlign: "center"
          }}
        >
          {countryCode(country)}
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            alignSelf: "stretch",
            borderRadius: "0 1 1 0",
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: countryColor(country).border,
            borderLeft: 0,
            pl: 1,
            pr: 1,
            lineHeight: 1,
            backgroundColor: country === "NL" ? "#ffcf00" : "white"
          }}
        >
          <Typography
            sx={{
              lineHeight: 1,
              fontWeight: 700,
              textAlign: "center",
              color: countryColor(country).text,
              minWidth: size === "small" ? "5em" : "5.5em",
              fontSize: size === "small" ? 14 : 18
            }}
          >
            {registration ? registration : "00-000-0"}
          </Typography>
        </Box>
      </Box>
      {endEmblem && (
        <Box
          sx={{
            ml: 1,
            width: "auto",
            height: size === "small" ? ".8em" : "1.5em"
          }}
        >
          <img
            src={endEmblem}
            alt="emblem"
            style={{ display: "block", width: "auto", height: "100%" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default LicensePlate;
