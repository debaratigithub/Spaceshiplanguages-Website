"use client";
import * as React from "react";

import {
  Grid,
  Box,
  TextField,
  Container,
  Typography,
  Theme,
} from "@mui/material";

import Link from "next/link";

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
import { useEffect, useState } from "react";
import Button, { buttonClasses } from "@mui/material/Button";
import { useRouter } from "next/navigation";

//Redux Toolkit
import { useAppDispatch, useAppSelector } from "../../../reduxts/hooks";
import { loginData } from "../../../reduxts/Slices/studentauthslice/loginslice";

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
  maxWidth: "49rem",
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

const commonButton = () => ({
  margin: "10px 0",
  padding: "10px 20px",
  backgroundColor: "#D91962!important",
  color: "#fff",
  border: "none",
  borderRadius: '50px',
  fontSize: "16px",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#edc627!important",
    border: "none",
  },
});


interface FormData {
  email: string;
  password: string;
  role: string;
}

const Login = () => {

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    role: "student",
  });




  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("clicked",formData);

    dispatch(loginData(formData)).then((response: any) => {
      console.log(response.payload, "response from login component");
      

      if (response.payload.status == true) {
        localStorage.setItem("loginstatus",true.toString());
        console.log("routing is done");
        router.push("/");
      } else {
        console.log("routing is not done");
      }
    });
    // const data = new FormData(event.currentTarget);
    // console.log("hi")
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  return (
    <CommonLayout>
      <Grid container spacing={2} sx={authbg}>
        <Container component="main" maxWidth="lg">
          {/* <CssBaseline /> */}
          <Box sx={authform}>
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
            <Typography variant="h4">Welcome Back</Typography>
            <Typography variant="h6" component="p">
              There are many variations of passages of Lorem.
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                sx={[mrgnbtm, styles.inputField]}
                required
                fullWidth
                id="email"
                label="Enter your email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <FormControl
                variant="outlined"
                fullWidth
                sx={[mrgnbtm, styles.inputField]}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password *
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
                        {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                />
              </FormControl>

              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <FormControl
                sx={{ width: "100%", marginBottom: "20px", textAlign: "right" }}
              >
                <Typography variant="body2" sx={commonlink}>
                  <Link href="/auth/forgot-password">Forgot password?</Link>
                </Typography>
              </FormControl>
              <FormControl sx={logBtn}>
                {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={commonButton}
              >
                Login to Continue
              </Button> */}

                {/* <ButtonUse type="submit" name={"Login to Continue"}  /> */}
                <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={commonButton}
              >
                Login to Continue
              </Button>
              </FormControl>

              <Typography variant="h6" component="div" sx={or}>
                <Typography variant="h6" component="p" sx={orinn}>
                  Or
                </Typography>
              </Typography>
              <SocialLinks tagHead="Login With" />
              <Typography variant="h6" sx={loginbtmtxt}>
                {`Don't have an account?`}
                <Link href="/auth/signup">Sign Up As Student</Link>
                
              </Typography>
              <Typography variant="h6" sx={loginbtmtxt}>
              <Link href="/auth/signup">Sign Up As Teacher</Link>
              </Typography>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </Grid>
    </CommonLayout>
  );
};

export default Login;
