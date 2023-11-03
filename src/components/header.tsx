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
} from "@mui/material";
import { Theme } from "@mui/material/styles";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Logout from "@mui/icons-material/Logout";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { styles } from "@/app/styles";

const loginbtn = (theme: Theme) => ({
  width: "auto",
  height: "auto",
  padding: "0.375rem 1.25rem",
  borderRadius: "3.125rem",
  fontFamily: "'Karla', sans-serif",
  backgroundColor: "#2599FB",
  color: "#fff",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#dfb82e",
    color: "#fff",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.25rem",
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
    fontSize: "23px",
  },
});

const Header = () => {
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
    { link_label: "Become an Instructor", href: "/becomeaninstructor" },
    { link_label: "Our Story", href: "/ourstory" },
  ];

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
              </Tooltip>{" "}
              <Link href="/auth/login">
                <Button sx={loginbtn}>
                  <AccountCircleOutlinedIcon />
                  Login
                </Button>
              </Link>
              {loggedin && (
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    sx={{ background: "transparent" }}
                  >
                    <Avatar sx={loginbtn}>
                      <AccountCircleOutlinedIcon />
                      Login
                    </Avatar>
                  </IconButton>
                </Tooltip>
              )}
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
              top: 0,
              right: 14,
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
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        {/* <Divider /> */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
