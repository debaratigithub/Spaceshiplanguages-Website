"use client";
import { Theme, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import google from "../../../public/images/google.png";
import facebook from "../../../public/images/facebook.png";
import twitter from "../../../public/images/twitter.png";

type SocialProps = {
  tagHead: string;
};
const SocialLinks = ({ tagHead }: SocialProps) => {
  return (
    <>
      <Typography variant="h6" sx={loginwith}>
        {tagHead}
      </Typography>

      <Typography variant="h6" component="div" sx={socallogin}>
        <Link href="#">
          <Image src={google} width={50} height={50} alt="google" />
        </Link>
        <Link href="#">
          <Image src={facebook} width={50} height={50} alt="facebook" />
        </Link>
        <Link href="#">
          <Image src={twitter} width={50} height={50} alt="twitter" />
        </Link>
      </Typography>
    </>
  );
};
const loginwith = (theme: Theme) => ({
  fontFamily: "'Karla', sans-serif",
  textAlign: "center",
  marginBottom: "1.25rem",
  color: "#1E1E1C",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1.875rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.25rem",
  },
});

const socallogin = () => ({
  fontFamily: "'Karla', sans-serif",
  textAlign: "center",
  marginBottom: "20px",
  typography: {
    img: {
      margin: "0 10px",
    },
  },
});
export default SocialLinks;
