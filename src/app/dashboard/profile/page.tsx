"use client";
import { styles } from "@/app/styles";
import CommonLayout from "@/components/CommonLayout";
import ProfileEdit from "@/components/Dashboard/Profile/ProfileEdit";
import ProfileView from "@/components/Dashboard/Profile/ProfileView";
import SidenavLayout from "@/components/Dashboard/SidenavLayout";
import { Box, Grid } from "@mui/material";
import React from "react";

const ProfilePage = () => {
  return (
    <CommonLayout>
      <Box>
        <Grid container sx={styles.container}>
          <SidenavLayout>
            <ProfileView />
            <br />
            <ProfileEdit />
          </SidenavLayout>
        </Grid>
      </Box>
    </CommonLayout>
  );
};

export default ProfilePage;
