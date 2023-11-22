import {
  Box,
  Grid,
  Card,
  CardContent,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Button,
  Theme,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import SouthIcon from "@mui/icons-material/South";
import userImage from "../../../public/images/feat1.jpg";
import calGreen from "../../../public/images/dt.png";
const TeacherReviews = () => {
  const [language, setLanguage] = React.useState<string | null>("All");

  const handleLanguage = (
    event: React.MouseEvent<HTMLElement>,
    newLang: string | null
  ) => {
    setLanguage(newLang);
  };
  return (
    <Box sx={LessonTypeWrap}>
      <Stack sx={lessonTypehead}>
        <Typography sx={title}>1,201 Reviews</Typography>
        <ToggleButtonGroup
          value={language}
          exclusive
          onChange={handleLanguage}
          aria-label="text alignment"
        >
          <ToggleButton sx={langToggle} value="All" aria-label="all">
            All
          </ToggleButton>
          <ToggleButton sx={langToggle} value="English" aria-label="English">
            English
          </ToggleButton>
          <ToggleButton sx={langToggle} value="Spanish" aria-label="Spanish">
            Spanish
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={reviewCard} elevation={0}>
              <Stack sx={usrImage}>
                <Image src={userImage} alt="#" />
              </Stack>
              <CardContent sx={contentWrap}>
                <Stack sx={dateWrap}>
                  <Image
                    src={calGreen}
                    alt="#"
                    style={{ width: "1.3125rem", height: "1.3125rem" }}
                  />
                  <Typography variant="h6" component="p" sx={courseSubTitle}>
                    03-08-2023
                  </Typography>
                </Stack>

                <Typography variant="h3" sx={reviewTitle}>
                  English Informal Tutoring
                </Typography>
                <Stack sx={ratingTxt}>
                  <StarIcon sx={{ marginRight: "0.375rem" }} />
                  5.0
                </Stack>
              </CardContent>
              <Typography variant="h5" component="p" sx={reviewPara}>
                I had a delightful conversation with Walter again. I felt
                exceptionally at ease while conversing with him. I learned many
                new words again that expand my English vocabulary. I am eagerly
                anticipating the opportunity to collaborate!
              </Typography>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button variant="text" sx={showMorebtn}>
            Show More <SouthIcon sx={{ marginLeft: "1rem" }} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const LessonTypeWrap = (theme: Theme) => ({
  padding: "2rem",
  borderRadius: "1.5625rem",
  marginBottom: "1.625rem",
  background: "#fff",
  [theme.breakpoints.down("xl")]: {
    padding: "1rem",
  },
});
const lessonTypehead = () => ({
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  alignItems: "center",
  marginBottom: "2rem",
});
const title = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.375rem",
  },
});

const langToggle = (theme: Theme) => ({
  borderRadius: "3.125rem!important",
  border: "1px solid #2599FB!important",
  background: "#FFF",
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.125rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  textTransform: "uppercase",
  marginLeft: "1rem !important",
  width: "9.25rem",
  height: "4.0625rem",
  "&.Mui-selected": {
    background: "#2599FB",
    color: "#fff",
    ":hover": {
      background: "#41a4f8",
      color: "#fff",
    },
  },
  [theme.breakpoints.down("xl")]: {
    height: "2.875rem",
    fontSize: "1rem",
  },
});
const reviewCard = () => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "1.25rem",
  border: "1px solid #CBCBCB",
  background: "#FFF",
  padding: "1rem",
});
const dateWrap = () => ({
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "0.5rem",
  img: {
    width: "1rem!important",
    height: "1rem!important",
  },
});
const contentWrap = () => ({
  flex: 1,
  padding: 0,
  paddingLeft: "1rem",
});
const reviewTitle = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  marginBottom: "0.5rem",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: "1",
  lineClamp: 1,
  WebkitBoxOrient: "vertical",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});
const usrImage = (theme: Theme) => ({
  width: "5.125rem",
  height: "5.39631rem",
  borderRadius: "0.625rem",
  position: "relative",
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "0.625rem",
    objectFit: "cover",
  },
  [theme.breakpoints.down("xl")]: {
    width: "4rem",
    height: "4.125rem",
  },
});
const courseSubTitle = (theme: Theme) => ({
  color: "#12BA94",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  marginLeft: "0.5rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
  },
});
const ratingTxt = (theme: Theme) => ({
  color: "#E78E0A",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  flexDirection: "row",
  alignItems: "center",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});
const showMorebtn = (theme: Theme) => ({
  margin: "2rem auto auto",
  display: "flex",
  color: "#000",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  textTransform: "uppercase",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});
const reviewPara = (theme: Theme) => ({
  color: "#727272",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "2rem",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "1.5rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
    marginTop: "1rem",
    lineHeight: "1.85rem",
  },
});

export default TeacherReviews;
