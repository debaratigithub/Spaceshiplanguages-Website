"use client";

import { useState } from "react";
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
  Tooltip,
  Button,
  Grid,
  Divider,
  Stack,
  Typography,
  Switch,
  SvgIcon,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import AvtImage from "../../public/images/laura1.jpg";
import changePassIcon from "../../public/images/changePassIcon.svg";
import Logout from "@mui/icons-material/Logout";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { styles } from "@/app/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [loggedin, setLoggedin] = useState<boolean>(false);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navlinks = [
    { link_label: "Find an Instructor", href: "/find-an-instructor" },
    { link_label: "Become an Instructor", href: "/become-an-instructor" },
    { link_label: "Our Story", href: "" },
  ];
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    const loginStatus = localStorage.getItem("loginstatus");
    if (loginStatus === "true") {
      // If it's true, update the login state
      setLoggedin(true);
    }
  }, []);
  // console.log(typeof theme, "hgjkgh");
  return (
    <>
      <Box sx={headfix}>
        <Grid container sx={styles.container}>
          <Grid item xs={4} md={2}>
            <Box sx={logowidth}>
              <Link href="/">
                <Image src={logo} alt="Logo" />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={8} md={10}>
            <Box sx={navItems}>
              {navlinks.map((link, index) => (
                <Link key={index} href={link.href}>
                  {link.link_label}
                </Link>
              ))}
              <Tooltip title="Add" disableInteractive sx={tooltip}>
                <Button>
                  <HelpOutlineOutlinedIcon />
                </Button>
              </Tooltip>

              {/* {loggedin ? (
                <Link href="/auth/login">
                  <Button sx={loginbtn}>
                    <AccountCircleOutlinedIcon />
                    Login
                  </Button>
                </Link>
              ) : (
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    sx={{ background: "transparent" }}
                  >
                    <Stack sx={loginbtn} style={{ maxWidth: "10.5rem" }}>
                      <Image src={AvtImage} alt="#" />
                      <Typography sx={nametxt} noWrap>
                        Ellisa Ellisa Ellisa
                      </Typography>
                      <KeyboardArrowDownIcon />
                    </Stack>
                  </IconButton>
                </Tooltip>
              )} */}

{loggedin ? (
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    sx={{ background: "transparent" }}
                  >
                    <Stack sx={loginbtn} style={{ maxWidth: "10.5rem" }}>
                      <Image src={AvtImage} alt="#" />
                      <Typography sx={nametxt} noWrap>
                        Ellisa Ellisa Ellisa
                      </Typography>
                      <KeyboardArrowDownIcon />
                    </Stack>
                  </IconButton>
                </Tooltip>
              ) : (
                <Link href="/auth/login">
                  <Button sx={loginbtn}>
                    <AccountCircleOutlinedIcon />
                    Login
                  </Button>
                </Link>
              )  }
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            borderRadius: "1.875rem",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 1,
              right: 24,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem sx={userData}>
          <Stack sx={avtImage}>
            <Image src={AvtImage} alt="#" />
          </Stack>
          <Stack sx={contentProf}>
            <Typography sx={avtTitle}>Laura MacCuliach</Typography>
            <Typography sx={avtSubtitle}>Instructor</Typography>
          </Stack>
          <Button sx={editButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M10.5112 11.4375C11.562 11.4375 12.5891 11.1259 13.4627 10.5422C14.3364 9.95844 15.0173 9.12874 15.4194 8.15801C15.8215 7.18728 15.9267 6.11911 15.7217 5.08858C15.5167 4.05806 15.0107 3.11146 14.2678 2.3685C13.5248 1.62553 12.5782 1.11956 11.5477 0.914581C10.5171 0.709597 9.44898 0.814802 8.47824 1.21689C7.50751 1.61898 6.67781 2.2999 6.09407 3.17354C5.51032 4.04717 5.19875 5.07429 5.19875 6.125C5.2004 7.53346 5.76064 8.88375 6.75657 9.87968C7.7525 10.8756 9.10279 11.4358 10.5112 11.4375ZM10.5112 2.6875C11.1911 2.6875 11.8557 2.88911 12.421 3.26683C12.9863 3.64454 13.4269 4.18141 13.6871 4.80953C13.9473 5.43765 14.0153 6.12882 13.8827 6.79563C13.7501 7.46244 13.4227 8.07494 12.9419 8.55568C12.4612 9.03643 11.8487 9.36382 11.1819 9.49645C10.5151 9.62909 9.8239 9.56101 9.19578 9.30084C8.56765 9.04066 8.03079 8.60007 7.65307 8.03477C7.27536 7.46948 7.07375 6.80488 7.07375 6.125C7.07474 5.21363 7.43723 4.33986 8.08167 3.69542C8.72611 3.05098 9.59987 2.68849 10.5112 2.6875ZM2.6875 20.525C2.6875 22.4788 3.52875 23.3125 5.5 23.3125H10.5C10.7486 23.3125 10.9871 23.4113 11.1629 23.5871C11.3387 23.7629 11.4375 24.0014 11.4375 24.25C11.4375 24.4986 11.3387 24.7371 11.1629 24.9129C10.9871 25.0887 10.7486 25.1875 10.5 25.1875H5.5C2.4775 25.1875 0.8125 23.5313 0.8125 20.525C0.8125 17.1975 2.695 13.3125 8 13.3125H13C13.9632 13.2957 14.9217 13.4515 15.83 13.7725C16.0455 13.8717 16.2153 14.0488 16.3054 14.2682C16.3954 14.4876 16.399 14.733 16.3153 14.955C16.2316 15.1769 16.0669 15.3588 15.8543 15.4642C15.6418 15.5695 15.3973 15.5903 15.17 15.5225C14.4724 15.2825 13.7375 15.169 13 15.1875H8C7.28617 15.1325 6.5689 15.233 5.8977 15.4822C5.2265 15.7313 4.61735 16.1231 4.11228 16.6306C3.60722 17.138 3.21828 17.749 2.97229 18.4213C2.72631 19.0937 2.62914 19.8114 2.6875 20.525ZM25.7962 15.345L24.4037 13.9538C24.2014 13.7497 23.9605 13.5879 23.695 13.4778C23.4296 13.3677 23.1449 13.3115 22.8575 13.3125C22.5698 13.3119 22.2848 13.3685 22.0191 13.479C21.7535 13.5896 21.5124 13.7518 21.31 13.9563L13.5887 21.7138C13.5018 21.8005 13.4328 21.9035 13.3858 22.017C13.3388 22.1305 13.3148 22.2522 13.315 22.375V25.5C13.315 25.7486 13.4138 25.9871 13.5896 26.1629C13.7654 26.3387 14.0039 26.4375 14.2525 26.4375H17.3775C17.6252 26.4372 17.8628 26.3393 18.0387 26.165L25.7888 18.4425C25.9928 18.2395 26.1547 17.9981 26.2651 17.7323C26.3756 17.4666 26.4325 17.1816 26.4325 16.8938C26.4325 16.6059 26.3756 16.3209 26.2651 16.0552C26.1547 15.7894 25.9928 15.548 25.7888 15.345H25.7962ZM16.9875 24.5625H15.1875V22.7625L20.34 17.5863L22.1637 19.41L16.9875 24.5625ZM24.47 17.1138L23.4925 18.0875L21.6637 16.2575L22.6375 15.2788C22.6663 15.2497 22.7006 15.2267 22.7383 15.2111C22.7761 15.1954 22.8166 15.1874 22.8575 15.1875C22.9404 15.1876 23.0199 15.2204 23.0788 15.2788L24.4713 16.6713C24.5004 16.6999 24.5236 16.7342 24.5392 16.772C24.5549 16.8098 24.5628 16.8503 24.5625 16.8913C24.5626 16.9326 24.5544 16.9736 24.5386 17.0118C24.5227 17.05 24.4994 17.0846 24.47 17.1138Z"
                fill="#727272"
              />
            </svg>
          </Button>
        </MenuItem>
        <MenuItem sx={menuItem} onClick={handleClose}>
          Dashboard
          <DashboardIcon sx={mlAuto} />
        </MenuItem>
        <MenuItem sx={menuItem} onClick={handleClose}>
          Become An Instractor
          <Switch
            sx={mlAuto}
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            color="primary"
          />
        </MenuItem>
        <MenuItem sx={menuItem} onClick={()=>router.push("/auth/change-password")}>
          Change Password
          <Image style={{ marginLeft: "auto" }} src={changePassIcon} alt="#" />
        </MenuItem>

        <MenuItem sx={menuItem} onClick={()=>router.push("/auth/change-password")}>
        Support  Module
          <Image style={{ marginLeft: "auto" }} src={changePassIcon} alt="#" />
        </MenuItem>
        <Divider sx={mlAuto} />
        <MenuItem sx={menuItem} onClick={handleClose}>
          Logout
          <Logout sx={mlAuto} />
        </MenuItem>
      </Menu>
    </>
  );
};
const loginbtn = (theme: Theme) => ({
  width: "auto",
  height: "auto",
  padding: "0.375rem 0.5rem",
  borderRadius: "3.125rem",
  fontFamily: "'Karla', sans-serif",
  backgroundColor: "#2599FB",
  color: "#fff",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "capitalize",
  flexDirection: "row",
  alignItems: "center",
  minHeight: "3.25rem",
  minWidth: "7rem",
  img: {
    width: "2.125rem",
    height: "2.125rem",
    borderRadius: "50%",
    border: "2px solid #fff",
    marginRight: "0.5rem",
  },
  "&:hover": {
    backgroundColor: "#dfb82e",
    color: "#fff",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
    minHeight: "2.75rem",
  },
});

const nametxt = (theme: Theme) => ({
  fontFamily: "'Karla', sans-serif",
  color: "#fff",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "capitalize",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});
const headfix = (theme: Theme) => ({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  position: "fixed",
  zIndex: "9",
  left: "0",
  top: "0",
  width: "100%",
  backgroundColor: "#fff",
  height: "8.375rem",
  [theme.breakpoints.down("xl")]: {
    height: "5.625rem",
  },
});

const logowidth = () => ({
  width: "180px",
  a: {
    display: "inline-block",
  },
  "& img": {
    width: "180px",
    height: "auto",
  },
});

const navItems = (theme: Theme) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  "& a": {
    paddingLeft: "1.375rem",
    paddingRight: "1.375rem",
    color: "#1E1E1C",
    fontFamily: "Karla",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    "&:hover": {
      color: "#2599FB",
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.25rem",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
    },
  },
  [theme.breakpoints.only("sm")]: {
    display: "none",
  },
});

const tooltip = () => ({
  color: "#333",
  fontFamily: "'Karla', sans-serif",
  "& svg": {
    fontSize: "1.5rem",
  },
});
const userData = () => ({
  flexDirection: "row",
  padding: "1rem",
  borderBottom: "1px solid #D91962",
  marginBottom: "1rem",
});
const contentProf = () => ({
  marginLeft: "0.5rem",
  flex: 1,
});
const editButton = () => ({
  minWidth: "inherit",
});
const mlAuto = () => ({
  marginLeft: "auto",
  color: "#727272",
});
const avtTitle = (theme: Theme) => ({
  color: "#000",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.25rem",
  },
});
const avtSubtitle = (theme: Theme) => ({
  color: "#727272",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "2.4375rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
    lineHeight: "2rem",
  },
});
const avtImage = (theme: Theme) => ({
  width: "4.0625rem",
  height: "4.0625rem",
  borderRadius: "4.0625rem",
  border: "3px solid #F9D136",
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPositions: "center center",
    borderRadius: "4.0625rem",
  },
  [theme.breakpoints.down("xl")]: {
    width: "2.75rem",
    height: "2.75rem",
  },
});

const menuItem = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "2.4375rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
    lineHeight: "1.875rem",
  },
});
export default Header;
