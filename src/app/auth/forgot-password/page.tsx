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

import FormControl from "@mui/material/FormControl";
import ButtonUse from "../../../components/ButtonUse";
import CommonLayout from "../../../components/CommonLayout";
import { styles } from "../../styles";

import { useEffect, useState } from "react";
import Button, { buttonClasses } from "@mui/material/Button";
import { useRouter } from "next/navigation";

//Redux Toolkit
import { useAppDispatch, useAppSelector } from "../../../reduxts/hooks";
import { forgotPasswordData } from "../../../reduxts/Slices/studentauthslice/forgotpasswordslice";

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
  role: string;
}

const ForgotPassword = () => {

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormData>({
    email: '',
    role: 'student',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("clicked",formData);

    dispatch(forgotPasswordData(formData)).then((response: any) => {
      console.log(response.payload, "response from login component");

      if (response.payload.status == true) {
        console.log("routing is done");
        router.push("/auth/verify-forgetpassword");
      } else {
        console.log("routing is not done");
      }
    });
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  return (
    <CommonLayout>
      <Grid container spacing={2} sx={authbg}>
        <Container component="main" maxWidth="lg">
          <Box sx={authform}>
            <Typography variant="h4">Forgot Password</Typography>
            <Typography variant="h6" component="p">
              Please enter your email Id that you have registered.
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

              <FormControl sx={logBtn}>
                {/* <ButtonUse name={"Submit"} /> */}
                <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={commonButton}
              >
                Submit
              </Button>
              </FormControl>
            </Box>
          </Box>
        </Container>
      </Grid>
    </CommonLayout>
  );
};

export default ForgotPassword;
