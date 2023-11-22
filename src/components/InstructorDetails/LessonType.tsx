import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Theme,
} from "@mui/material";
import React from "react";

const LessonType = () => {
  const [language, setLanguage] = React.useState<string | null>("English");

  const handleLanguage = (
    event: React.MouseEvent<HTMLElement>,
    newLang: string | null
  ) => {
    setLanguage(newLang);
  };
  return (
    <Box sx={LessonTypeWrap}>
      <Stack sx={lessonTypehead}>
        <Typography sx={title}>English Lessons</Typography>
        <ToggleButtonGroup
          value={language}
          exclusive
          onChange={handleLanguage}
          aria-label="text alignment"
        >
          <ToggleButton sx={langToggle} value="English" aria-label="English">
            English
          </ToggleButton>
          <ToggleButton sx={langToggle} value="Spanish" aria-label="Spanish">
            Spanish
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      {Array.from(Array(5)).map((_, index) => (
        <Card key={index} sx={courseCard} elevation={0}>
          <CardContent>
            <Typography variant="h3" sx={courseTitle}>
              English Informal Tutoring
            </Typography>
            <Typography variant="h6" component="p" sx={courseSubTitle}>
              A1 - C2 | Conversation Practice | 1,468 lessons completed
            </Typography>
          </CardContent>
          <Button sx={coursePrice}>USD 220+</Button>
        </Card>
      ))}
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
    fontSize: "1.5rem",
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
const courseCard = (theme: Theme) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "1.25rem",
  border: "1px solid #CBCBCB",
  background: "#FFF",
  marginTop: "1rem",
  padding: "0.75rem",
  paddingRight: "1.75rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.375rem",
    padding: "0.5rem",
    paddingRight: "1.5rem",
  },
});
const coursePrice = (theme: Theme) => ({
  borderRadius: "3.125rem",
  background: " #D91962",
  width: "11.75rem",
  height: "3.875rem",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  textTransform: "uppercase",
  color: "#fff",
  ":hover": {
    color: "#fff",
    background: " #D91962",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
    height: "3rem",
    width: "9rem",
  },
});
const courseTitle = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  marginBottom: "0.5rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.375rem",
  },
});
const courseSubTitle = (theme: Theme) => ({
  color: "#8F8F8D",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});

export default LessonType;
