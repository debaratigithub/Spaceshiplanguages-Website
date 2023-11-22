"use client";
import CommonLayout from "@/components/CommonLayout";
import {
  Grid,
  Box,
  Typography,
  Stack,
  TextField,
  Theme,
  FormControl,
  Button,
} from "@mui/material";
import Image from "next/image";
import loginBanner from "../../../public/images/blogdetlbnr.png";
import ButtonUse from "@/components/ButtonUse";
import { styles } from "../styles";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../reduxts/hooks";
import { useState } from "react";
import { contactUsData } from "@/reduxts/Slices/cmsauthslice/contactUsSlice";

const logBtn = (theme: Theme) => ({
  minWidth: "23rem",
  marginTop: "3.75rem",

  margin: "auto",

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
  backgroundColor: "#D91962",
  margin: "auto",
  fontFamily: "'Karla', sans-serif",
  color: "#fff",
  fontSize: "18px",
  fontWeight: "600",
  padding: "8px 30px",
  borderRadius: "50px",
  textTransform: "inherit",
  "&:hover": {
    backgroundColor: "#fad237",
    color: "#000",
  },
});

interface FormData {
  email: string;
  dasignation: string;
  firstName: string;
  lastName: string;
  message: string;
}

interface FormDatanew {
  email: string;
  dasignation: string;
  name: string;
  message: string;
}

const ContactusPage = () => {
  //const router = useRouter();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    dasignation: "Teacher",
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`;

    const updatedFormData: Omit<FormData, "firstName" | "lastName"> & {
      name: string;
    } = {
      email: formData.email,
      dasignation: "Teacher",
      name: fullName,
      message: formData.message,
    };

    console.log("Updated Form Data:", updatedFormData);
    console.log(formData, "++++++");

    dispatch(contactUsData(updatedFormData)).then((response: any) => {
      console.log(response.payload, "response from login component");

      if (response.payload.status == true) {
        console.log("routing is done");
      } else {
        console.log("routing is not done");
      }
    });
  };
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
              <Box component="form" noValidate onSubmit={handleSubmit}>
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
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
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
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
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
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
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
                      sx={(styles.inputField, { mb: 3 })}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </Grid>
                  <FormControl sx={logBtn}>
                    {/* <Grid item xs={12}>
                      <ButtonUse name="Submit" type="submit" />
                    </Grid> */}
                    <Button
                      type="submit"
                      fullWidth
                      variant="outlined"
                      sx={commonButton}
                    >
                      Submit
                    </Button>
                  </FormControl>
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
export default ContactusPage;
