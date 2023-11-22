"use client";

import { Box, Grid } from "@mui/material";
import CommonLayout from "@/components/CommonLayout";
import SidenavLayout from "@/components/Dashboard/SidenavLayout";
import { styles } from "@/app/styles";
import TodaysBooking from "@/components/Dashboard/TodaysBooking";

const Myclasses = () => {
  return (
    <CommonLayout>
      <Box>
        <Grid container sx={styles.container}>
          <SidenavLayout>
            <TodaysBooking />
          </SidenavLayout>
        </Grid>
      </Box>
    </CommonLayout>
  );
};

export default Myclasses;
