import { Box, Stack, Theme, Typography } from "@mui/material";
import insTructor from "../../../public/images/feat1.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CardUI from "../Ui/CardUI";
import { styles } from "@/app/styles";

const InstructData = [
  {
    name: "David Esposito",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting...",
    languages: ["english", "spanish", "french"],
    image: insTructor,
    price: 200,
  },
  {
    name: "David Esposito 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting...",
    languages: ["english", "spanish", "french"],
    image: insTructor,
    price: 250,
  },
  {
    name: "David Esposito 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting...",
    languages: ["english", "spanish", "french"],
    image: insTructor,
    price: 270,
  },
  {
    name: "David Esposito 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting...",
    languages: ["english", "spanish", "french"],
    image: insTructor,
    price: 270,
  },
  {
    name: "David Esposito 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting...",
    languages: ["english", "spanish", "french"],
    image: insTructor,
    price: 270,
  },
  {
    name: "David Esposito 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting...",
    languages: ["english", "spanish", "french"],
    image: insTructor,
    price: 270,
  },
];

const FindFeaturedInstructor = () => {
  return (
    <Box sx={instructorWrap}>
      <Stack sx={styles.container}>
        <Typography variant="h2" component="h2">
          Find Your Featured Instructors
        </Typography>

        <Stack sx={sliderStyle}>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            navigation={true}
            modules={[Navigation]}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {InstructData.map((item, index) => (
              <SwiperSlide key={index}>
                <CardUI itemData={item} action={true} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Stack>
    </Box>
  );
};

// for style
const instructorWrap = (theme: Theme) => ({
  background: "#fff",
  paddingTop: "6.25rem",
  paddingBottom: "6.25rem",
  typography: {
    h2: {
      textAlign: "center",
      width: "100%",
      color: "#1E1E1C",
      fontFamily: "'Karla', sans-serif",
      fontSize: "3.125rem",
      fontWeight: 700,
      lineHeight: "4.375rem",
      marginBottom: "2rem",
      [theme.breakpoints.down("xl")]: {
        fontSize: "2.5rem",
        lineHeight: "3.125rem",
      },
    },
    h3: {
      textAlign: "left",
      width: "100%",
      color: "#1E1E1C",
      fontFamily: "'Karla', sans-serif",
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: "normal",
      marginBottom: "1rem",
    },
  },
  [theme.breakpoints.down("xl")]: {
    paddingTop: "4rem",
    paddingBottom: "4rem",
  },
});

const sliderStyle = () => ({
  flexDirection: "row",
});

export default FindFeaturedInstructor;
