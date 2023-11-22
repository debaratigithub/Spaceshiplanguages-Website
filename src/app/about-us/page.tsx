"use client";
import CommonLayout from "@/components/CommonLayout";
import React, { useEffect } from "react";
import { styles } from "../styles";
import { Box, Grid, Typography, Theme, Stack, Card } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/reduxts/hooks";
import { AboutUsdata } from "@/reduxts/Slices/cmsauthslice/aboutUsSlice";
import { RootState } from "@/reduxts/store";

const AboutUs = () => {
  const { data } = useAppSelector((state: RootState) => state.cmsAboutUsData);
  // console.log(data, "+++++++++");

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(AboutUsdata());
  }, [dispatch]);

  // const stripHtmlTags = (html: string): string => {
  //   const doc = new DOMParser().parseFromString(html, "text/html");
  //   return doc?.body?.textContent || "";
  // };

  return (
    <CommonLayout>
      <Box sx={pageMainBox}>
        <Grid container sx={styles.container}>
          <Card sx={cardStyle} elevation={0}>
            <Typography variant="h1" sx={pageTitle}>
              About Us Page
            </Typography>

            <Typography variant="h4" sx={pageSubhead}>
              {/* {stripHtmlTags(data?.cms?.content)} */}
              {data?.cms?.content}
            </Typography>
          </Card>
        </Grid>
      </Box>
    </CommonLayout>
  );
};
const pageMainBox = (theme: Theme) => ({
  marginTop: "8.375rem",
  padding: "2rem 0",
  [theme.breakpoints.down("xl")]: {
    marginTop: "5.625rem",
  },
});
const cardStyle = (theme: Theme) => ({
  borderRadius: "1.875rem",
  padding: "2rem",
  [theme.breakpoints.down("xl")]: {
    padding: "1rem",
    borderRadius: "1.25rem",
  },
});
const pageTitle = (theme: Theme) => ({
  color: "#000",
  fontFamily: "'Karla', sans-serif",
  fontSize: "2.5rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  textAlign: "center",
  marginBottom: "2rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.5rem",
  },
});
const pageSubhead = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  marginBottom: "1rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});
const pagePara = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.125rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "2rem",
  marginBottom: "1.5rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
    lineHeight: "1.625rem",
  },
});

export default AboutUs;
