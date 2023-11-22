import React from "react";
import { Card, Typography, Theme } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [2, 1, 3, 1, 2];
const xLabels = ["English", "Japanese", "Spanish", "French", "Chinese"];
const TotalLanguageSelect = () => {
  return (
    <Card sx={cardWrap} elevation={0}>
      <Typography sx={cardTitle} variant="h3" component="h4">
        Total Number of Lessons Taken
      </Typography>

      <LineChart
        height={400}
        series={[
          {
            data: uData,
            area: true,
            showMark: false,
            color: "#727272",
          },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        sx={{
          width: "100%",
          ".MuiLineElement-root": {
            display: "none",
          },
        }}
      />
    </Card>
  );
};

const cardWrap = (theme: Theme) => ({
  borderRadius: "1.875rem",
  padding: "1.875rem",
  marginBottom: "2rem",
  [theme.breakpoints.down("xl")]: {
    borderRadius: "1.25rem",
    padding: "1.25rem",
  },
});
const cardTitle = (theme: Theme) => ({
  color: "#000",
  fontFamily: "'Karla', sans-serif",
  fontSize: "2.1875rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  marginBottom: "1rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.75rem",
  },
});
export default TotalLanguageSelect;
