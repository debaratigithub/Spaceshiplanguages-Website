"use client";
import React, { useState } from "react";

import { Box, Typography, Theme, Stack, MenuItem } from "@mui/material";
import Image from "next/image";
import countFlag1 from "../../../public/images/map1.png";
import countFlag2 from "../../../public/images/map2.png";
import countFlag3 from "../../../public/images/map3.png";
import countFlag4 from "../../../public/images/map4.png";
import countFlag5 from "../../../public/images/map5.png";
import countFlag6 from "../../../public/images/map6.png";
import countFlag7 from "../../../public/images/map7.png";
import countFlag9 from "../../../public/images/map9.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type activeProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};
const languages = [
  {
    value: "ENG",
    label: "English",
  },
  {
    value: "JPY",
    label: "Japanese",
  },
  {
    value: "SPN",
    label: "Spanish",
  },
  {
    value: "CHYN",
    label: "Chinese (Mandarin)",
  },
  {
    value: "FRNCH",
    label: "French",
  },
];
const SelectLanguageStep1 = (props: activeProps) => {
  const { setActiveStep } = props;
  const [countryArray, setCountryArray] = useState([
    { id: 1, flag: countFlag1, name: "English", selected: false },
    { id: 2, flag: countFlag2, name: "Japanese", selected: false },
    { id: 3, flag: countFlag3, name: "Spanish", selected: false },
    { id: 4, flag: countFlag4, name: "Chinese (Mandarin)", selected: false },
    { id: 5, flag: countFlag5, name: "French", selected: false },
    { id: 6, flag: countFlag6, name: "Italian", selected: false },
    { id: 7, flag: countFlag7, name: "German", selected: false },
    { id: 8, flag: countFlag9, name: "Portuguese", selected: false },
  ]);
  const [alignment, setAlignment] = React.useState("English");

  const handleLanguage = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: any
  ) => {
    setAlignment(newAlignment);
  };

  const [language, setLanguage] = React.useState("");

  const languageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
    setTimeout(() => {
      setActiveStep((prevState) => prevState + 1);
    }, 800);
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

      <Box component="form" noValidate autoComplete="off">
        <Stack sx={anotherLang}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Choose Another Language
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="Choose Another Language"
              onChange={languageChange}
              IconComponent={(props) => <KeyboardArrowDownIcon {...props} />}
            >
              <MenuItem value="" sx={labelSelect}>
                Popular Languages
              </MenuItem>
              {languages.map((option) => (
                <MenuItem sx={langTxt} key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Box>
    </Box>
  );
};
const formWarp = (theme: Theme) => ({
  background: "#fff",
  maxWidth: "73.125rem",
  width: "100%",
  padding: "3.25rem",
  borderRadius: "1.875rem",
  textAlign: "center",
  boxShadow: "0 0 2px #ccc",
  margin: "0 auto",
  "& .css-e7e092-MuiButtonBase-root-MuiButton-root": {
    marginTop: "2.5rem",
    minWidth: "23rem",
    height: "4.875rem",
    fontSize: "1.625rem",
    fontWeight: 700,
    lineHeight: "normal",
    [theme.breakpoints.down("xl")]: {
      minWidth: "15rem",
      height: "3.5rem",
      fontSize: "1.5rem",
    },
  },
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
const buttonToggle = () => ({
  flexWrap: "wrap",
  gap: "1.125rem",
  "& .MuiToggleButton-root": {
    borderRadius: "0.625rem !important",
    border: "1px solid #D3D3D3 !important",
    background: "#FFF",
    width: "calc((100% - 3.25rem) / 4)",
  },
  "& .Mui-selected": {
    borderColor: "#F9D136!important",
  },
});
const countryFlag = (theme: Theme) => ({
  position: "relative",
  width: "4.75rem",
  height: "4.0rem",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  [theme.breakpoints.down("xl")]: {
    width: "3rem",
    height: "2.75rem",
  },
});
const anotherLang = (theme: Theme) => ({
  margin: "auto",
  marginTop: "2.5rem",
  width: "27.5rem",
  "& .MuiInputBase-root": {
    borderRadius: "3.125rem",
    background: "#D91962",
    color: "#FFF",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textAlign: "left",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.125rem",
    },
  },
  "& .MuiInputLabel-formControl": {
    color: "#FFF",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.125rem",
    },
  },
  "& .MuiSvgIcon-root": {
    color: "#fff",
    fontSize: "2rem",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.5rem",
    },
  },
  [theme.breakpoints.down("xl")]: {
    width: "20rem",
  },
});
const langTxt = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "3.4375rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
    lineHeight: "2rem",
  },
});
const labelSelect = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.375rem",
  },
});
const countryListWrap = () => ({
  marginTop: "2.5rem",
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
export default SelectLanguageStep1;
