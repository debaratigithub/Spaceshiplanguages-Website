"use client";
import { useState } from "react";
import { Box, Card, Grid } from "@mui/material";
import InstructorCard from "./InstructorCard";
import InstructorSlotAvailable from "./InstructorSlotAvailable";
import { styles } from "@/app/styles";

const InstructorListing = () => {
  const [videohover, setVideohover] = useState<boolean>(false);

  console.log(typeof videohover, "hover state");
  return (
    <Box sx={listingingWrap}>
      <Box sx={styles.container}>
        <Grid container spacing={{ xs: 2, md: 3, xl: 7 }}>
          <Grid item md={8}>
            {Array.from(Array(6)).map((_, index) => (
              <InstructorCard setVideohover={setVideohover} key={index} />
            ))}
          </Grid>
          <Grid item md={4}>
            <Card sx={previewCalwrp} elevation={0}>
              <InstructorSlotAvailable videohover={videohover} />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const listingingWrap = () => ({
  background: "#F4F4F2",
  paddingTop: "3.5rem",
  paddingBottom: "3.875rem",
});

const previewCalwrp = () => ({
  padding: "1rem",
});
export default InstructorListing;
