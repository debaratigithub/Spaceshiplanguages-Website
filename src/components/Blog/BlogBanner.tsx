"use client";
import { Stack } from "@mui/material";
import CommonBanner from "../Ui/CommonBanner";

const BlogBanner = () => {
  return (
    <Stack sx={BlogBannerWrp}>
      <CommonBanner
        heading="Our Blogs"
        description=" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
      />
    </Stack>
  );
};

const BlogBannerWrp = () => ({
  "& .css-mil3v": {
    padding: "6rem 0 2rem",
  },

  "& .css-93x8wt-MuiGrid-root": {
    alignItems: "center",
  },

  "& .css-181rylo-MuiGrid-root": {
    minHeight: "500px",
  },
});

export default BlogBanner;
