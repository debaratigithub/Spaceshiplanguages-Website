"use client";

import { Stack, Card, LinearProgress } from "@mui/material";
import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Loading() {
  return (
    <Stack sx={loading}>
      <Card sx={cardShape} elevation={0}>
        <Image src={logo} width={264} height={78} alt="#" />
        <LinearProgress sx={{ marginTop: "1rem" }} />
      </Card>
    </Stack>
  );
}
const loading = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});
const cardShape = () => ({
  background: "#fff",
  padding: "1.5rem",
  borderRadius: "1rem",
  zIndex: 10,
});
