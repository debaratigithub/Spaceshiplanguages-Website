"use client";
import { Card, List, ListItem, ListItemButton, Theme } from "@mui/material";
import Image from "next/image";
import dbDashboard_Icon from "../../../public/images/dbDashboard_Icon.png";
import dbUser_Icon from "../../../public/images/dbUser_Icon.png";
import dbMyclass_Icon from "../../../public/images/dbMyclass_Icon.png";
import dbLike_Icon from "../../../public/images/dbLike_Icon.png";
import dbMypayment_Icon from "../../../public/images/dbMypayment_Icon.png";
import dbMessage_Icon from "../../../public/images/dbMessage_Icon.png";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const currentLink = usePathname();

  const navLinks = [
    {
      label: "Dashboard",
      link: "/dashboard",
      icon: dbDashboard_Icon,
    },
    {
      label: "Profile",
      link: "/dashboard/profile",
      icon: dbUser_Icon,
    },
    {
      label: "My Classes",
      link: "/dashboard/my-classes",
      icon: dbMyclass_Icon,
    },
    {
      label: "My Favorite",
      link: "/dashboard/my-favorite",
      icon: dbLike_Icon,
    },
    {
      label: "My Payments",
      link: "/dashboard/my-payments",
      icon: dbMypayment_Icon,
    },
    {
      label: "Messages",
      link: "/dashboard/messages",
      icon: dbMessage_Icon,
    },
  ];
  return (
    <Card elevation={0} sx={linkCard}>
      <List disablePadding>
        {navLinks.map((link) => (
          <ListItem disablePadding key={link.label}>
            <ListItemButton
              sx={[linkStyle, currentLink === link.link ? selected : null]}
              component="a"
              href={link.link}
            >
              <Image src={link.icon} alt="#" />
              {link.label}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

const linkCard = (theme: Theme) => ({
  borderRadius: "1.875rem",
  padding: "0.652rem",
  [theme.breakpoints.down("xl")]: {
    borderRadius: "1.25rem",
  },
});

const linkStyle = (theme: Theme) => ({
  color: "#727272",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  height: "4.8125rem",
  img: {
    objectFit: "contain",
    marginRight: "0.5rem",
    width: "auto",
    height: "auto",
  },
  [theme.breakpoints.down("xl")]: {
    height: "3.5rem",
    fontSize: "1.25rem",
  },
});
const selected = {
  background: "#2599FB",
  color: "#fff",
  borderRadius: "6.25rem",
  ":hover": {
    background: "#2599FB",
    color: "#fff",
    borderRadius: "6.25rem",
  },
  "& img": {
    filter: "brightness(0) invert(1)",
  },
};
export default Sidebar;
