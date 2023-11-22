"use client";
import React, { useState } from "react";

import { Box, Typography, Theme, Stack } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { SelectChangeEvent } from "@mui/material/Select";
import ButtonUse from "../ButtonUse";

type activeProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

const SelectLanguageStep2 = (props: activeProps) => {
  const { setActiveStep } = props;
  const [proficiency, setProficiency] = useState([
    {
      id: 1,
      language_title:
        "Say simple words or not Say simple words or not Say simple words or not",
      p_label: "A1 or less: Beginner or Zero",
    },
    {
      id: 2,
      language_title: "Say Simple Expressions",
      p_label: "A2: Elementary",
    },
    {
      id: 3,
      language_title: "Introduce myself well",
      p_label: "B1: Intermediate",
    },
    {
      id: 4,
      language_title: "Talk with native speakers",
      p_label: "B2: Upper Intermediate",
    },
    {
      id: 5,
      language_title: "Have in-depth conversations",
      p_label: "C1 or C2: Advanced or Proficient",
    },
  ]);
  const [proflabel, setProflabel] = React.useState("Say simple");

  const handleLanguage = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setProflabel(newAlignment);
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
        In English I can...
      </Typography>
      <Typography variant="h4" component="p" sx={pageSubTitle}>
        Choosing the right level helps your instructor customize their course
        just for you.
      </Typography>
      <Box sx={countryListWrap}>
        <ToggleButtonGroup
          color="primary"
          value={proflabel}
          exclusive
          onChange={handleLanguage}
          aria-label="Platform"
          sx={buttonToggle}
        >
          {proficiency.map((proficiency) => (
            <ToggleButton
              value={proficiency.language_title}
              key={proficiency.id}
            >
              <Typography
                variant="h2"
                noWrap
                component="h2"
                sx={proficiencyTitle}
              >
                {proficiency.language_title}
              </Typography>
              <Typography
                variant="h4"
                noWrap
                component="h4"
                sx={proficiencySubtitle}
              >
                {proficiency.p_label}
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
  padding: "3.25rem",
  borderRadius: "1.875rem",
  textAlign: "center",
  boxShadow: "0 0 2px #ccc",
  margin: "0 auto",
  [theme.breakpoints.down("xl")]: {
    maxWidth: "55rem",
    padding: "1.5rem",
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
  justifyContent: "center",
  gap: "1.125rem",
  "& .MuiToggleButton-root": {
    borderRadius: "0.625rem !important",
    border: "1px solid #D3D3D3 !important",
    background: "#FFF",
    width: "calc((100% - 2.25rem) / 3)",
    flexWrap: "wrap",
  },
  "& .Mui-selected": {
    borderColor: "#F9D136!important",
  },
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

const countryListWrap = () => ({
  marginTop: "2.5rem",
});

const proficiencyTitle = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  textAlign: "left",
  width: "100%",
  marginBottom: "0.125rem",
  textTransform: "capitalize",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
  },
});
const proficiencySubtitle = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textAlign: "left",
  width: "100%",
  textTransform: "initial",
  [theme.breakpoints.down("xl")]: {
    fontSize: "0.875rem",
  },
});
export default SelectLanguageStep2;
