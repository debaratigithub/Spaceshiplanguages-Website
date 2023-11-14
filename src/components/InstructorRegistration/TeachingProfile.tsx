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
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Theme,
} from "@mui/material";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ButtonUse from "../ButtonUse";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { createSvgIcon } from "@mui/material/utils";

interface MaterialProps {
  id: number;
  checked: boolean;
  label: string;
}
type TeachingProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};
const TeachingProfile = (props: TeachingProps) => {
  const { setActiveStep } = props;
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [proficiencyLevel, setProficiencyLevel] = useState("");
  const [timezone, setTimezone] = useState("");
  const [degree, setDegree] = useState("");
  const [teachMaterial, setTeachMaterial] = useState<MaterialProps[]>([
    { id: 1, label: "PDF File", checked: false },
    { id: 2, label: "Text Documents", checked: false },
    { id: 3, label: "Presentation Slides/PPT", checked: false },
    { id: 4, label: "Audio Files", checked: false },
    { id: 5, label: "Image Files", checked: false },
    { id: 6, label: "Video Files", checked: false },
    { id: 7, label: "Flashcards", checked: false },
    { id: 8, label: "Articles & News", checked: false },
    { id: 9, label: "Quizzes", checked: true },
    { id: 10, label: "Test Templates & Exam...", checked: false },
    { id: 11, label: "Graphs & Charts", checked: false },
    { id: 12, label: "Homework Assignments", checked: false },
  ]);

  const [file, setFile] = useState<string | undefined>();
  const [filename, setFilename] = useState<string | undefined>();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const fileUrl = event?.target?.files;
    // setFile(URL.createObjectURL(fileUrl?.item(0) as blob));
    // setFilename(fileUrl?.item(0)?.name);
    console.log("file upload");
  };
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
  const handleTimezone = (event: SelectChangeEvent) => {
    setTimezone(event.target.value);
  };
  const handleDegree = (event: SelectChangeEvent) => {
    setDegree(event.target.value);
  };
  const handleMaterial = (Id: number) => {
    const updateMaterial = teachMaterial.map((material) =>
      material.id === Id
        ? { ...material, checked: !material.checked }
        : material
    );
    setTeachMaterial(updateMaterial);
  };

  const handleBack = () => {
    setActiveStep((prevState) => prevState - 1);
  };
  const handleNext = () => {
    setActiveStep((prevState) => prevState + 1);
  };

  const UploadCloud = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
    >
      <path
        d="M34.1403 15.8759C33.519 13.3924 32.0858 11.1877 30.0684 9.61181C28.0509 8.03593 25.5647 7.17922 23.0047 7.17774C20.4447 7.17625 17.9576 8.03007 15.9383 9.60361C13.919 11.1772 12.4832 13.3802 11.8591 15.863C8.91482 16.1393 6.19017 17.5392 4.25108 19.7718C2.31199 22.0045 1.3075 24.8984 1.44627 27.8523C1.58504 30.8062 2.8564 33.5932 4.99626 35.6342C7.13612 37.6753 9.98001 38.8136 12.9372 38.8127H17.2497C17.6309 38.8127 17.9966 38.6612 18.2662 38.3916C18.5357 38.122 18.6872 37.7564 18.6872 37.3752C18.6872 36.9939 18.5357 36.6283 18.2662 36.3587C17.9966 36.0891 17.6309 35.9377 17.2497 35.9377H12.9372C11.8045 35.941 10.6823 35.7211 9.63463 35.2907C8.58693 34.8603 7.63426 34.2278 6.83102 33.4292C5.2088 31.8165 4.2937 29.6253 4.28703 27.3378C4.28036 25.0503 5.18266 22.8539 6.79545 21.2316C8.40823 19.6094 10.5994 18.6943 12.8869 18.6877C13.2557 18.7154 13.6217 18.6052 13.9139 18.3784C14.2061 18.1515 14.4036 17.8243 14.4681 17.46C14.7608 15.4074 15.7843 13.5292 17.3505 12.1705C18.9167 10.8118 20.9205 10.0638 22.9939 10.0638C25.0674 10.0638 27.0712 10.8118 28.6374 12.1705C30.2036 13.5292 31.227 15.4074 31.5197 17.46C31.5949 17.8116 31.7898 18.1262 32.0711 18.3501C32.3524 18.574 32.7027 18.6933 33.0622 18.6877C35.3497 18.6877 37.5435 19.5964 39.161 21.2139C40.7785 22.8314 41.6872 25.0252 41.6872 27.3127C41.6872 29.6001 40.7785 31.7939 39.161 33.4115C37.5435 35.029 35.3497 35.9377 33.0622 35.9377H28.7497C28.3684 35.9377 28.0028 36.0891 27.7332 36.3587C27.4636 36.6283 27.3122 36.9939 27.3122 37.3752C27.3122 37.7564 27.4636 38.122 27.7332 38.3916C28.0028 38.6612 28.3684 38.8127 28.7497 38.8127H33.0622C35.9977 38.7819 38.8104 37.6297 40.9238 35.5921C43.0372 33.5544 44.2913 30.7857 44.4292 27.8532C44.567 24.9208 43.5781 22.0466 41.6652 19.8197C39.7522 17.5928 37.06 16.1818 34.1403 15.8759Z"
        fill="#1E1E1C"
      />
      <path
        d="M29.1711 28.3285C29.4422 28.5904 29.8053 28.7353 30.1822 28.732C30.5591 28.7287 30.9197 28.5775 31.1862 28.311C31.4527 28.0445 31.6039 27.6839 31.6072 27.307C31.6105 26.9301 31.4656 26.567 31.2037 26.2959L24.0162 19.1084C23.7467 18.8389 23.3811 18.6875 22.9999 18.6875C22.6187 18.6875 22.2532 18.8389 21.9836 19.1084L14.7961 26.2959C14.5342 26.567 14.3894 26.9301 14.3926 27.307C14.3959 27.6839 14.5471 28.0445 14.8136 28.311C15.0801 28.5775 15.4407 28.7287 15.8176 28.732C16.1945 28.7353 16.5576 28.5904 16.8287 28.3285L21.5624 23.5948V41.6872C21.5624 42.0684 21.7139 42.4341 21.9834 42.7037C22.253 42.9732 22.6187 43.1247 22.9999 43.1247C23.3812 43.1247 23.7468 42.9732 24.0164 42.7037C24.286 42.4341 24.4374 42.0684 24.4374 41.6872V23.5948L29.1711 28.3285Z"
        fill="#1E1E1C"
      />
    </svg>,
    "Upload"
  );

  return (
    <Box sx={formWarp}>
      <Typography sx={pageTitle}>Create Teaching Profile</Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <FormControl fullWidth sx={styles.inputField}>
            <input type="file" id="fileUpload" hidden />
            <OutlinedInput
              readOnly
              value="Upload Video Introduction File"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="file"
                    edge="end"
                    sx={{ transform: "rotate(30deg)", marginRight: 0 }}
                    component="label"
                    htmlFor="fileUpload"
                  >
                    <AttachFileIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="Me_Bio"
            label="About Me/Bio"
            variant="outlined"
            autoComplete="Me_Bio"
            sx={styles.inputField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="Teaching_Style"
            label="My Lessons & Teaching Style"
            variant="outlined"
            autoComplete="Teaching_Style"
            sx={styles.inputField}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={styles.inputField}>
            <InputLabel id="Timezone">Timezone</InputLabel>
            <Select
              labelId="Timezone"
              id="Timezone"
              value={timezone}
              label="Timezone"
              IconComponent={ExpandMoreIcon}
              onChange={handleTimezone}
            >
              {timezoneList.map((timeZone, index) => (
                <MenuItem value={timeZone.value} key={index} sx={dropdownitem}>
                  {timeZone.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Stack sx={[skillBlock, marginBottom]}>
            <Typography variant="body2" sx={langTitle}>
              My Teaching Material(Optional)
            </Typography>
          </Stack>
          <Grid container>
            {teachMaterial.map((material) => (
              <Grid item xs={4} key={material.id}>
                <FormControlLabel
                  sx={checkboxLabel}
                  control={
                    <Checkbox
                      checked={material.checked}
                      onChange={() => handleMaterial(material.id)}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label={material.label}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Education */}
        <Grid item xs={12}>
          <Stack sx={skillBlock}>
            <Typography variant="body2" sx={langTitle}>
              Education
            </Typography>
            <Button sx={addMorebtn}>
              <AddCircleOutlineIcon sx={{ marginRight: "0.5rem" }} /> Add More
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ paddingTop: 0 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="YearFrom"
                label="Year From"
                variant="outlined"
                autoComplete="YearFrom"
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="YearTo"
                label="Year To"
                variant="outlined"
                autoComplete="YearTo"
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="InstitutionName"
                label="Institution Name"
                variant="outlined"
                autoComplete="InstitutionName"
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="MajorTopic"
                label="Major / Topic"
                variant="outlined"
                autoComplete="MajorTopic"
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={styles.inputField}>
                <InputLabel id="Degree">Select Degree</InputLabel>
                <Select
                  labelId="Degree"
                  id="Degree"
                  value={degree}
                  IconComponent={ExpandMoreIcon}
                  onChange={handleDegree}
                >
                  <MenuItem value="Btech" sx={dropdownitem}>
                    Bachelor of Technology
                  </MenuItem>
                  <MenuItem value="M.tech" sx={dropdownitem}>
                    Master Technology
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="Description"
                label="Description"
                variant="outlined"
                autoComplete="Description"
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                component="label"
                sx={fileuploadBtn}
                startIcon={<UploadCloud />}
              >
                Upload File Document
                <input type="file" hidden onChange={handleFileUpload} />
                {/* {file && (
                  <Stack sx={uploadedFile}>
                    <Image src={file} width={80} height={80} alt={file} />
                    <Typography sx={uploadedFilename}>{filename}</Typography>
                  </Stack>
                )} */}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/*end Education */}
        {/* work experience */}
        <Grid item xs={12}>
          <Stack sx={skillBlock}>
            <Typography variant="body2" sx={langTitle}>
              Work Experience
            </Typography>
            <Button sx={addMorebtn}>
              <AddCircleOutlineIcon sx={{ marginRight: "0.5rem" }} /> Add More
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ paddingTop: 0 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="YearFrom"
                label="Year From"
                variant="outlined"
                autoComplete="YearFrom"
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="YearTo"
                label="Year To"
                variant="outlined"
                autoComplete="YearTo"
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="InstitutionName"
                label="Institution Name"
                variant="outlined"
                autoComplete="InstitutionName"
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="MajorTopic"
                label="Major / Topic"
                variant="outlined"
                autoComplete="MajorTopic"
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={styles.inputField}>
                <InputLabel id="CountryRegion">Country / Region</InputLabel>
                <Select
                  labelId="CountryRegion"
                  id="CountryRegion"
                  value={country}
                  IconComponent={ExpandMoreIcon}
                  onChange={handleCountry}
                >
                  <MenuItem value="usa" sx={dropdownitem}>
                    USA
                  </MenuItem>
                  <MenuItem value="uk" sx={dropdownitem}>
                    Uk
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="city"
                label="City"
                variant="outlined"
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="Description"
                label="Description"
                variant="outlined"
                autoComplete="Description"
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                component="label"
                sx={fileuploadBtn}
                startIcon={<UploadCloud />}
              >
                Upload File Document
                <input type="file" hidden />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/*end work experience */}
        {/* work experience */}
        <Grid item xs={12}>
          <Stack sx={skillBlock}>
            <Typography variant="body2" sx={langTitle}>
              Certificates
            </Typography>
            <Button sx={addMorebtn}>
              <AddCircleOutlineIcon sx={{ marginRight: "0.5rem" }} /> Add More
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ paddingTop: 0 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="YearFrom"
                label="Year From"
                variant="outlined"
                autoComplete="YearFrom"
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="CertificateName"
                label="Certificate Name"
                variant="outlined"
                autoComplete="CertificateName"
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="Institution"
                label="Institution"
                variant="outlined"
                autoComplete="Institution"
                sx={styles.inputField}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="Description"
                label="Description"
                variant="outlined"
                autoComplete="Description"
                sx={styles.inputField}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                component="label"
                sx={fileuploadBtn}
                startIcon={<UploadCloud />}
              >
                Upload File Document
                <input type="file" hidden />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/*end Certificates */}

        {/* work experience */}
        <Grid item xs={12}>
          <Stack sx={skillBlock}>
            <Typography variant="body2" sx={langTitle}>
              Accept Booking Request
            </Typography>
          </Stack>

          <FormControl sx={{ width: "100%", marginTop: "1rem" }}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
            >
              <FormControlLabel
                sx={radioLabel}
                value="Manual"
                control={<Radio />}
                label="Manual"
              />
              <FormControlLabel
                sx={radioLabel}
                value="Automatic"
                control={<Radio />}
                label="Automatic"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        {/*end Certificates */}
        <Grid item xs={12}>
          <Stack sx={backBtn}>
            <ButtonUse name="Back" onClick={handleBack} />
          </Stack>
          <ButtonUse name="Next" onClick={handleNext} />
        </Grid>
      </Grid>
    </Box>
  );
};
const backBtn = () => ({
  marginRight: "1rem",
  display: "inline-block",
  "& .css-e7e092-MuiButtonBase-root-MuiButton-root": {
    background: "#000",
    "&:hover": {
      background: "#fad237",
    },
  },
});
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
    fontSize: "1.25rem",
  },
});
const checkboxLabel = (theme: Theme) => ({
  width: "100%",
  "& .MuiFormControlLabel-label": {
    color: " #1E1E1C",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textAlign: "left",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.125rem",
    },
  },
  "& .MuiSvgIcon-root": { fontSize: "1.875rem" },
});
const radioLabel = (theme: Theme) => ({
  "& .MuiFormControlLabel-label ": {
    color: " #1E1E1C",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    marginRight: "3rem",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.125rem",
    },
  },
  "& .MuiSvgIcon-root": { fontSize: "1.875rem" },
});

const marginBottom = () => ({
  marginBottom: "1rem",
});
const fileuploadBtn = (theme: Theme) => ({
  width: "100%",
  border: "1px dashed #727272",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  borderRadius: "0.625rem;",
  textTransform: "capitalize",
  "&:hover": {
    borderColor: "#2599fb",
  },
  "& svg": {
    fontSize: "2.875rem!important",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.5rem",
  },
});

const uploadedFile = () => ({
  position: "absolute",
  top: 2,
  left: 8,
});
const uploadedFilename = () => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.125rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});
export default TeachingProfile;

const timezoneList = [
  {
    value: "Dateline Standard Time",
    abbr: "DST",
    offset: -12,
    isdst: false,
    text: "(UTC-12:00) International Date Line West",
    utc: ["Etc/GMT+12"],
  },
  {
    value: "UTC-11",
    abbr: "U",
    offset: -11,
    isdst: false,
    text: "(UTC-11:00) Coordinated Universal Time-11",
    utc: ["Etc/GMT+11", "Pacific/Midway", "Pacific/Niue", "Pacific/Pago_Pago"],
  },
  {
    value: "Hawaiian Standard Time",
    abbr: "HST",
    offset: -10,
    isdst: false,
    text: "(UTC-10:00) Hawaii",
    utc: [
      "Etc/GMT+10",
      "Pacific/Honolulu",
      "Pacific/Johnston",
      "Pacific/Rarotonga",
      "Pacific/Tahiti",
    ],
  },
  {
    value: "Alaskan Standard Time",
    abbr: "AKDT",
    offset: -8,
    isdst: true,
    text: "(UTC-09:00) Alaska",
    utc: [
      "America/Anchorage",
      "America/Juneau",
      "America/Nome",
      "America/Sitka",
      "America/Yakutat",
    ],
  },
  {
    value: "Pacific Standard Time (Mexico)",
    abbr: "PDT",
    offset: -7,
    isdst: true,
    text: "(UTC-08:00) Baja California",
    utc: ["America/Santa_Isabel"],
  },
  {
    value: "Pacific Daylight Time",
    abbr: "PDT",
    offset: -7,
    isdst: true,
    text: "(UTC-07:00) Pacific Daylight Time (US & Canada)",
    utc: ["America/Los_Angeles", "America/Tijuana", "America/Vancouver"],
  },
  {
    value: "Pacific Standard Time",
    abbr: "PST",
    offset: -8,
    isdst: false,
    text: "(UTC-08:00) Pacific Standard Time (US & Canada)",
    utc: [
      "America/Los_Angeles",
      "America/Tijuana",
      "America/Vancouver",
      "PST8PDT",
    ],
  },
  {
    value: "US Mountain Standard Time",
    abbr: "UMST",
    offset: -7,
    isdst: false,
    text: "(UTC-07:00) Arizona",
    utc: [
      "America/Creston",
      "America/Dawson",
      "America/Dawson_Creek",
      "America/Hermosillo",
      "America/Phoenix",
      "America/Whitehorse",
      "Etc/GMT+7",
    ],
  },
  {
    value: "Mountain Standard Time (Mexico)",
    abbr: "MDT",
    offset: -6,
    isdst: true,
    text: "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
    utc: ["America/Chihuahua", "America/Mazatlan"],
  },
  {
    value: "Mountain Standard Time",
    abbr: "MDT",
    offset: -6,
    isdst: true,
    text: "(UTC-07:00) Mountain Time (US & Canada)",
    utc: [
      "America/Boise",
      "America/Cambridge_Bay",
      "America/Denver",
      "America/Edmonton",
      "America/Inuvik",
      "America/Ojinaga",
      "America/Yellowknife",
      "MST7MDT",
    ],
  },
  {
    value: "Central America Standard Time",
    abbr: "CAST",
    offset: -6,
    isdst: false,
    text: "(UTC-06:00) Central America",
    utc: [
      "America/Belize",
      "America/Costa_Rica",
      "America/El_Salvador",
      "America/Guatemala",
      "America/Managua",
      "America/Tegucigalpa",
      "Etc/GMT+6",
      "Pacific/Galapagos",
    ],
  },
  {
    value: "Central Standard Time",
    abbr: "CDT",
    offset: -5,
    isdst: true,
    text: "(UTC-06:00) Central Time (US & Canada)",
    utc: [
      "America/Chicago",
      "America/Indiana/Knox",
      "America/Indiana/Tell_City",
      "America/Matamoros",
      "America/Menominee",
      "America/North_Dakota/Beulah",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
      "America/Rainy_River",
      "America/Rankin_Inlet",
      "America/Resolute",
      "America/Winnipeg",
      "CST6CDT",
    ],
  },
  {
    value: "Central Standard Time (Mexico)",
    abbr: "CDT",
    offset: -5,
    isdst: true,
    text: "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
    utc: [
      "America/Bahia_Banderas",
      "America/Cancun",
      "America/Merida",
      "America/Mexico_City",
      "America/Monterrey",
    ],
  },
  {
    value: "Canada Central Standard Time",
    abbr: "CCST",
    offset: -6,
    isdst: false,
    text: "(UTC-06:00) Saskatchewan",
    utc: ["America/Regina", "America/Swift_Current"],
  },
  {
    value: "SA Pacific Standard Time",
    abbr: "SPST",
    offset: -5,
    isdst: false,
    text: "(UTC-05:00) Bogota, Lima, Quito",
    utc: [
      "America/Bogota",
      "America/Cayman",
      "America/Coral_Harbour",
      "America/Eirunepe",
      "America/Guayaquil",
      "America/Jamaica",
      "America/Lima",
      "America/Panama",
      "America/Rio_Branco",
      "Etc/GMT+5",
    ],
  },
  {
    value: "Eastern Standard Time",
    abbr: "EST",
    offset: -5,
    isdst: false,
    text: "(UTC-05:00) Eastern Time (US & Canada)",
    utc: [
      "America/Detroit",
      "America/Havana",
      "America/Indiana/Petersburg",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Iqaluit",
      "America/Kentucky/Monticello",
      "America/Louisville",
      "America/Montreal",
      "America/Nassau",
      "America/New_York",
      "America/Nipigon",
      "America/Pangnirtung",
      "America/Port-au-Prince",
      "America/Thunder_Bay",
      "America/Toronto",
    ],
  },
  {
    value: "Eastern Daylight Time",
    abbr: "EDT",
    offset: -4,
    isdst: true,
    text: "(UTC-04:00) Eastern Daylight Time (US & Canada)",
    utc: [
      "America/Detroit",
      "America/Havana",
      "America/Indiana/Petersburg",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Iqaluit",
      "America/Kentucky/Monticello",
      "America/Louisville",
      "America/Montreal",
      "America/Nassau",
      "America/New_York",
      "America/Nipigon",
      "America/Pangnirtung",
      "America/Port-au-Prince",
      "America/Thunder_Bay",
      "America/Toronto",
    ],
  },
  {
    value: "US Eastern Standard Time",
    abbr: "UEDT",
    offset: -5,
    isdst: false,
    text: "(UTC-05:00) Indiana (East)",
    utc: [
      "America/Indiana/Marengo",
      "America/Indiana/Vevay",
      "America/Indianapolis",
    ],
  },
  {
    value: "Venezuela Standard Time",
    abbr: "VST",
    offset: -4.5,
    isdst: false,
    text: "(UTC-04:30) Caracas",
    utc: ["America/Caracas"],
  },
  {
    value: "Paraguay Standard Time",
    abbr: "PYT",
    offset: -4,
    isdst: false,
    text: "(UTC-04:00) Asuncion",
    utc: ["America/Asuncion"],
  },
  {
    value: "Atlantic Standard Time",
    abbr: "ADT",
    offset: -3,
    isdst: true,
    text: "(UTC-04:00) Atlantic Time (Canada)",
    utc: [
      "America/Glace_Bay",
      "America/Goose_Bay",
      "America/Halifax",
      "America/Moncton",
      "America/Thule",
      "Atlantic/Bermuda",
    ],
  },
  {
    value: "Central Brazilian Standard Time",
    abbr: "CBST",
    offset: -4,
    isdst: false,
    text: "(UTC-04:00) Cuiaba",
    utc: ["America/Campo_Grande", "America/Cuiaba"],
  },
  {
    value: "SA Western Standard Time",
    abbr: "SWST",
    offset: -4,
    isdst: false,
    text: "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
    utc: [
      "America/Anguilla",
      "America/Antigua",
      "America/Aruba",
      "America/Barbados",
      "America/Blanc-Sablon",
      "America/Boa_Vista",
      "America/Curacao",
      "America/Dominica",
      "America/Grand_Turk",
      "America/Grenada",
      "America/Guadeloupe",
      "America/Guyana",
      "America/Kralendijk",
      "America/La_Paz",
      "America/Lower_Princes",
      "America/Manaus",
      "America/Marigot",
      "America/Martinique",
      "America/Montserrat",
      "America/Port_of_Spain",
      "America/Porto_Velho",
      "America/Puerto_Rico",
      "America/Santo_Domingo",
      "America/St_Barthelemy",
      "America/St_Kitts",
      "America/St_Lucia",
      "America/St_Thomas",
      "America/St_Vincent",
      "America/Tortola",
      "Etc/GMT+4",
    ],
  },
  {
    value: "Pacific SA Standard Time",
    abbr: "PSST",
    offset: -4,
    isdst: false,
    text: "(UTC-04:00) Santiago",
    utc: ["America/Santiago", "Antarctica/Palmer"],
  },
  {
    value: "Newfoundland Standard Time",
    abbr: "NDT",
    offset: -2.5,
    isdst: true,
    text: "(UTC-03:30) Newfoundland",
    utc: ["America/St_Johns"],
  },
  {
    value: "E. South America Standard Time",
    abbr: "ESAST",
    offset: -3,
    isdst: false,
    text: "(UTC-03:00) Brasilia",
    utc: ["America/Sao_Paulo"],
  },
  {
    value: "Argentina Standard Time",
    abbr: "AST",
    offset: -3,
    isdst: false,
    text: "(UTC-03:00) Buenos Aires",
    utc: [
      "America/Argentina/Buenos_Aires",
      "America/Argentina/Catamarca",
      "America/Argentina/Cordoba",
      "America/Argentina/Jujuy",
      "America/Argentina/La_Rioja",
      "America/Argentina/Mendoza",
      "America/Argentina/Rio_Gallegos",
      "America/Argentina/Salta",
      "America/Argentina/San_Juan",
      "America/Argentina/San_Luis",
      "America/Argentina/Tucuman",
      "America/Argentina/Ushuaia",
      "America/Buenos_Aires",
      "America/Catamarca",
      "America/Cordoba",
      "America/Jujuy",
      "America/Mendoza",
    ],
  },
  {
    value: "SA Eastern Standard Time",
    abbr: "SEST",
    offset: -3,
    isdst: false,
    text: "(UTC-03:00) Cayenne, Fortaleza",
    utc: [
      "America/Araguaina",
      "America/Belem",
      "America/Cayenne",
      "America/Fortaleza",
      "America/Maceio",
      "America/Paramaribo",
      "America/Recife",
      "America/Santarem",
      "Antarctica/Rothera",
      "Atlantic/Stanley",
      "Etc/GMT+3",
    ],
  },
  {
    value: "Greenland Standard Time",
    abbr: "GDT",
    offset: -3,
    isdst: true,
    text: "(UTC-03:00) Greenland",
    utc: ["America/Godthab"],
  },
  {
    value: "Montevideo Standard Time",
    abbr: "MST",
    offset: -3,
    isdst: false,
    text: "(UTC-03:00) Montevideo",
    utc: ["America/Montevideo"],
  },
  {
    value: "Bahia Standard Time",
    abbr: "BST",
    offset: -3,
    isdst: false,
    text: "(UTC-03:00) Salvador",
    utc: ["America/Bahia"],
  },
  {
    value: "UTC-02",
    abbr: "U",
    offset: -2,
    isdst: false,
    text: "(UTC-02:00) Coordinated Universal Time-02",
    utc: ["America/Noronha", "Atlantic/South_Georgia", "Etc/GMT+2"],
  },
  {
    value: "Mid-Atlantic Standard Time",
    abbr: "MDT",
    offset: -1,
    isdst: true,
    text: "(UTC-02:00) Mid-Atlantic - Old",
    utc: [],
  },
  {
    value: "Azores Standard Time",
    abbr: "ADT",
    offset: 0,
    isdst: true,
    text: "(UTC-01:00) Azores",
    utc: ["America/Scoresbysund", "Atlantic/Azores"],
  },
  {
    value: "Cape Verde Standard Time",
    abbr: "CVST",
    offset: -1,
    isdst: false,
    text: "(UTC-01:00) Cape Verde Is.",
    utc: ["Atlantic/Cape_Verde", "Etc/GMT+1"],
  },
  {
    value: "Morocco Standard Time",
    abbr: "MDT",
    offset: 1,
    isdst: true,
    text: "(UTC) Casablanca",
    utc: ["Africa/Casablanca", "Africa/El_Aaiun"],
  },
  {
    value: "UTC",
    abbr: "UTC",
    offset: 0,
    isdst: false,
    text: "(UTC) Coordinated Universal Time",
    utc: ["America/Danmarkshavn", "Etc/GMT"],
  },
  {
    value: "GMT Standard Time",
    abbr: "GMT",
    offset: 0,
    isdst: false,
    text: "(UTC) Edinburgh, London",
    utc: [
      "Europe/Isle_of_Man",
      "Europe/Guernsey",
      "Europe/Jersey",
      "Europe/London",
    ],
  },
  {
    value: "British Summer Time",
    abbr: "BST",
    offset: 1,
    isdst: true,
    text: "(UTC+01:00) Edinburgh, London",
    utc: [
      "Europe/Isle_of_Man",
      "Europe/Guernsey",
      "Europe/Jersey",
      "Europe/London",
    ],
  },
  {
    value: "GMT Standard Time",
    abbr: "GDT",
    offset: 1,
    isdst: true,
    text: "(UTC) Dublin, Lisbon",
    utc: [
      "Atlantic/Canary",
      "Atlantic/Faeroe",
      "Atlantic/Madeira",
      "Europe/Dublin",
      "Europe/Lisbon",
    ],
  },
  {
    value: "Greenwich Standard Time",
    abbr: "GST",
    offset: 0,
    isdst: false,
    text: "(UTC) Monrovia, Reykjavik",
    utc: [
      "Africa/Abidjan",
      "Africa/Accra",
      "Africa/Bamako",
      "Africa/Banjul",
      "Africa/Bissau",
      "Africa/Conakry",
      "Africa/Dakar",
      "Africa/Freetown",
      "Africa/Lome",
      "Africa/Monrovia",
      "Africa/Nouakchott",
      "Africa/Ouagadougou",
      "Africa/Sao_Tome",
      "Atlantic/Reykjavik",
      "Atlantic/St_Helena",
    ],
  },
  {
    value: "W. Europe Standard Time",
    abbr: "WEDT",
    offset: 2,
    isdst: true,
    text: "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
    utc: [
      "Arctic/Longyearbyen",
      "Europe/Amsterdam",
      "Europe/Andorra",
      "Europe/Berlin",
      "Europe/Busingen",
      "Europe/Gibraltar",
      "Europe/Luxembourg",
      "Europe/Malta",
      "Europe/Monaco",
      "Europe/Oslo",
      "Europe/Rome",
      "Europe/San_Marino",
      "Europe/Stockholm",
      "Europe/Vaduz",
      "Europe/Vatican",
      "Europe/Vienna",
      "Europe/Zurich",
    ],
  },
  {
    value: "Central Europe Standard Time",
    abbr: "CEDT",
    offset: 2,
    isdst: true,
    text: "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
    utc: [
      "Europe/Belgrade",
      "Europe/Bratislava",
      "Europe/Budapest",
      "Europe/Ljubljana",
      "Europe/Podgorica",
      "Europe/Prague",
      "Europe/Tirane",
    ],
  },
  {
    value: "Romance Standard Time",
    abbr: "RDT",
    offset: 2,
    isdst: true,
    text: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
    utc: [
      "Africa/Ceuta",
      "Europe/Brussels",
      "Europe/Copenhagen",
      "Europe/Madrid",
      "Europe/Paris",
    ],
  },
  {
    value: "Central European Standard Time",
    abbr: "CEDT",
    offset: 2,
    isdst: true,
    text: "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
    utc: ["Europe/Sarajevo", "Europe/Skopje", "Europe/Warsaw", "Europe/Zagreb"],
  },
  {
    value: "W. Central Africa Standard Time",
    abbr: "WCAST",
    offset: 1,
    isdst: false,
    text: "(UTC+01:00) West Central Africa",
    utc: [
      "Africa/Algiers",
      "Africa/Bangui",
      "Africa/Brazzaville",
      "Africa/Douala",
      "Africa/Kinshasa",
      "Africa/Lagos",
      "Africa/Libreville",
      "Africa/Luanda",
      "Africa/Malabo",
      "Africa/Ndjamena",
      "Africa/Niamey",
      "Africa/Porto-Novo",
      "Africa/Tunis",
      "Etc/GMT-1",
    ],
  },
  {
    value: "Namibia Standard Time",
    abbr: "NST",
    offset: 1,
    isdst: false,
    text: "(UTC+01:00) Windhoek",
    utc: ["Africa/Windhoek"],
  },
  {
    value: "GTB Standard Time",
    abbr: "GDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) Athens, Bucharest",
    utc: [
      "Asia/Nicosia",
      "Europe/Athens",
      "Europe/Bucharest",
      "Europe/Chisinau",
    ],
  },
  {
    value: "Middle East Standard Time",
    abbr: "MEDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) Beirut",
    utc: ["Asia/Beirut"],
  },
  {
    value: "Egypt Standard Time",
    abbr: "EST",
    offset: 2,
    isdst: false,
    text: "(UTC+02:00) Cairo",
    utc: ["Africa/Cairo"],
  },
  {
    value: "Syria Standard Time",
    abbr: "SDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) Damascus",
    utc: ["Asia/Damascus"],
  },
  {
    value: "E. Europe Standard Time",
    abbr: "EEDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) E. Europe",
    utc: [
      "Asia/Nicosia",
      "Europe/Athens",
      "Europe/Bucharest",
      "Europe/Chisinau",
      "Europe/Helsinki",
      "Europe/Kyiv",
      "Europe/Mariehamn",
      "Europe/Nicosia",
      "Europe/Riga",
      "Europe/Sofia",
      "Europe/Tallinn",
      "Europe/Uzhgorod",
      "Europe/Vilnius",
      "Europe/Zaporozhye",
    ],
  },
  {
    value: "South Africa Standard Time",
    abbr: "SAST",
    offset: 2,
    isdst: false,
    text: "(UTC+02:00) Harare, Pretoria",
    utc: [
      "Africa/Blantyre",
      "Africa/Bujumbura",
      "Africa/Gaborone",
      "Africa/Harare",
      "Africa/Johannesburg",
      "Africa/Kigali",
      "Africa/Lubumbashi",
      "Africa/Lusaka",
      "Africa/Maputo",
      "Africa/Maseru",
      "Africa/Mbabane",
      "Etc/GMT-2",
    ],
  },
  {
    value: "FLE Standard Time",
    abbr: "FDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
    utc: [
      "Europe/Helsinki",
      "Europe/Kyiv",
      "Europe/Mariehamn",
      "Europe/Riga",
      "Europe/Sofia",
      "Europe/Tallinn",
      "Europe/Uzhgorod",
      "Europe/Vilnius",
      "Europe/Zaporozhye",
    ],
  },
  {
    value: "Turkey Standard Time",
    abbr: "TDT",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Istanbul",
    utc: ["Europe/Istanbul"],
  },
  {
    value: "Israel Standard Time",
    abbr: "JDT",
    offset: 3,
    isdst: true,
    text: "(UTC+02:00) Jerusalem",
    utc: ["Asia/Jerusalem"],
  },
  {
    value: "Libya Standard Time",
    abbr: "LST",
    offset: 2,
    isdst: false,
    text: "(UTC+02:00) Tripoli",
    utc: ["Africa/Tripoli"],
  },
  {
    value: "Jordan Standard Time",
    abbr: "JST",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Amman",
    utc: ["Asia/Amman"],
  },
  {
    value: "Arabic Standard Time",
    abbr: "AST",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Baghdad",
    utc: ["Asia/Baghdad"],
  },
  {
    value: "Kaliningrad Standard Time",
    abbr: "KST",
    offset: 3,
    isdst: false,
    text: "(UTC+02:00) Kaliningrad",
    utc: ["Europe/Kaliningrad"],
  },
  {
    value: "Arab Standard Time",
    abbr: "AST",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Kuwait, Riyadh",
    utc: [
      "Asia/Aden",
      "Asia/Bahrain",
      "Asia/Kuwait",
      "Asia/Qatar",
      "Asia/Riyadh",
    ],
  },
  {
    value: "E. Africa Standard Time",
    abbr: "EAST",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Nairobi",
    utc: [
      "Africa/Addis_Ababa",
      "Africa/Asmera",
      "Africa/Dar_es_Salaam",
      "Africa/Djibouti",
      "Africa/Juba",
      "Africa/Kampala",
      "Africa/Khartoum",
      "Africa/Mogadishu",
      "Africa/Nairobi",
      "Antarctica/Syowa",
      "Etc/GMT-3",
      "Indian/Antananarivo",
      "Indian/Comoro",
      "Indian/Mayotte",
    ],
  },
  {
    value: "Moscow Standard Time",
    abbr: "MSK",
    offset: 3,
    isdst: false,
    text: "(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk",
    utc: [
      "Europe/Kirov",
      "Europe/Moscow",
      "Europe/Simferopol",
      "Europe/Volgograd",
      "Europe/Minsk",
    ],
  },
  {
    value: "Samara Time",
    abbr: "SAMT",
    offset: 4,
    isdst: false,
    text: "(UTC+04:00) Samara, Ulyanovsk, Saratov",
    utc: ["Europe/Astrakhan", "Europe/Samara", "Europe/Ulyanovsk"],
  },
  {
    value: "Iran Standard Time",
    abbr: "IDT",
    offset: 4.5,
    isdst: true,
    text: "(UTC+03:30) Tehran",
    utc: ["Asia/Tehran"],
  },
  {
    value: "Arabian Standard Time",
    abbr: "AST",
    offset: 4,
    isdst: false,
    text: "(UTC+04:00) Abu Dhabi, Muscat",
    utc: ["Asia/Dubai", "Asia/Muscat", "Etc/GMT-4"],
  },
  {
    value: "Azerbaijan Standard Time",
    abbr: "ADT",
    offset: 5,
    isdst: true,
    text: "(UTC+04:00) Baku",
    utc: ["Asia/Baku"],
  },
  {
    value: "Mauritius Standard Time",
    abbr: "MST",
    offset: 4,
    isdst: false,
    text: "(UTC+04:00) Port Louis",
    utc: ["Indian/Mahe", "Indian/Mauritius", "Indian/Reunion"],
  },
  {
    value: "Georgian Standard Time",
    abbr: "GET",
    offset: 4,
    isdst: false,
    text: "(UTC+04:00) Tbilisi",
    utc: ["Asia/Tbilisi"],
  },
  {
    value: "Caucasus Standard Time",
    abbr: "CST",
    offset: 4,
    isdst: false,
    text: "(UTC+04:00) Yerevan",
    utc: ["Asia/Yerevan"],
  },
  {
    value: "Afghanistan Standard Time",
    abbr: "AST",
    offset: 4.5,
    isdst: false,
    text: "(UTC+04:30) Kabul",
    utc: ["Asia/Kabul"],
  },
  {
    value: "West Asia Standard Time",
    abbr: "WAST",
    offset: 5,
    isdst: false,
    text: "(UTC+05:00) Ashgabat, Tashkent",
    utc: [
      "Antarctica/Mawson",
      "Asia/Aqtau",
      "Asia/Aqtobe",
      "Asia/Ashgabat",
      "Asia/Dushanbe",
      "Asia/Oral",
      "Asia/Samarkand",
      "Asia/Tashkent",
      "Etc/GMT-5",
      "Indian/Kerguelen",
      "Indian/Maldives",
    ],
  },
  {
    value: "Yekaterinburg Time",
    abbr: "YEKT",
    offset: 5,
    isdst: false,
    text: "(UTC+05:00) Yekaterinburg",
    utc: ["Asia/Yekaterinburg"],
  },
  {
    value: "Pakistan Standard Time",
    abbr: "PKT",
    offset: 5,
    isdst: false,
    text: "(UTC+05:00) Islamabad, Karachi",
    utc: ["Asia/Karachi"],
  },
  {
    value: "India Standard Time",
    abbr: "IST",
    offset: 5.5,
    isdst: false,
    text: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
    utc: ["Asia/Kolkata", "Asia/Calcutta"],
  },
  {
    value: "Sri Lanka Standard Time",
    abbr: "SLST",
    offset: 5.5,
    isdst: false,
    text: "(UTC+05:30) Sri Jayawardenepura",
    utc: ["Asia/Colombo"],
  },
  {
    value: "Nepal Standard Time",
    abbr: "NST",
    offset: 5.75,
    isdst: false,
    text: "(UTC+05:45) Kathmandu",
    utc: ["Asia/Kathmandu"],
  },
  {
    value: "Central Asia Standard Time",
    abbr: "CAST",
    offset: 6,
    isdst: false,
    text: "(UTC+06:00) Nur-Sultan (Astana)",
    utc: [
      "Antarctica/Vostok",
      "Asia/Almaty",
      "Asia/Bishkek",
      "Asia/Qyzylorda",
      "Asia/Urumqi",
      "Etc/GMT-6",
      "Indian/Chagos",
    ],
  },
  {
    value: "Bangladesh Standard Time",
    abbr: "BST",
    offset: 6,
    isdst: false,
    text: "(UTC+06:00) Dhaka",
    utc: ["Asia/Dhaka", "Asia/Thimphu"],
  },
  {
    value: "Myanmar Standard Time",
    abbr: "MST",
    offset: 6.5,
    isdst: false,
    text: "(UTC+06:30) Yangon (Rangoon)",
    utc: ["Asia/Rangoon", "Indian/Cocos"],
  },
  {
    value: "SE Asia Standard Time",
    abbr: "SAST",
    offset: 7,
    isdst: false,
    text: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
    utc: [
      "Antarctica/Davis",
      "Asia/Bangkok",
      "Asia/Hovd",
      "Asia/Jakarta",
      "Asia/Phnom_Penh",
      "Asia/Pontianak",
      "Asia/Saigon",
      "Asia/Vientiane",
      "Etc/GMT-7",
      "Indian/Christmas",
    ],
  },
  {
    value: "N. Central Asia Standard Time",
    abbr: "NCAST",
    offset: 7,
    isdst: false,
    text: "(UTC+07:00) Novosibirsk",
    utc: ["Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk"],
  },
  {
    value: "China Standard Time",
    abbr: "CST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
    utc: ["Asia/Hong_Kong", "Asia/Macau", "Asia/Shanghai"],
  },
  {
    value: "North Asia Standard Time",
    abbr: "NAST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Krasnoyarsk",
    utc: ["Asia/Krasnoyarsk"],
  },
  {
    value: "Singapore Standard Time",
    abbr: "MPST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Kuala Lumpur, Singapore",
    utc: [
      "Asia/Brunei",
      "Asia/Kuala_Lumpur",
      "Asia/Kuching",
      "Asia/Makassar",
      "Asia/Manila",
      "Asia/Singapore",
      "Etc/GMT-8",
    ],
  },
  {
    value: "W. Australia Standard Time",
    abbr: "WAST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Perth",
    utc: ["Antarctica/Casey", "Australia/Perth"],
  },
  {
    value: "Taipei Standard Time",
    abbr: "TST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Taipei",
    utc: ["Asia/Taipei"],
  },
  {
    value: "Ulaanbaatar Standard Time",
    abbr: "UST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Ulaanbaatar",
    utc: ["Asia/Choibalsan", "Asia/Ulaanbaatar"],
  },
  {
    value: "North Asia East Standard Time",
    abbr: "NAEST",
    offset: 8,
    isdst: false,
    text: "(UTC+08:00) Irkutsk",
    utc: ["Asia/Irkutsk"],
  },
  {
    value: "Japan Standard Time",
    abbr: "JST",
    offset: 9,
    isdst: false,
    text: "(UTC+09:00) Osaka, Sapporo, Tokyo",
    utc: [
      "Asia/Dili",
      "Asia/Jayapura",
      "Asia/Tokyo",
      "Etc/GMT-9",
      "Pacific/Palau",
    ],
  },
  {
    value: "Korea Standard Time",
    abbr: "KST",
    offset: 9,
    isdst: false,
    text: "(UTC+09:00) Seoul",
    utc: ["Asia/Pyongyang", "Asia/Seoul"],
  },
  {
    value: "Cen. Australia Standard Time",
    abbr: "CAST",
    offset: 9.5,
    isdst: false,
    text: "(UTC+09:30) Adelaide",
    utc: ["Australia/Adelaide", "Australia/Broken_Hill"],
  },
  {
    value: "AUS Central Standard Time",
    abbr: "ACST",
    offset: 9.5,
    isdst: false,
    text: "(UTC+09:30) Darwin",
    utc: ["Australia/Darwin"],
  },
  {
    value: "E. Australia Standard Time",
    abbr: "EAST",
    offset: 10,
    isdst: false,
    text: "(UTC+10:00) Brisbane",
    utc: ["Australia/Brisbane", "Australia/Lindeman"],
  },
  {
    value: "AUS Eastern Standard Time",
    abbr: "AEST",
    offset: 10,
    isdst: false,
    text: "(UTC+10:00) Canberra, Melbourne, Sydney",
    utc: ["Australia/Melbourne", "Australia/Sydney"],
  },
  {
    value: "West Pacific Standard Time",
    abbr: "WPST",
    offset: 10,
    isdst: false,
    text: "(UTC+10:00) Guam, Port Moresby",
    utc: [
      "Antarctica/DumontDUrville",
      "Etc/GMT-10",
      "Pacific/Guam",
      "Pacific/Port_Moresby",
      "Pacific/Saipan",
      "Pacific/Truk",
    ],
  },
  {
    value: "Tasmania Standard Time",
    abbr: "TST",
    offset: 10,
    isdst: false,
    text: "(UTC+10:00) Hobart",
    utc: ["Australia/Currie", "Australia/Hobart"],
  },
  {
    value: "Yakutsk Standard Time",
    abbr: "YST",
    offset: 9,
    isdst: false,
    text: "(UTC+09:00) Yakutsk",
    utc: ["Asia/Chita", "Asia/Khandyga", "Asia/Yakutsk"],
  },
  {
    value: "Central Pacific Standard Time",
    abbr: "CPST",
    offset: 11,
    isdst: false,
    text: "(UTC+11:00) Solomon Is., New Caledonia",
    utc: [
      "Antarctica/Macquarie",
      "Etc/GMT-11",
      "Pacific/Efate",
      "Pacific/Guadalcanal",
      "Pacific/Kosrae",
      "Pacific/Noumea",
      "Pacific/Ponape",
    ],
  },
  {
    value: "Vladivostok Standard Time",
    abbr: "VST",
    offset: 11,
    isdst: false,
    text: "(UTC+11:00) Vladivostok",
    utc: ["Asia/Sakhalin", "Asia/Ust-Nera", "Asia/Vladivostok"],
  },
  {
    value: "New Zealand Standard Time",
    abbr: "NZST",
    offset: 12,
    isdst: false,
    text: "(UTC+12:00) Auckland, Wellington",
    utc: ["Antarctica/McMurdo", "Pacific/Auckland"],
  },
  {
    value: "UTC+12",
    abbr: "U",
    offset: 12,
    isdst: false,
    text: "(UTC+12:00) Coordinated Universal Time+12",
    utc: [
      "Etc/GMT-12",
      "Pacific/Funafuti",
      "Pacific/Kwajalein",
      "Pacific/Majuro",
      "Pacific/Nauru",
      "Pacific/Tarawa",
      "Pacific/Wake",
      "Pacific/Wallis",
    ],
  },
  {
    value: "Fiji Standard Time",
    abbr: "FST",
    offset: 12,
    isdst: false,
    text: "(UTC+12:00) Fiji",
    utc: ["Pacific/Fiji"],
  },
  {
    value: "Magadan Standard Time",
    abbr: "MST",
    offset: 12,
    isdst: false,
    text: "(UTC+12:00) Magadan",
    utc: [
      "Asia/Anadyr",
      "Asia/Kamchatka",
      "Asia/Magadan",
      "Asia/Srednekolymsk",
    ],
  },
  {
    value: "Kamchatka Standard Time",
    abbr: "KDT",
    offset: 13,
    isdst: true,
    text: "(UTC+12:00) Petropavlovsk-Kamchatsky - Old",
    utc: ["Asia/Kamchatka"],
  },
  {
    value: "Tonga Standard Time",
    abbr: "TST",
    offset: 13,
    isdst: false,
    text: "(UTC+13:00) Nuku'alofa",
    utc: [
      "Etc/GMT-13",
      "Pacific/Enderbury",
      "Pacific/Fakaofo",
      "Pacific/Tongatapu",
    ],
  },
  {
    value: "Samoa Standard Time",
    abbr: "SST",
    offset: 13,
    isdst: false,
    text: "(UTC+13:00) Samoa",
    utc: ["Pacific/Apia"],
  },
];
