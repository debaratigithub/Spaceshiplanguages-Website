import { Box, Button, Stack, Theme, Typography } from "@mui/material";
import Image from "next/image";
import calendarImage from "../../../public/images/calendarImage.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const SlotAvailability = () => {
  return (
    <Box sx={LessonTypeWrap}>
      <Typography sx={title}>SlotAvailability</Typography>

      <Stack sx={calendarImageWrp}>
        <Image src={calendarImage} alt="#" />
      </Stack>
      <Stack sx={slotTime}>
        <Typography sx={slotTitle}>
          Based on your timezone: Europe/Berlin (UTC +02:00)
        </Typography>
        <Button sx={viewmoreSlotLink}>
          View Full Schedule{" "}
          <KeyboardArrowDownIcon style={{ marginLeft: "0.5rem" }} />
        </Button>
      </Stack>
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
const calendarImageWrp = () => ({
  position: "relative",
  img: {
    maxWidth: "100%",
    height: "auto",
  },
});
const title = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "1.875rem",
  marginBottom: "2rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.375rem",
  },
});
const slotTitle = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  marginTop: "2rem",
  textAlign: "center",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.25rem",
  },
});
const slotTime = () => ({
  textAlign: "center",
});
const viewmoreSlotLink = (theme: Theme) => ({
  borderRadius: "3.125rem",
  background: " #D91962",
  padding: "1.75rem 2.375rem",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  textTransform: "uppercase",
  color: "#fff",
  margin: "auto",
  marginTop: "2rem",
  ":hover": {
    color: "#fff",
    background: " #D91962",
  },
  [theme.breakpoints.down("xl")]: {
    padding: "1rem 2.375rem",
    fontSize: "1.125rem",
  },
});

export default SlotAvailability;
