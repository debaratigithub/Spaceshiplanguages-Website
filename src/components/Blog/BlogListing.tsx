"use client";
import { Box, Grid, Typography } from "@mui/material";

import blogImage from "../../../public/images/latestblog.jpg";
import blogImage2 from "../../../public/images/latestblog2.jpg";
import blogImage3 from "../../../public/images/latestblog3.jpg";
import CardUI from "../Ui/CardUI";
import CommonPagination from "../Ui/CommonPagination";
import { styles } from "@/app/styles";
import Link from "next/link";

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
    image: blogImage,
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

const BlogListing = () => {
  return (
    <Box sx={latesBlgwrp}>
      <Grid container sx={styles.container}>
        <Typography variant="h3" sx={blkTitle}>
          136 results found.
        </Typography>

        <Grid container spacing={4}>
          {BlogData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link href="/blog-details">
              <CardUI itemData={item} />
              </Link>
              
            </Grid>
          ))}
        </Grid>

        <CommonPagination count={10} color="primary" shape="rounded" />
      </Grid>
    </Box>
  );
};

// style
const latesBlgwrp = () => ({
  paddingTop: "118px",
  paddingBottom: "90px",
  background: "#fff",
});
const blkTitle = () => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  marginBottom: "2rem",
});

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

export default BlogListing;
