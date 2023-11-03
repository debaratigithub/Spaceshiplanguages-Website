"use client";

import {
  Stack,
  Box,
  Grid,
  Typography,
  TextField,
  Autocomplete,
  Theme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import homeTopImage from "../../../public/images/home-top-image.png";

import ButtonUse from "../../components/ButtonUse";
import { styles } from "@/app/styles";

const bnrbg = (theme: Theme) => ({
  background: "#fad237 url(../images/yellowbg.jpg) center top no-repeat",
  backgroundSize: "100%",
  fontFamily: "'Karla', sans-serif",
  padding: "12.25rem 0px 10.125rem",
  marginTop: "8.375rem",

  [theme.breakpoints.down("xl")]: {
    padding: "6.5rem 0px 6.5rem",
    marginTop: "5.625rem",
  },
  typography: {
    h2: {
      fontWeight: 400,
      fontFamily: "'Karla', sans-serif",
      color: "#1E1E1C",
      fontSize: "3.75rem",
      marginBottom: "1rem",
      [theme.breakpoints.down("xl")]: {
        fontSize: "2.5rem",
      },
    },
    h3: {
      fontWeight: 700,
      fontFamily: "'Karla', sans-serif",
      color: "#1E1E1C",
      fontSize: "4.063rem",
      marginBottom: "1.5rem",
      lineHeight: "4.375rem",
      [theme.breakpoints.down("xl")]: {
        fontSize: "2.75rem",
        lineHeight: "3.5rem",
      },
    },
    P: {
      fontWeight: 400,
      fontFamily: "'Karla', sans-serif",
      color: "#1E1E1C",
      fontSize: "1.625rem",
      lineHeight: "2.25rem",
      [theme.breakpoints.down("xl")]: {
        fontSize: "1.25rem",
        lineHeight: "1.875rem",
      },
    },
  },
});
const searchInsForm = () => ({
  display: "flex",
  marginTop: "1.875rem",
  "& button": {
    background: "#2599FB",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    boxShadow: "none",
    "& svg": {
      width: "1.625rem",
      height: "1.625rem",
    },
  },
});

const srchclass = (theme: Theme) => ({
  flex: 1,
  background: "#fff",
  borderTopLeftRadius: 100,
  borderBottomLeftRadius: 100,
  "& label": {
    top: "0.875rem",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontWeight: 400,
    lineHeight: "normal",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.125rem",
      top: "0.313rem",
    },
  },
  "& input": {
    height: "3.75rem",
    paddingLeft: "1.875rem",
    paddingRight: "1.875rem",
    [theme.breakpoints.down("xl")]: {
      height: "2rem",
    },
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 100,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});

const srchBtn = () => ({
  borderRadius: 12,
});
const contentWrap = (theme: Theme) => ({
  paddingRight: "2.5rem",
  [theme.breakpoints.down("xl")]: {
    paddingRight: "0.5rem",
  },
});
const ctaButton = (theme: Theme) => ({
  paddingRight: "2.5rem",
  "& button": {
    background: "#2599FB",
    height: "4.875rem",
    width: "18.125rem",
    marginTop: "1.875rem",
    fontSize: " 1.625rem",
    fontWeight: 700,
    lineHeight: "normal",
    boxShadow: "none",
    "&:hover": {
      background: "#D91962",
      color: "#fff",
    },
    [theme.breakpoints.down("xl")]: {
      height: "3.75rem",
      width: "16rem",
      fontSize: " 1.5rem",
    },
  },
});
const topImgContainer = (theme: any) => ({
  position: "relative",
  [theme.breakpoints.only("sm")]: {
    height: "31.5rem",
  },
});

type HomeProps = {
  heading?: string;
  description?: string;
  titleTxt?: string;
  isFilter?: boolean;
  ctaButton?: boolean;
  ctaButtonTxt?: string;
};
const CommonBanner = (props: HomeProps) => {
  const theme = useTheme();
  const mediamatch = useMediaQuery(theme.breakpoints.up("sm"));

  const instructorsech = [
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: "Goodfellas", year: 1990 },
    { label: "The Matrix", year: 1999 },
    { label: "Seven Samurai", year: 1954 },
    { label: "City of God", year: 2002 },
    { label: "Se7en", year: 1995 },
    { label: "The Silence of the Lambs", year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: "Life Is Beautiful", year: 1997 },
    { label: "The Usual Suspects", year: 1995 },
    { label: "Léon: The Professional", year: 1994 },
    { label: "Spirited Away", year: 2001 },
    { label: "Saving Private Ryan", year: 1998 },
    { label: "Once Upon a Time in the West", year: 1968 },
    { label: "American History X", year: 1998 },
    { label: "Interstellar", year: 2014 },
    { label: "Casablanca", year: 1942 },
  ];

  return (
    <Box sx={bnrbg}>
      <Grid container sx={styles.container}>
        <Grid item xs={12} md={6}>
          <Stack sx={contentWrap}>
            {props.titleTxt && (
              <Typography variant="h2">{props.titleTxt}</Typography>
            )}
            {props.heading && (
              <Typography variant="h3">{props.heading}</Typography>
            )}
            {props.description && (
              <Typography variant="h6" component="p">
                {props.description}
              </Typography>
            )}

            {props.isFilter ? (
              <Box sx={searchInsForm}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  freeSolo
                  options={instructorsech}
                  sx={srchclass}
                  renderInput={(params) => (
                    <TextField {...params} label="Search Instructor" />
                  )}
                />

                <ButtonUse sx={srchBtn} icon={<SearchIcon />} />
              </Box>
            ) : null}
            {props.ctaButton && (
              <Stack sx={ctaButton}>
                <ButtonUse sx={srchBtn} name={props.ctaButtonTxt} />
              </Stack>
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={topImgContainer}>
          <Image
            src={homeTopImage}
            alt="Picture of the author"
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CommonBanner;
