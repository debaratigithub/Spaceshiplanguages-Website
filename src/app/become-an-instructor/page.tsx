"use client";
import CommonLayout from "@/components/CommonLayout";
import { Box, Grid, Stack, Typography, Theme } from "@mui/material";
import { styles } from "../styles";
import ButtonUse from "@/components/ButtonUse";
import WhyTeachCard from "@/components/BecomeInstructor/WhyTeachCard";
import { inherits } from "util";
import Link from "next/link";

const BecomeAnInstructor = () => {
  return (
    <CommonLayout>
      <Box sx={becomeInstbg}>
        <Grid container sx={styles.container}>
          <Typography variant="h2" sx={pageTitle}>
            Let’s Learn Languages
            <br /> From Expert Instructors
          </Typography>
        </Grid>
      </Box>

      <Box sx={becomeMain}>
        <Grid container sx={styles.container}>
          <Stack sx={becomeHeader}>
            <Stack sx={contentTxt}>
              <Typography variant="h3" sx={textLarge}>
                Do you want to become a instructor?
              </Typography>
              <Typography variant="body2" sx={textSmall}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which look even slightly
                believable.
              </Typography>
            </Stack>
            <Stack sx={buttonAction}>
              {/* <Link href="/instructor-registration"> */}
              <Link href="/auth/teacher-signup"> 
              
              <ButtonUse name="Become an Instructor" />
              </Link>
              
            </Stack>
          </Stack>
        </Grid>
      </Box>
      <Box sx={whyTeachWrp}>
        <Grid container sx={styles.container}>
          <Typography variant="h2" sx={txtWhyteach}>
            Why Teach on Spaceship Language?
          </Typography>

          <WhyTeachCard />
        </Grid>
      </Box>
    </CommonLayout>
  );
};
const becomeMain = () => ({
  marginTop: "-7.5rem",
});
const becomeInstbg = (theme: Theme) => ({
  background:
    "#fad237 url(../../../images/instructorbg.jpg) center 0 no-repeat",
  backgroundSize: "cover",
  marginTop: "8.375rem",
  paddingBottom: "20.375rem",
  paddingTop: "16.25rem",
  minHeight: "744px",
  [theme.breakpoints.down("xl")]: {
    minHeight: "640px",
    paddingBottom: "18rem",
    paddingTop: "14rem",
    marginTop: "5.75rem",
  },
});
const pageTitle = (theme: Theme) => ({
  color: "#FFF",
  fontFamily: "Karla",
  fontSize: "3.75rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "4.375rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.75rem",
    lineHeight: "4rem",
  },
});
const becomeHeader = (theme: Theme) => ({
  flexDirection: "row",
  alignItems: "center",
  background: "#F7D144;",
  borderRadius: "1.25rem",
  padding: "2.5rem",
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
  },
});
const contentTxt = (theme: Theme) => ({
  flex: 1,
  marginRight: "1rem",
  [theme.breakpoints.down("md")]: {
    flex: "inherit",
    marginBottom: "1.5rem",
  },
});
const textLarge = (theme: Theme) => ({
  color: "#000",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.75rem",
  fontWeight: 700,
  lineHeight: "normal",
  marginBottom: "1rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.125rem",
    lineHeight: "3rem",
  },
});
const textSmall = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontWeight: 400,
  lineHeight: "1.75rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
    lineHeight: "1.625rem",
  },
});

const buttonAction = (theme: Theme) => ({
  "& button": {
    width: "21.5rem",
    height: "4.875rem",
    color: " #FFF",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textTransform: "capitalize",
    boxShadow: "none",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.375rem",
      height: "3.75rem",
      width: "20rem",
    },
  },
});
const whyTeachWrp = (theme: Theme) => ({
  marginBottom: "7.5rem",
});
const txtWhyteach = (theme: Theme) => ({
  color: "#000",
  fontFamily: "'Karla', sans-serif",
  fontSize: "3.125rem",
  fontWeight: 700,
  lineHeight: "1.75rem",
  textAlign: "center",
  marginTop: "6rem",
  marginBottom: "3.5rem",
  width: "100%",
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.25rem",
    lineHeight: "3rem",
    marginTop: "4rem",
    marginBottom: "3rem",
  },
});

export default BecomeAnInstructor;
