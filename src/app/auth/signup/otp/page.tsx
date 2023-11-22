"use client";
import React from "react";
import { Grid, Box, Container, Typography, Theme, Stack } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import CommonLayout from "@/components/CommonLayout";
import ButtonUse from "@/components/ButtonUse";
import { MuiOtpInput } from "mui-one-time-password-input";
import optImage from "../../../../../public/images/otp.png";
import Image from "next/image";
import Link from "next/link";

const OtpValidate = () => {
  const [otp, setOtp] = React.useState("");

  const handleChange = (event: any) => {
    console.log(typeof event, "jfha");
    setOtp(event);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <CommonLayout>
      <Grid container spacing={2} sx={authbg}>
        <Container component="main" maxWidth="lg">
          <Box sx={authform}>
            <Stack sx={imgOpt}>
              <Image src={optImage} alt="otp image" />
            </Stack>
            <Typography variant="h4">Enter OTP sent to the email</Typography>
            <Typography variant="h6" component="p">
              Please enter 4 digit code sent to demomail@gmail.com
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Stack sx={otpInput}>
                <MuiOtpInput value={otp} onChange={handleChange} length={6} />
              </Stack>
              <FormControl sx={logBtn}>
                <Link href="/language-select">
                <ButtonUse name={"Verify"} />
                </Link>
                
              </FormControl>
            </Box>
          </Box>
        </Container>
      </Grid>
    </CommonLayout>
  );
};

const authbg = (theme: Theme) => ({
  background:
    "#fad237 url(../../images/authenticationbg.jpg) center 0 no-repeat",
  fontFamily: "'Karla', sans-serif",
  backgroundSize: "100%",
  padding: "5.313rem 1.25rem 3.125rem 1.25rem",
  marginTop: "8.375rem",
  [theme.breakpoints.down("xl")]: {
    marginTop: "5.625rem",
  },
});

const authform = (theme: Theme) => ({
  background: "#fff",
  padding: "3.25rem",
  borderRadius: "1.875rem",
  maxWidth: "64.375rem",
  textAlign: "center",
  boxShadow: "0 0 2px #ccc",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto",
  [theme.breakpoints.down("xl")]: {
    padding: "2.5rem",
    maxWidth: "37.5rem",
  },

  typography: {
    h4: {
      fontWeight: 600,
      fontFamily: "'Karla', sans-serif",
      color: "#1E1E1C",
      fontSize: "3.75rem",
      lineHeight: "4.375rem",
      marginBottom: "1.5rem",
      [theme.breakpoints.down("xl")]: {
        fontSize: "2rem",
        lineHeight: "3rem",
        marginBottom: "1rem",
      },
    },
    p: {
      fontFamily: "'Karla', sans-serif",
      color: "#1E1E1C",
      fontSize: "1.625rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "1.875rem",
      marginBottom: "0rem",
      [theme.breakpoints.down("xl")]: {
        fontSize: "1.125rem",
        fontWeight: 400,
        lineHeight: "1.375rem",
      },
    },
  },
});

const otpInput = (theme: Theme) => ({
  fontFamily: "'Karla', sans-serif",
  color: "#919697 ",
  fontSize: "1.625rem",
  fontWeight: "400",
  marginTop: "2.5rem",
  marginBottom: "2.5rem",
  maxWidth: "40rem",
  [theme.breakpoints.down("xl")]: { fontSize: "1.25rem", maxWidth: "25rem" },
  "& .MuiOutlinedInput-input": {
    color: "#727272",
    fontFamily: "'Karla', sans-serif",
    fontSize: "2.1875rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    [theme.breakpoints.down("xl")]: { fontSize: "1.125rem", height: "auto" },
  },
});
const imgOpt = (theme: Theme) => ({
  marginBottom: "6rem",
  "& img": {
    maxWidth: "100%",
    height: "auto",
  },
  [theme.breakpoints.down("xl")]: {
    marginBottom: "2rem",
  },
});
const logBtn = (theme: Theme) => ({
  minWidth: "23rem",
  "& button": {
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontWeight: "700",
    color: "#fff",
    height: "4.875rem",
    boxShadow: "none",
    [theme.breakpoints.down("xl")]: {
      height: "3.5rem",
      fontSize: "1.125rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "3.75rem",
      minWidth: "100%",
      fontSize: "1.125rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
  },
});
export default OtpValidate;
