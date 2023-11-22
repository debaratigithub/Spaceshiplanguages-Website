"use client";
import React, { useState } from "react";

import { Box, Typography, Theme, Stack, Card } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { SelectChangeEvent } from "@mui/material/Select";
import ButtonUse from "../ButtonUse";

type activeProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

const SelectLanguageStep4 = (props: activeProps) => {
  const { setActiveStep } = props;
  const [tests, setTest] = useState([
    {
      id: 1,
      test_title: "IELTS",
      selected: false,
    },
    {
      id: 2,
      test_title: "TOEFL",
      selected: false,
    },
    {
      id: 3,
      test_title: "TOEIC",
      selected: true,
    },
    {
      id: 4,
      test_title: "FCE",
      selected: false,
    },
    {
      id: 5,
      test_title: "BEC",
      selected: false,
    },
    {
      id: 6,
      test_title: "PET",
      selected: false,
    },
    {
      id: 7,
      test_title: "CAE",
      selected: false,
    },
    {
      id: 8,
      test_title: "CPE",
      selected: false,
    },
    {
      id: 9,
      test_title: "KET",
      selected: false,
    },
    {
      id: 10,
      test_title: "KET",
      selected: false,
    },
    {
      id: 11,
      test_title: "Duolingo English Test",
      selected: false,
    },
  ]);
  const [interests, setInterests] = useState([
    {
      id: 1,
      test_title: "Music",
      selected: false,
    },
    {
      id: 2,
      test_title: "Sports & Fitness",
      selected: false,
    },
    {
      id: 3,
      test_title: "Food",
      selected: true,
    },
    {
      id: 4,
      test_title: "Films & TV Series",
      selected: false,
    },
    {
      id: 5,
      test_title: "Reading",
      selected: false,
    },
    {
      id: 6,
      test_title: "Writing",
      selected: false,
    },
    {
      id: 7,
      test_title: "Art",
      selected: false,
    },
    {
      id: 8,
      test_title: "History",
      selected: false,
    },
    {
      id: 9,
      test_title: "Science",
      selected: false,
    },
    {
      id: 10,
      test_title: "Business & Finance",
      selected: false,
    },
    {
      id: 11,
      test_title: "Medical & Healthcare",
      selected: false,
    },
    {
      id: 12,
      test_title: "Tech",
      selected: false,
    },
    {
      id: 13,
      test_title: "Pets & Animals",
      selected: false,
    },
    {
      id: 14,
      test_title: "Gaming",
      selected: false,
    },
    {
      id: 15,
      test_title: "Travel",
      selected: false,
    },
    {
      id: 16,
      test_title: "Legal Services",
      selected: false,
    },
    {
      id: 17,
      test_title: "Marketing",
      selected: false,
    },
    {
      id: 18,
      test_title: "Fashion & Beauty",
      selected: false,
    },
    {
      id: 19,
      test_title: "Environment & Nature",
      selected: false,
    },
    {
      id: 20,
      test_title: "Animation & Comics",
      selected: false,
    },
  ]);

  const stepBack = () => {
    setActiveStep((lastStep) => lastStep - 1);
  };
  const handleTest = (id: number) => {
    const filteredTest = tests.map((test) =>
      test.id === id ? { ...test, selected: !test.selected } : test
    );
    setTest(filteredTest);
  };
  const handleInterest = (id: number) => {
    const filteredInterest = interests.map((interest) =>
      interest.id === id
        ? { ...interest, selected: !interest.selected }
        : interest
    );
    setInterests(filteredInterest);
  };

  return (
    <Box sx={formWarp}>
      <Typography noWrap sx={pageTitle} component="h2">
        I prefer these Tests and Topics ...
      </Typography>
      <Typography variant="h4" component="p" sx={pageSubTitle}>
        This helps you find a great teacher to guide you.
      </Typography>
      <Box sx={PreferListWrap}>
        <Typography variant="h2" sx={catTitle}>
          Tests
        </Typography>
        {tests.map((test) => (
          <Card
            key={test.id}
            sx={buttonToggle}
            elevation={0}
            onClick={() => handleTest(test.id)}
            style={{
              background: test.selected === true ? "#FFF8E1" : "",
              borderColor: test.selected === true ? "#EBDCAB" : "",
            }}
          >
            <Typography variant="h2" noWrap component="h2" sx={textTitle}>
              {test.test_title}
            </Typography>
          </Card>
        ))}
      </Box>
      <Box sx={PreferListWrap}>
        <Typography variant="h2" sx={catTitle}>
          Interests
        </Typography>
        {interests.map((interest) => (
          <Card
            key={interest.id}
            sx={buttonToggle}
            elevation={0}
            onClick={() => handleInterest(interest.id)}
            style={{
              flexGrow: "inherit",
              background: interest.selected === true ? "#FFF8E1" : "",
              borderColor: interest.selected === true ? "#EBDCAB" : "",
            }}
          >
            <Typography variant="h2" noWrap component="h2" sx={textTitle}>
              {interest.test_title}
            </Typography>
          </Card>
        ))}
      </Box>
      <Stack sx={backBtn}>
        <ButtonUse name="Back" onClick={stepBack} />
        <ButtonUse name="Start Journey" />
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
    maxWidth: "50rem",
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
    fontSize: "2rem",
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

const backBtn = (theme: Theme) => ({
  alignItems: "center",
  marginTop: "2.5rem",
  flexDirection: "row",
  justifyContent: "center",
  "& .css-e7e092-MuiButtonBase-root-MuiButton-root": {
    width: "17.375rem",
    height: "4.875rem",
    ":first-child": {
      background: "#12BA94",
      marginRight: "0.75rem",
    },
    [theme.breakpoints.down("xl")]: {
      minWidth: "15rem",
      height: "3.5rem",
      fontSize: "1.5rem",
    },
  },
});

const PreferListWrap = () => ({
  marginTop: "2.5rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "1.125rem",
});

const catTitle = (theme: Theme) => ({
  color: "#000",
  fontFamily: "'Karla', sans-serif",
  fontSize: "2.1875rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  width: "100%",
  textAlign: "left",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.625rem",
  },
});
const buttonToggle = () => ({
  borderRadius: "0.625rem ",
  border: "1px solid #D3D3D3",
  padding: "1rem",
  minWidth: "10rem",
  flexGrow: 1,
  cursor: "pointer",
});
const textTitle = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  textAlign: "text",
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
export default SelectLanguageStep4;
