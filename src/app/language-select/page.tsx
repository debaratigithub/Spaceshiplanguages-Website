"use client";
import { useState } from "react";
import CommonLayout from "@/components/CommonLayout";
import {
  Box,
  Grid,
  Theme,
  Stepper,
  Step,
  StepLabel,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { styles } from "../styles";
import ButtonUse from "@/components/ButtonUse";
import SelectLanguageStep1 from "@/components/LanguageSelection/SelectLanguageStep1";
import SelectLanguageStep2 from "@/components/LanguageSelection/SelectLanguageStep2";
import SelectLanguageStep3 from "@/components/LanguageSelection/SelectLanguageStep3";
import SelectLanguageStep4 from "@/components/LanguageSelection/SelectLanguageStep4";

const LanguageSelect = () => {
  const [activeStep, setActiveStep] = useState(0);

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return <SelectLanguageStep1 setActiveStep={setActiveStep} />;
      case 1:
        return <SelectLanguageStep2 setActiveStep={setActiveStep} />;
      case 2:
        return <SelectLanguageStep3 setActiveStep={setActiveStep} />;
      case 3:
        return <SelectLanguageStep4 setActiveStep={setActiveStep} />;

      default:
        return <SuccessFull />;
    }
  }

  return (
    <CommonLayout>
      <Box sx={pageMain}>
        <Stack sx={[centerd, styles.container]}>
          <Stepper alternativeLabel activeStep={activeStep}>
            <Step sx={labelStyle}>
              <StepLabel>Step 1</StepLabel>
            </Step>
            <Step sx={labelStyle}>
              <StepLabel>Step 2</StepLabel>
            </Step>
            <Step sx={labelStyle}>
              <StepLabel>Step 3</StepLabel>
            </Step>
            <Step sx={labelStyle}>
              <StepLabel>Step 4</StepLabel>
            </Step>
          </Stepper>
        </Stack>
        <Grid container sx={styles.container}>
          {getSectionComponent()}
        </Grid>
      </Box>
    </CommonLayout>
  );
};

const pageMain = (theme: Theme) => ({
  background: "#FAD237 url('../images/blogdetl.jpg') no-repeat center top",
  backgroundSize: "100%",
  marginTop: "8.375rem",
  padding: "3.5rem 0 4.375rem 0",
  [theme.breakpoints.down("xl")]: {
    marginTop: "5.625rem",
  },
});
const centerd = () => ({
  justifyContent: "center",
  width: " 16.3125rem;",
  marginBottom: "2rem",
});

const labelStyle = () => ({
  ".MuiStepLabel-labelContainer": {
    display: "none",
  },
  ".MuiSvgIcon-root": {
    width: "1.8125rem",
    height: "1.8125rem",
    color: "#fff",
  },
  ".css-z7uhs0-MuiStepConnector-line": {
    borderTopWidth: "4px",
  },
});

export default LanguageSelect;

const SuccessFull = () => {
  return (
    <Stack sx={succesWrap}>
      <Typography sx={successMsg}>You have successFully registered.</Typography>
      <Link href="/auth/login">
        <ButtonUse name="Login" />
      </Link>
    </Stack>
  );
};
const succesWrap = () => ({
  justifyContent: "center",
  width: "100%",
  alignItems: "center",
});
const successMsg = () => ({
  color: " #1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "2rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  marginBottom: "1rem",
});
