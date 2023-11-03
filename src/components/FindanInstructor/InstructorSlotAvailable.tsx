"use client";
import React, { useRef } from "react";
import { Stack, Grid } from "@mui/material";

type VideoProps = {
  videohover: boolean;
};
const InstructorSlotAvailable = ({ videohover }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handlePlay = () => {
    videoRef.current?.play();
  };
  const handlePause = () => {
    videoRef.current?.pause();
  };
  console.log(videohover, "console");

  return (
    <Grid sx={videoWrap}>
      <video muted>
        <source src="/video/samplevideo.mp4" type="video/mp4" />
      </video>
    </Grid>
  );
};

const videoWrap = () => ({
  position: "relative",
  paddingBottom: "56.25%",
  height: "18rem",
  borderRadius: "1.563rem",
  "& video": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "auto",
    borderRadius: "1.5625rem",
  },
});

export default InstructorSlotAvailable;
