"use client";
import React, { useState } from "react";

import { Box, Typography, Theme, Stack } from "@mui/material";
import Image from "next/image";
import education from "../../../public/images/education_icon.png";
import career from "../../../public/images/career_icon.png";
import livingAbroad from "../../../public/images/living_abroad_icon.png";
import funCulture from "../../../public/images/fun_culture_icon.png";
import Travel from "../../../public/images/travel_icon.png";
import friendsFamily from "../../../public/images/family_friends_icon.png";
import kidsTeen from "../../../public/images/kids_icon.png";
import Others from "../../../public/images/others_icon.png";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { SelectChangeEvent } from "@mui/material/Select";
import ButtonUse from "../ButtonUse";

type activeProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

const SelectLanguageStep3 = (props: activeProps) => {
  const { setActiveStep } = props;
  const [countryArray, setCountryArray] = useState([
    { id: 1, flag: education, name: "Education & Exams" },
    { id: 2, flag: career, name: "Career & Business" },
    { id: 3, flag: livingAbroad, name: "Living abroad" },
    { id: 4, flag: funCulture, name: "Fun & Culture" },
    { id: 5, flag: Travel, name: "Travel" },
    { id: 6, flag: friendsFamily, name: "Family & Friends" },
    { id: 7, flag: kidsTeen, name: "Kids & Teens" },
    { id: 8, flag: Others, name: "Others" },
  ]);
  const [alignment, setAlignment] = React.useState("English");

  const handleLanguage = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: any
  ) => {
    setAlignment(newAlignment);
    setTimeout(() => {
      setActiveStep((prevState) => prevState + 1);
    }, 800);
  };
  const stepBack = () => {
    setActiveStep((lastStep) => lastStep - 1);
  };

  return (
    <Box sx={formWarp}>
      <Typography noWrap sx={pageTitle} component="h2">
        I want to learn...
      </Typography>
      <Typography variant="h4" component="p" sx={pageSubTitle}>
        Choosing the right level helps your instructor customize their course
        just for you.
      </Typography>
      <Box sx={countryListWrap}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleLanguage}
          aria-label="Platform"
          sx={buttonToggle}
        >
          {countryArray.map((country) => (
            <ToggleButton value={country.name} key={country.id}>
              <Stack sx={countryFlag}>
                <Image src={country.flag} alt="#" />
              </Stack>
              <Typography variant="h4" component="h4" sx={countryTitle}>
                {country.name}
              </Typography>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
      <Stack sx={backBtn}>
        <ButtonUse name="Back" onClick={stepBack} />
      </Stack>
    </Box>
  );
};
const formWarp = (theme: Theme) => ({
  background: "#fff",
  maxWidth: "73.125rem",
  width: "100%",
  padding: "3.375rem",
  borderRadius: "1.875rem",
  textAlign: "center",
  boxShadow: "0 0 2px #ccc",
  margin: "0 auto",

  [theme.breakpoints.down("xl")]: {
    maxWidth: "55rem",
    padding: "2rem",
    paddingRight: "1rem",
    borderRadius: "1.5rem",
  },
});
const pageTitle = (theme: Theme) => ({
  color: "#000",
  textAlign: "center",
  fontFamily: "'Karla', sans-serif",
  fontSize: "3.75rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "4.375rem",
  marginBottom: "1rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.25rem",
    lineHeight: "3rem",
  },
});
const pageSubTitle = (theme: Theme) => ({
  color: "#1E1E1C",
  textAlign: "center",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1.875rem",

  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
    lineHeight: "2rem",
  },
});
const buttonToggle = (theme: Theme) => ({
  flexWrap: "wrap",
  gap: "1.125rem",
  "& .MuiToggleButton-root": {
    minHeight: "5.125rem",
    borderRadius: "0.625rem !important",
    border: "1px solid #D3D3D3 !important",
    background: "#FFF",
    width: "calc((100% - 2.25rem) / 3)",
    [theme.breakpoints.down("xl")]: {
      minHeight: "4rem",
    },
  },
  "& .Mui-selected": {
    borderColor: "#F9D136!important",
  },
});
const countryFlag = (theme: Theme) => ({
  position: "relative",
  width: "1.75rem",
  height: "1.75rem",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  [theme.breakpoints.down("xl")]: {
    width: "1.5rem",
    height: "1.438rem",
  },
});

const countryListWrap = () => ({
  marginTop: "2.5rem",
});
const backBtn = (theme: Theme) => ({
  alignItems: "center",
  marginTop: "2.5rem",
  "& .css-e7e092-MuiButtonBase-root-MuiButton-root": {
    background: "#12BA94",
    width: "17.375rem",
    height: "4.875rem",
  },
  [theme.breakpoints.down("xl")]: {
    minWidth: "15rem",
    height: "3.5rem",
    fontSize: "1.5rem",
  },
});
const countryTitle = (theme: Theme) => ({
  color: "#000",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  marginLeft: "1rem",
  textAlign: "left",
  flex: 1,
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
    marginLeft: "0.5rem",
  },
});
export default SelectLanguageStep3;
