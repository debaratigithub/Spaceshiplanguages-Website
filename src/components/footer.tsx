"use client";
import { Box, Theme, Typography, Grid } from "@mui/material";
import Image from "next/image";
import logo from "../../public/images/footerlogo.png";

import Item from "@mui/material/ListItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { styles } from "@/app/styles";

const Footer = () => {
  const links = [
    { label: "Contact", href: "/contact-us" },
    { label: "Blog", href: "/blog" },
    { label: "Legal", href: "/legal" },
    { label: "Privacy", href: "/privacy" },
    { label: "Faq", href: "/faq" },
  ];

  const currentPath = usePathname();

  return (
    <>
      <Box sx={footerbg}>
        <Grid container sx={styles.container}>
          <Grid item sm={12} md={4} sx={logoresp}>
            <Box sx={logowidth}>
              <Link href="/">
                <Image src={logo} alt="Logo" />
              </Link>
            </Box>
          </Grid>
          <Grid item sm={12} md={8}>
            <Box sx={menuitem}>
              {links.map((link) => (
                <Typography sx={footerlink} key={link.label}>
                  <Link
                    style={{
                      color: currentPath === link.href ? "#D91962" : "",
                    }}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={bottomfooter}>
        <Grid container sx={styles.container}>
          <Grid item sm={12} md={6}>
            <Item sx={copyrgt}>
              &copy; 2023, SPACESHIP LANGUAGES. ALL RIGHTS RESERVED.
            </Item>
          </Grid>
          <Grid item sm={12} md={6}>
            <Item sx={menuitem}>
              <Typography sx={followUs}>Follow Us On : </Typography>
              <Typography sx={socialicn}>
                <Link href="/">
                  <FacebookOutlinedIcon />
                </Link>
              </Typography>
              <Typography sx={socialicn}>
                <Link href="/">
                  <TwitterIcon />
                </Link>
              </Typography>
              <Typography sx={socialicn}>
                <Link href="/">
                  <InstagramIcon />
                </Link>
              </Typography>
              <Typography sx={socialicn}>
                <Link href="/">
                  <YouTubeIcon />
                </Link>
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const footerbg = () => ({
  backgroundColor: "#1E1E1C",
  paddingTop: "30px",
  paddingBottom: "20px",
  // [theme.breakpoints.only('sm')]: {
  //   textAlign: 'center',
  // },
});

const logoresp = (theme: Theme) => ({
  [theme.breakpoints.only("sm")]: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
});

const logowidth = (theme: Theme) => ({
  width: "190px",
  "& img": {
    width: "100%",
    height: "auto",
  },
  [theme.breakpoints.only("sm")]: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    "& img": {
      width: "150px",
      height: "auto",
    },
  },
});

const menuitem = (theme: Theme) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  height: "100%",
  [theme.breakpoints.only("sm")]: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
});

const footerlink = (theme: Theme) => ({
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  textTransform: "uppercase",
  color: "#fff",
  fontWeight: "300",
  marginLeft: "1.875rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
    marginLeft: "1.5rem",
  },
});

const faq = () => ({
  fontFamily: "'Karla', sans-serif",
  fontSize: "16px",
  textTransform: "uppercase",
  color: "#fff",
  fontWeight: "500",
  backgroundColor: "#2599FB",
  marginLeft: "30px",
  borderRadius: "50px",
  padding: "5px 25px",
});

const bottomfooter = () => ({
  borderTop: "1px solid #4F4F4F",
  paddingTop: "10px",
  backgroundColor: "#1E1E1C",
});

const copyrgt = (theme: Theme) => ({
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.375rem",
  textTransform: "uppercase",
  color: "#fff",
  fontWeight: "400",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.only("sm")]: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
});

const socialicn = () => ({
  color: "#fff",
  marginLeft: "15px",
  "& svg": {
    color: "#fff",
    fontSize: "22px",
    "& hover": {
      color: "#dfb82e",
    },
  },
});

const followUs = (theme: Theme) => ({
  color: "#fff",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.375rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  textTransform: "uppercase",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
  },
});

export default Footer;
