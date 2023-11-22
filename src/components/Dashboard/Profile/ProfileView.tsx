"use client";
import {
  Box,
  Typography,
  Grid,
  Stack,
  List,
  ListItem,
  Theme,
} from "@mui/material";
import Image from "next/image";
import profilImg from "../../../../public/images/laura1.jpg";
import ButtonUse from "@/components/ButtonUse";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const ProfileView = () => {
  return (
    <Box sx={formWarp}>
      <Typography sx={pageTitle}>Profile </Typography>
      <Grid
        container
        spacing={2}
        sx={sectionWrap}
        style={{ marginBottom: "1.5rem" }}
      >
        <Grid item xs={9}>
          <Stack sx={profileWrap}>
            <Image src={profilImg} alt="profile image" />
            <Stack sx={profContent}>
              <Typography variant="h6" sx={labelName}>
                Ellisa Doe
              </Typography>
              <Typography variant="h3" sx={labelEmail}>
                ellisa@gmail.com
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
          <ButtonUse name="Edit Profile" icon={<ChevronRightIcon />} />
        </Grid>
      </Grid>
      {/* end profile section */}

      <Grid container spacing={{ md: 2, xl: 4 }}>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Display Name
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            Ellisa Doe
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Date of Birth
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            12-07-1994
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Gender
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            Female
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={{ md: 2, xl: 4 }} sx={sectionWrap}>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Country
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            USA
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            State
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            Washington, D.C.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Time zone
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            GMT -4 hours
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={{ md: 2, xl: 4 }} sx={sectionWrap}>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Language Speak
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            English
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Language Want to Learn
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            Chenese
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const formWarp = (theme: Theme) => ({
  background: "#fff",
  padding: "1.875rem",
  borderRadius: "1.875rem",

  "& button": {
    height: "4.875rem",
    width: "100%",
    fontSize: "1.625rem",
    fontWeight: 700,
    lineHeight: "normal",
    boxShadow: "none",
    [theme.breakpoints.down("xl")]: {
      height: "3.25rem",
      fontSize: "1.125rem",
    },
  },
  [theme.breakpoints.down("xl")]: {
    padding: "1.25rem",
    borderRadius: "1.25rem",
  },
});
const pageTitle = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "2.5rem",
  fontStyle: "normal",
  fontWeight: 500,
  marginBottom: "0.5rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.875rem",
  },
});
const sectionWrap = (theme: Theme) => ({
  borderBottom: "1px solid  #ECECEC",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  [theme.breakpoints.down("xl")]: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  "&:last-child": {
    paddingBottom: 0,
    border: "none",
  },
});

const profileWrap = (theme: Theme) => ({
  flexDirection: "row",
  alignItems: "center",
  img: {
    width: "9.25rem",
    height: "9.25rem",
    borderRadius: "50%",
    border: "0.5rem solid  #F9D136",
    [theme.breakpoints.down("xl")]: {
      width: "6rem",
      height: "6rem",
      borderWidth: "0.375rem",
    },
  },
});

const profContent = () => ({
  flex: 1,
  marginLeft: "1.5rem",
});
const labelName = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "2.1875rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  textAlign: "left",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.5rem",
  },
});
const labelEmail = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "2.1875rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textAlign: "left",
  marginTop: "1rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.25rem",
    marginTop: "0.5rem",
  },
});
const labelTxt = (theme: Theme) => ({
  color: "#727272",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textAlign: "left",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
  },
});
const valueTxt = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "2.1875rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  textAlign: "left",
  marginTop: "1rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.25rem",
    marginTop: "0.5rem",
  },
});

export default ProfileView;
