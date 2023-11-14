import { Box, Grid, Typography, Stack, Theme } from "@mui/material";
import Image from "next/image";
import ButtonUse from "../ButtonUse";
import knowBg from "../../../public/images/know.png";
import { styles } from "../../app/styles";
import Link from "next/link";

const AboutLanguage = () => {
  return (
    <Box sx={aboutLangWrp}>
      <Grid container sx={styles.container} spacing={3}>
        <Grid item xs={6} sm={6}>
          <Stack sx={knowImgWrp}>
            <Image src={knowBg} fill sizes="100vw" alt="Image" />
          </Stack>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Stack sx={knowContent}>
            <Typography variant="h6" sx={textSmall}>
              About Us
            </Typography>
            <Typography variant="h2" sx={textLarge}>
              Know About Spaceship Language
            </Typography>
            <Typography variant="h5" sx={textSm}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </Typography>

            <ButtonUse name="Know More" />
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={[styles.container, mtBetween]} spacing={3}>
        <Grid item xs={6} sm={6}>
          <Stack sx={knowContent}>
            <Typography variant="h6" sx={textSmall}>
              Instructor
            </Typography>
            <Typography variant="h2" sx={textLarge}>
              Build Your Career & Upgrade Your Life
            </Typography>
            <Typography variant="h5" sx={textSm}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </Typography>

            <Link href="become-an-instructor">
              <ButtonUse name="Become an Instructor" />
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Stack sx={knowImgWrp}>
            <Image src={knowBg} fill sizes="100vw" alt="image" />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

// styles

const aboutLangWrp = (theme: Theme) => ({
  paddingTop: "6.25rem",
  paddingBottom: "7.188rem",
  [theme.breakpoints.down("xl")]: {
    paddingTop: "4.5rem",
    paddingBottom: "5rem",
  },
});
const knowImgWrp = () => ({
  position: "relative",
  width: "100%",
  height: "100%",
});
const knowContent = (theme: Theme) => ({
  alignItems: "flex-start",
  "& button": {
    fontSize: "1.625rem",
    height: "4.875rem",
    fontWeight: 700,
    minWidth: "18.125rem",
    marginTop: "0.5rem",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.375rem",
      height: "3.75rem",
    },
  },
});
const textSmall = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "2.1875rem",
  fontWeight: 500,
  lineHeight: "normal",
  marginBottom: "1.25rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.75rem",
  },
});
const textLarge = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "3.75rem",
  fontWeight: 700,
  lineHeight: "4.375rem",
  marginBottom: "1.375rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.5rem",
    lineHeight: "3rem",
  },
});
const textSm = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontWeight: 400,
  lineHeight: "2.25rem",
  marginBottom: "0.75rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.25rem",
    lineHeight: "2rem",
  },
});
const mtBetween = () => ({
  marginTop: "115px",
});
export default AboutLanguage;
