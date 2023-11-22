"use client";
import CommonLayout from "@/components/CommonLayout";
import SidenavLayout from "@/components/Dashboard/SidenavLayout";
import { Box, Grid } from "@mui/material";
import { styles } from "../styles";
import TotalLanguageSelect from "@/components/Dashboard/TotalLanguageSelect";
import TotalHoursbook from "@/components/Dashboard/TotalHoursbook";
import TodaysBooking from "@/components/Dashboard/TodaysBooking";

const Dashboard = () => {
  return (
    <CommonLayout>
      <Box>
        <Grid container sx={styles.container}>
          <SidenavLayout>
            <TotalLanguageSelect />
            <TotalHoursbook />
            <TodaysBooking />
          </SidenavLayout>
        </Grid>
      </Box>
    </CommonLayout>
  );
};

export default Dashboard;
