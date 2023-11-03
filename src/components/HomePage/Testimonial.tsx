import { Box, Card, Grid, Stack, Theme, Typography } from "@mui/material";
import Image from "next/image";
import blg from "../../../public/images/latestblog.jpg";
import blg2 from "../../../public/images/latestblog2.jpg";
import blg3 from "../../../public/images/latestblog3.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { styles } from "@/app/styles";

interface Testimonial {
  name: string;
  quotes: string;
  image: any;
}
const testimonialData: Testimonial[] = [
  {
    name: "Jonathan Doe",
    quotes:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum",
    image: blg,
  },
  {
    name: "Jonathan Doe",
    quotes:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum",
    image: blg2,
  },
  {
    name: "Jonathan Doe",
    quotes:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum",
    image: blg3,
  },
];
const Testimonial = () => {
  return (
    <Box sx={testimonialWrp}>
      <Grid container sx={styles.container}>
        <Stack sx={titleTop}>
          <Typography variant="h4" sx={aboutSubTitle}>
            Testimonials
          </Typography>
          <Typography variant="h2" sx={aboutTitle}>
            What Student Say’s About Us
          </Typography>
          <Typography variant="h6" sx={aboutPara}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Typography>
        </Stack>
        <Stack sx={sliderWrp}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={2}
            spaceBetween={0}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 600,
              modifier: 1.02,
              slideShadows: false,
            }}
            pagination={true}
            centerInsufficientSlides={false}
            modules={[EffectCoverflow, Pagination]}
          >
            {testimonialData.map((item, index) => (
              <SwiperSlide key={index}>
                <Card sx={testimonialCard} elevation={2}>
                  <Stack sx={avtImage}>
                    <Image
                      src={item.image}
                      fill
                      sizes="50vw"
                      alt="user image"
                    />
                  </Stack>
                  <Typography variant="h2" component="h2" sx={userName}>
                    {item.name}
                  </Typography>
                  <Typography variant="h6" component="h6" sx={quotes}>
                    {item.quotes}
                  </Typography>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Grid>
    </Box>
  );
};

const testimonialWrp = (theme: Theme) => ({
  background: "#F9D145",
  paddingTop: "5.938rem",
  paddingBottom: "6.25rem",
  [theme.breakpoints.down("xl")]: {
    paddingTop: "4.5rem",
    paddingBottom: "5rem",
  },
});

const titleTop = () => ({
  width: "100%",
  textAlign: "center",
  marginBottom: "5rem",
});
const aboutTitle = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "3.75rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "4.375rem",
  marginBottom: "1.5rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.5rem",
    lineHeight: "3.125rem",
  },
});
const aboutSubTitle = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "2.1875rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  marginBottom: "0.875rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.75rem",
  },
});
const aboutPara = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1.875rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.375rem",
  },
});
const sliderWrp = () => ({
  flexDirection: "row",
  width: "100%",
  "& .swiper": {
    "& .swiper-wrapper": {
      justifyContent: "center",
      marginBottom: "60px",
    },
    "& .swiper-pagination": {
      bottom: "0",
    },
  },
});
const testimonialCard = () => ({
  padding: "2rem",
  borderRadius: "0.625rem",
});
const avtImage = () => ({
  border: "5px solid #D91962",
  borderRadius: "50%",
  overflow: "hidden",
  width: "110px",
  height: "110px",
  margin: "auto",
  position: "relative",
});
const userName = (theme: Theme) => ({
  color: "#2599FB",
  textAlign: "center",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.75rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  marginTop: "1.375rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.375rem",
  },
});
const quotes = (theme: Theme) => ({
  color: "#1E1E1C",
  textAlign: "center",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "2.25rem",
  marginTop: "1.375rem",
  marginBottom: "1.375rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.25rem",
    lineHeight: "2rem",
  },
});

export default Testimonial;
