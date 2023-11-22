import { Card, Typography, Stack, Theme } from "@mui/material";
import Image from "next/image";
import calImg from "../../../public/images/calendarImage_Today.png";

const TodaysBooking = () => {
  return (
    <Card sx={bookingCard} elevation={0}>
      <Typography sx={cardTitle} variant="h3" component="h4">
        Todays Booking
      </Typography>

      <Stack sx={imgContainer}>
        <Image src={calImg} alt="#" />
      </Stack>
    </Card>
  );
};

const bookingCard = (theme: Theme) => ({
  borderRadius: "1.875rem",
  padding: "1.875rem",
  [theme.breakpoints.down("xl")]: {
    borderRadius: "1.25rem",
    padding: "1.25rem",
  },
});
const cardTitle = (theme: Theme) => ({
  color: "#000",
  fontFamily: "'Karla', sans-serif",
  fontSize: "2.1875rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  marginBottom: "1.5rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.75rem",
  },
});
const imgContainer = () => ({
  img: {
    maxWidth: "100%",
    height: "auto",
  },
});

export default TodaysBooking;
