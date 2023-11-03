"use client";
import * as React from "react";

import {
  Grid,
  Box,
  TextField,
  Container,
  Typography,
  Theme,
  Stack,
} from "@mui/material";

import Link from "next/link";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ButtonUse from "../../../components/ButtonUse";
import CommonLayout from "../../../components/CommonLayout";
import { styles } from "../../styles";
import SocialLinks from "@/components/Auth/SocialLinks";
import userImg from "../../../../public/images/usericon.png";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
const authbg = (theme: Theme) => ({
  background: "#fad237 url(../images/authenticationbg.jpg) center 0 no-repeat",
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
  maxWidth: "64rem",
  textAlign: "center",
  boxShadow: "0 0 2px #ccc",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto",
  [theme.breakpoints.down("xl")]: {
    padding: "2.5rem",
    maxWidth: "50rem",
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
        fontSize: "2.25rem",
        lineHeight: "3.25rem",
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
      marginBottom: "1.375rem",
      [theme.breakpoints.down("xl")]: {
        fontSize: "1.25rem",
        fontWeight: 400,
        lineHeight: "1.375rem",
      },
    },
  },
});

const mrgnbtm = () => ({
  marginBottom: "1.25rem",
});

const commonlink = (theme: Theme) => ({
  textDecoration: "none",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontWeight: "600",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.25rem",
  },
  "& a": {
    textDecoration: "none",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    color: "#2599FB",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.25rem",
    },
    "&:hover": {
      color: "#D91962",
    },
  },
});

const or = () => ({
  borderBottom: "1px solid #DBDBDB",
  textAlign: "center",
  marginBottom: "20px",
});

const orinn = () => ({
  fontFamily: "'Karla', sans-serif",
  color: "#919697",
  fontSize: "1.125rem",
  fontWeight: "500",
  textTransform: "uppercase",
  position: "relative",
  top: "0.875rem",
  backgroundColor: "#fff",
  width: "1.875rem",
  display: "inline-block",
});

const loginbtmtxt = (theme: Theme) => ({
  fontFamily: "'Karla', sans-serif",
  color: "#919697 ",
  fontSize: "1.625rem",
  fontWeight: "400",
  [theme.breakpoints.down("xl")]: { fontSize: "1.25rem" },
  "& a": {
    marginLeft: "0.5rem",
    fontFamily: "'Karla', sans-serif",
    textDecoration: "none",
    fontSize: "1.625rem",
    fontWeight: "700",
    color: "#2599FB",
    "&:hover": {
      color: "#D91962",
    },
    [theme.breakpoints.down("xl")]: { fontSize: "1.25rem" },
  },
});
const logBtn = (theme: Theme) => ({
  minWidth: "23rem",
  marginTop: "3.75rem",
  "& button": {
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontWeight: "700",
    color: "#fff",
    height: "4.875rem",
    boxShadow: "none",
    [theme.breakpoints.down("xl")]: {
      height: "3.75rem",
      fontSize: "1.25rem",
    },
  },
});
const uploadImage = () => ({
  width: "9.25rem",
  height: "9.25rem",
  position: "relative",
  borderRadius: "50%",
  border: "0.5rem solid #2599FB",
  margin: "0 auto 2rem",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center center",
  },
});
const uploadBtn = () => ({
  position: "absolute",
  color: "#ffffff",
  background: "rgb(37 153 251 / 40%)",
  width: "100%",
  height: "100%",
  left: "0",
  top: "0",
});

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleConfirmPassword = () =>
    setConfirmPassword((confPass) => !confPass);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
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
            <Typography variant="h4">Create Your Account</Typography>
            <Typography variant="h6" component="p">
              There are many variations of passages of Lorem.
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Stack sx={uploadImage}>
                <Image src={userImg} alt="user" />
                <IconButton sx={uploadBtn} component="label">
                  <CameraAltOutlinedIcon />
                  <input type="file" hidden />
                </IconButton>
              </Stack>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <TextField
                    sx={styles.inputField}
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoComplete="firstName"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    sx={styles.inputField}
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lastName"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    sx={styles.inputField}
                    fullWidth
                    id="email"
                    label="Enter your email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    sx={styles.inputField}
                    fullWidth
                    id="PhoneNumber"
                    label="Phone Number"
                    name="PhoneNumber"
                    autoComplete="PhoneNumber"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    sx={[mrgnbtm, styles.inputField]}
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    sx={styles.inputField}
                  >
                    <InputLabel htmlFor="confirmPassword">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      id="confirmPassword"
                      type={confirmPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {confirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Confirm Password"
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <FormControl sx={logBtn}>
                <ButtonUse name={"Signup to Continue"} />
              </FormControl>

              <Typography variant="h6" component="div" sx={or}>
                <Typography variant="h6" component="p" sx={orinn}>
                  Or
                </Typography>
              </Typography>
              <SocialLinks tagHead="Sign Up With" />
              <Typography variant="h6" sx={loginbtmtxt}>
                {`Already have an account?`}
                <Link href="/auth/login">Login</Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Grid>
    </CommonLayout>
  );
};

export default Signup;
