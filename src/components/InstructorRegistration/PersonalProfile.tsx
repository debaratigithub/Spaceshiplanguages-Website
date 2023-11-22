import { styles } from "@/app/styles";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
  Stack,
  Button,
  Theme,
} from "@mui/material";
import Image from "next/image";
import { Dayjs } from "dayjs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import calendarIcon from "../../../public/images/calicon.png";
import ButtonUse from "../ButtonUse";
type activeProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

const CustomCalendarIcon = () => {
  return (
    <Image
      src={calendarIcon}
      alt="Date picker opening icon"
      width={26}
      height={26}
    />
  );
};
const PersonalProfile = (props: activeProps) => {
  const { setActiveStep } = props;

  console.log(typeof setActiveStep, "type checking");

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [proficiencyLevel, setProficiencyLevel] = useState("");
  const [value, setValue] = React.useState<Dayjs | null>(null);

  const handleCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };
  const handleState = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };
  const handleCity = (event: SelectChangeEvent) => {
    setCity(event.target.value);
  };
  const handleGender = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };
  const handleLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };
  const handleProficiencyLevel = (event: SelectChangeEvent) => {
    setProficiencyLevel(event.target.value);
  };
  const handlebutton = () => {
    setActiveStep((currentStep) => currentStep + 1);
  };

  return (
    <Box sx={formWarp}>
      <Typography sx={pageTitle}>Create Personal Profile</Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="DisplayName"
            label="Display Name"
            variant="outlined"
            autoComplete="DisplayName"
            sx={styles.inputField}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <FormControl fullWidth sx={styles.inputField}>
            <InputLabel id="country">Country</InputLabel>
            <Select
              labelId="country"
              id="country"
              value={country}
              label="Country"
              IconComponent={ExpandMoreIcon}
              onChange={handleCountry}
            >
              <MenuItem value="usa" sx={dropdownitem}>
                USA
              </MenuItem>
              <MenuItem value="uk" sx={dropdownitem}>
                UK
              </MenuItem>
              <MenuItem value="australia" sx={dropdownitem}>
                Australia
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6}>
          <FormControl fullWidth sx={styles.inputField}>
            <InputLabel id="state">State</InputLabel>
            <Select
              labelId="state"
              id="state"
              value={state}
              label="State"
              IconComponent={ExpandMoreIcon}
              onChange={handleState}
            >
              <MenuItem value="abcd" sx={dropdownitem}>
                Abcd
              </MenuItem>
              <MenuItem value="ubcdek" sx={dropdownitem}>
                Ubcdek
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={6}>
          <FormControl fullWidth sx={styles.inputField}>
            <InputLabel id="city">City</InputLabel>
            <Select
              labelId="city"
              id="city"
              value={city}
              label="City"
              IconComponent={ExpandMoreIcon}
              onChange={handleCity}
            >
              <MenuItem value="city1" sx={dropdownitem}>
                City 1
              </MenuItem>
              <MenuItem value="city2" sx={dropdownitem}>
                City 2
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Birthday"
              value={value}
              slots={{ openPickerIcon: CustomCalendarIcon }}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              sx={[styles.inputField, { width: "100%" }]}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth sx={styles.inputField}>
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              labelId="gender"
              id="gender"
              value={gender}
              label="Gender"
              IconComponent={ExpandMoreIcon}
              onChange={handleGender}
            >
              <MenuItem value="male" sx={dropdownitem}>
                Male
              </MenuItem>
              <MenuItem value="female" sx={dropdownitem}>
                Female
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Stack sx={skillBlock}>
            <Typography variant="body2" sx={langTitle}>
              Language Skills
            </Typography>
            <Button sx={addMorebtn}>
              <AddCircleOutlineIcon sx={{ marginRight: "0.5rem" }} /> Add More
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ paddingTop: 0 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={styles.inputField}>
                <InputLabel id="Language">
                  Language (which want to teach)
                </InputLabel>
                <Select
                  labelId="Language"
                  id="Language"
                  value={language}
                  IconComponent={ExpandMoreIcon}
                  onChange={handleLanguage}
                >
                  <MenuItem value="language1" sx={dropdownitem}>
                    language 1
                  </MenuItem>
                  <MenuItem value="language2" sx={dropdownitem}>
                    language 2
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={styles.inputField}>
                <InputLabel id="ProficiencyLevel">Proficiency Level</InputLabel>
                <Select
                  labelId="ProficiencyLevel"
                  id="ProficiencyLevel"
                  value={proficiencyLevel}
                  IconComponent={ExpandMoreIcon}
                  onChange={handleProficiencyLevel}
                >
                  <MenuItem value="expert" sx={dropdownitem}>
                    Expert
                  </MenuItem>
                  <MenuItem value="intermediate" sx={dropdownitem}>
                    Intermediate
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ButtonUse onClick={handlebutton} name="Next" />
        </Grid>
      </Grid>
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
    maxWidth: "60rem",
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
  marginBottom: "3.25rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.5rem",
    lineHeight: "3.125rem",
    marginBottom: "2.5rem",
  },
});
const dropdownitem = () => ({
  color: " #727272 ",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});
const skillBlock = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
});
const addMorebtn = (theme: Theme) => ({
  padding: "0",
  color: " #1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});
const langTitle = (theme: Theme) => ({
  color: " #1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.75rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.375rem",
  },
});
export default PersonalProfile;
