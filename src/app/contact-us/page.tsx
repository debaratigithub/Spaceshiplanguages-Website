"use client";
import CommonLayout from "@/components/CommonLayout";
import { Grid, Box, Typography, Stack, TextField, Theme } from "@mui/material";
import Image from "next/image";
import loginBanner from "../../../public/images/blogdetlbnr.png";
import ButtonUse from "@/components/ButtonUse";
import { styles } from "../styles";

const page = () => {
  return (
    <CommonLayout>
      <Box sx={loginpagewrap}>
        <Grid container sx={styles.container}>
          <Grid item xs={12}>
            <Typography sx={logTitle} variant="h1">
              Contact Us
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={FormWrap}>
        <Grid container sx={styles.container}>
          <Grid item xs={12}>
            <Stack sx={bannerImg}>
              <Image src={loginBanner} fill sizes="100vw" alt="banner Image" />
            </Stack>

            <Stack sx={formInside}>
              <Box component="form" noValidate>
                <Typography variant="h4" sx={titleTxt}>
                  Get In Touch For Inquiries
                </Typography>
                <Typography variant="h6" sx={subtitleTxt}>
                  Send us an inquiry below or email us at
                  business@spaceshiplanguages.com.
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="FirstName"
                      label="First Name"
                      variant="outlined"
                      autoComplete="FirstName"
                      autoFocus
                      sx={styles.inputField}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="LastName"
                      label="Last Name"
                      variant="outlined"
                      autoComplete="LastName"
                      autoFocus
                      sx={styles.inputField}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="Email"
                      label="Email"
                      variant="outlined"
                      autoComplete="Email"
                      autoFocus
                      sx={styles.inputField}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="PhoneNumber"
                      label="Phone Number"
                      variant="outlined"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      sx={styles.inputField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="Messages"
                      label="Messages"
                      variant="outlined"
                      multiline
                      rows={4}
                      sx={styles.inputField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ButtonUse name="Submit" />
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </CommonLayout>
  );
};

const loginpagewrap = () => ({
  background: "#fad237 url(../images/blogdetl.jpg) center top no-repeat",
  marginTop: "134px",
  backgroundSize: "cover",
  paddingTop: "110px",
  height: "440px",
});
const logTitle = (theme: Theme) => ({
  color: "1E1E1C",
  textAlign: "center",
  fontFamily: "Karla",
  fontSize: "4.0625rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  [theme.breakpoints.down("xl")]: {
    fontSize: "3rem",
  },
});
const FormWrap = () => ({
  background: "#fff",
});
const bannerImg = () => ({
  position: "relative",
  width: "100%",
  height: "448px",
  objectFit: "cover",
  objectPosition: "center center",
  marginTop: "-220px",
});
const formInside = (theme: Theme) => ({
  paddingLeft: "10rem",
  paddingRight: "10rem",
  marginTop: "5.375rem",
  marginBottom: "4.625rem",

  "& .css-e7e092-MuiButtonBase-root-MuiButton-root": {
    width: "21.5rem",
    height: "4.875rem",
    margin: "auto",
    display: "block",
    color: "  #FFF ",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textTransform: "capitalize",
    [theme.breakpoints.down("xl")]: {
      width: "15rem",
      height: "3.5rem",
      fontSize: "1.125rem",
    },
  },
});
const titleTxt = (theme: Theme) => ({
  color: "#000",
  textAlign: "center",
  fontFamily: "'Karla' , sans-serif",
  fontSize: "3.125rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.25rem",
  },
});
const subtitleTxt = (theme: Theme) => ({
  color: "#000",
  textAlign: "center",
  fontFamily: "'Karla' , sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  marginTop: "1.25rem",
  marginBottom: "1.875rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.375rem",
  },
});
export default page;
