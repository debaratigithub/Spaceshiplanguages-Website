"use client";
import React from "react";
import { Box, Card, Typography, Tab, Tabs, Stack, Theme } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface InstructorDetailsCompmaincardProps {
  teacherDatatab: any;
}


function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Stack
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </Stack>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// const AboutInstructorTabs = () => {
  const AboutInstructorTabs: React.FC<InstructorDetailsCompmaincardProps> = ({
    teacherDatatab,
  }) => {
    console.log(teacherDatatab, "from child tab2");
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(typeof newValue, "console");
    setValue(newValue);
  };
  return (
    <Card elevation={0} sx={aboutWrap}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab sx={tabLabel} label="About Me" {...a11yProps(0)} />
          <Tab
            sx={tabLabel}
            label="My Lessons & Teaching Style"
            {...a11yProps(1)}
          />
          <Tab sx={tabLabel} label="Me As An Instructor" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography variant="h5" component="h6" sx={innerTitle}>
          From France
          <br /> Living in Denpasar, Indonesia (14:01 UTC+08:00)
        </Typography>
        <Stack sx={intsHeader}>
          <Typography variant="body2" sx={intsInnerheader}>
            About Me
          </Typography>
          <Typography variant="body2" sx={intsInnerheader}>
            Instructor since Oct 9, 2021
          </Typography>
        </Stack>
        {/* bio para */}
        <Typography variant="h5" component="h6" sx={innerTitle}>
          Bonjour! My name is {teacherDatatab?.name} and I&apos;m 30. I was born in France and
          I&apos;ve lived in Paris my whole life. However, in 2020 I decided to
          move to the beautiful island of Bali, Indonesia. I started learning
          English when I was 9, I have a bachelor&apos;s degree in Foreign
          languages (English and Japanese) and a professional bachelor&apos;s
          degree in International Tourism. I&apos;ve always loved travelling and
          learning about new cultures and languages as I believe it truly opens
          your heart and mind to the beauty of what the world has to offer! I
          really enjoy pop culture, music and cinema, cooking and so many other
          things that I would love to discuss with you through our lessons!
          Apprenons le français ensemble! :)
        </Typography>
        {/*end bio para */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Card>
  );
};

const aboutWrap = (theme: Theme) => ({
  padding: "2rem",
  borderRadius: "1.5625rem",
  marginBottom: "1.625rem",
  [theme.breakpoints.down("xl")]: {
    padding: "1rem",
  },
});
const innerTitle = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "2.25rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
    lineHeight: "1.875rem",
  },
});
const tabLabel = (theme: Theme) => ({
  color: "#8F8F8D",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  maxWidth: "inherit",
  padding: "1.875rem 2.25rem",
  ":after": {
    content: "''",
    background: "#CACACA",
    height: "2.25rem",
    width: "0.063rem",
    display: "inline-block",
    right: "0.063rem",
    position: "absolute",
  },
  "&:last-child": {
    ":after": { display: "none" },
  },
  [theme.breakpoints.down("xl")]: {
    padding: "1.125rem 2rem",
    fontSize: "1.125rem",
  },
});
const intsHeader = () => ({
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: "3rem",
  marginBottom: "1.5rem",
});
const intsInnerheader = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "Karla",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.375rem",
    lineHeight: "1.875rem",
  },
});
export default AboutInstructorTabs;
