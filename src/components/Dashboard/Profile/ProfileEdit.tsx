"use client";
import { useState } from "react";
import { Dayjs } from "dayjs";
import {
  Box,
  Typography,
  Grid,
  Stack,
  TextField,
  Theme,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Image from "next/image";

import ButtonUse from "@/components/ButtonUse";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import calendarIcon from "../../../../public/images/calicon.png";
import profilImg from "../../../../public/images/laura1.jpg";
import { styles } from "@/app/styles";

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
const ProfileEdit = () => {
  const [dateofbirth, setDateofbirth] = useState<Dayjs | null>(null);
  const [country, setCountry] = useState("");

  const handleCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };
  return (
    <Box sx={formWarp}>
      <Typography sx={pageTitle}>
        <Link href="#">
          <KeyboardBackspaceIcon sx={{ height: 32, width: 32 }} /> Edit Profile
        </Link>
      </Typography>
      <Grid container spacing={2} sx={sectionWrap}>
        <Grid item xs={9}>
          <Stack sx={profileWrap}>
            <Stack sx={avtWrap}>
              <Image src={profilImg} alt="profile image" />
              <Button variant="outlined" component="label" sx={fileUploadbtn}>
                <input type="file" hidden />
                <CameraAltOutlinedIcon sx={{ width: 40, height: 40 }} />
              </Button>
            </Stack>
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
          <ButtonUse name="Save Changes" />
        </Grid>
      </Grid>
      {/* end profile section */}

      <Grid container spacing={{ md: 2, xl: 4 }} sx={sectionWrap}>
        <Grid item xs={6}>
          <TextField
            sx={styles.inputField}
            id="First-Name"
            label="First Name"
            type="text"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={styles.inputField}
            id="Last-Name"
            label="Last Name"
            type="text"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Birth"
              value={dateofbirth}
              slots={{ openPickerIcon: CustomCalendarIcon }}
              onChange={(newValue) => {
                setDateofbirth(newValue);
              }}
              sx={[styles.inputField, { width: "100%" }]}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6}>
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
              <MenuItem value="" sx={dropdownitem}>
                Country
              </MenuItem>
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
        <Grid item xs={6}>
          <TextField
            id="State"
            sx={styles.inputField}
            label="State"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="Time_Zone"
            sx={styles.inputField}
            label="Time Zone"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="Language_Speak"
            sx={styles.inputField}
            label="Language Speak"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="Lang_to_Learn"
            sx={styles.inputField}
            label="Language Want to Learn"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const formWarp = (theme: Theme) => ({
  background: "#fff",
  padding: "1.875rem",
  paddingBottom: "5rem",
  borderRadius: "1.875rem",
  marginBottom: "3rem",
  "& button": {
    height: "4.875rem",
    width: "100%",
    fontSize: "1.625rem",
    fontWeight: 700,
    lineHeight: "normal",
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
});
const avtWrap = (theme: Theme) => ({
  flexDirection: "row",
  alignItems: "center",
  position: "relative",
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
    fontSize: "1.5rem",
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
    fontSize: "1.125rem",
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
    fontSize: "1.375rem",
    marginTop: "0.5rem",
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
const fileUploadbtn = () => ({
  position: "absolute",
  width: "calc(100% - 0.938rem)",
  height: "calc(100% - 0.938rem)",
  borderRadius: "50%",
  background: "rgb(37 153 251 / 60%)",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#fff",
});
export default ProfileEdit;
