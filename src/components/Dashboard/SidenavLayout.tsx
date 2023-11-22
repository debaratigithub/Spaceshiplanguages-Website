"use client";
import { Box, Theme, Grid } from "@mui/material";
import Sidebar from "./Sidebar";
export default function SidenavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={sideWrap}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
const sideWrap = (theme: Theme) => ({
  marginTop: "8.375rem",
  width: "100%",
  padding: "2rem 0",
  [theme.breakpoints.down("xl")]: {
    marginTop: "5.625rem",
  },
});
