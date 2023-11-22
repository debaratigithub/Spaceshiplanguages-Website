"use client";

import { Box, Grid, Stack, Theme, Typography } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import blogImage from "../../../public/images/latestblog.jpg";
import blogImage2 from "../../../public/images/latestblog2.jpg";
import blogImage3 from "../../../public/images/latestblog3.jpg";
import CardUI from "../Ui/CardUI";
import { styles } from "@/app/styles";
import { useAppDispatch, useAppSelector } from "@/reduxts/hooks";
import { RootState } from "@/reduxts/store";
import { useEffect } from "react";
import { getBlogListData } from "@/reduxts/Slices/Blog/blogListSlice";

const BlogData = [
  {
    name: "The standard chunk of Lorem Ipsum used since",
    description:
      "It is a long established fact that a reader will be distracted by the readable...",
    date: "03-08-2023",
    image: blogImage,
  },
  {
    name: "The standard chunk of Lorem Ipsum used since",
    description:
      "It is a long established fact that a reader will be distracted by the readable...",
    date: "03-08-2023",
    image: blogImage2,
  },
  {
    name: "The standard chunk of Lorem Ipsum used since",
    description:
      "It is a long established fact that a reader will be distracted by the readable...",
    date: "03-08-2023",
    image: blogImage3,
  },
  {
    name: "The standard chunk of Lorem Ipsum used since",
    description:
      "It is a long established fact that a reader will be distracted by the readable...",
    date: "03-08-2023",
    image: blogImage3,
  },
  {
    name: "The standard chunk of Lorem Ipsum used since",
    description:
      "It is a long established fact that a reader will be distracted by the readable...",
    date: "03-08-2023",
    image: blogImage3,
  },
];

const LatestBlogs = () => {
  const { blogListData } = useAppSelector(
    (state: RootState) => state.blogListData
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBlogListData());
  }, [dispatch]);
  return (
    <Box sx={latesBlgwrp}>
      <Grid container sx={styles.container}>
        <Typography variant="h2" sx={blkTitle}>
          Our Latest Blogs
        </Typography>
        <Stack sx={sliderWrap}>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            navigation={true}
            modules={[Navigation]}
          >
            {blogListData?.allBlog.map((item:any, index:any) => (
              <SwiperSlide key={index}>
                {/* <Card sx={blogCard}>
                  <Image
                    src={item.image}
                    height={205}
                    width={500}
                    alt="alt text"
                  />
                  <CardContent>
                    <Stack direction="row">
                      <Image
                        src={dtIcon}
                        width={21}
                        height={21}
                        alt="alt text"
                      />
                      <Typography sx={datetxt}>{item.date}</Typography>
                    </Stack>
                    <Typography variant="h3" sx={blogName}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={blogDesc}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card> */}
                <CardUI itemData={item} blog />
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Grid>
    </Box>
  );
};

// style
const latesBlgwrp = (theme: Theme) => ({
  paddingTop: "7.375rem",
  paddingBottom: "5.625rem",
  [theme.breakpoints.down("xl")]: {
    paddingTop: "5.625rem",
    paddingBottom: "5rem",
  },
});
const blkTitle = (theme: Theme) => ({
  color: "#000",
  fontFamily: "'Karla', sans-serif",
  fontSize: "3.75rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "4.375rem",
  textAlign: "center",
  width: "100%",
  marginBottom: "2rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.5rem",
    lineHeight: "3.125rem",
  },
});
const blogCard = () => ({ width: "100%" });

const sliderWrap = () => ({
  width: "100%",
  flexDirection: "row",
});
const blogDesc = () => ({
  color: "#1E1E1C",
  fontFamily: "Karla",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "2.25rem",
});
const blogName = () => ({
  color: "#1E1E1C",
  fontFamily: "Karla",
  fontSize: "1.75rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  marginTop: "0.75rem",
  marginBottom: "1rem",
});
const datetxt = () => ({
  marginLeft: "0.5rem",
  color: "#12BA94",
  fontFamily: "Karla",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});

export default LatestBlogs;
