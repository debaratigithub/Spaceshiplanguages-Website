import React from "react";
import { Grid, Card, CardContent, Typography, Theme } from "@mui/material";
import Image from "next/image";
import img1 from "../../../public/images/sl1.png";
import img2 from "../../../public/images/sl2.png";
import img3 from "../../../public/images/sl3.png";
import img4 from "../../../public/images/sl4.png";
import img5 from "../../../public/images/sl5.png";
import img6 from "../../../public/images/sl6.png";

const WhyTeachCard = () => {
  return (
    <Grid container spacing={{ sm: 2, md: 4, xl: 7 }}>
      <Grid item xs={12} sm={6}>
        <Card sx={lesssonInstCard}>
          <Image src={img1} alt="#" />
          <CardContent>
            <Typography variant="h3" sx={txtHeading}>
              Earn money online
            </Typography>
            <Typography variant="h3" sx={txtPara}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don`&apos;`t look even
              slightly believable.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card sx={lesssonInstCard}>
          <Image src={img2} alt="#" />
          <CardContent>
            <Typography variant="h3" sx={txtHeading}>
              Earn money online
            </Typography>
            <Typography variant="h3" sx={txtPara}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don`&apos;`t look even
              slightly believable.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card sx={lesssonInstCard}>
          <Image src={img3} alt="#" />
          <CardContent>
            <Typography variant="h3" sx={txtHeading}>
              Earn money online
            </Typography>
            <Typography variant="h3" sx={txtPara}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don`&apos;`t look even
              slightly believable.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card sx={lesssonInstCard}>
          <Image src={img4} alt="#" />
          <CardContent>
            <Typography variant="h3" sx={txtHeading}>
              Earn money online
            </Typography>
            <Typography variant="h3" sx={txtPara}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don`&apos;`t look even
              slightly believable.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card sx={lesssonInstCard}>
          <Image src={img5} alt="#" />
          <CardContent>
            <Typography variant="h3" sx={txtHeading}>
              Earn money online
            </Typography>
            <Typography variant="h3" sx={txtPara}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don`&apos;`t look even
              slightly believable.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card sx={lesssonInstCard}>
          <Image src={img6} alt="#" />
          <CardContent>
            <Typography variant="h3" sx={txtHeading}>
              Earn money online
            </Typography>
            <Typography variant="h3" sx={txtPara}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don`&apos;`t look even
              slightly believable.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
const lesssonInstCard = (theme: Theme) => ({
  display: "flex",
  border: "none",
  borderRadius: "0",
  boxShadow: "none",
  background: "transparent",
  "& img": {
    marginTop: "1rem ",
    [theme.breakpoints.down("xl")]: {
      width: "2.5rem",
      height: "2.5rem",
    },
  },
});
const txtHeading = (theme: Theme) => ({
  color: " #1E1E1C ",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.75rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  marginBottom: "1.25rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.5rem",
  },
});
const txtPara = (theme: Theme) => ({
  color: " #1E1E1C ",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.25rem",
    lineHeight: "2rem",
  },
});

export default WhyTeachCard;
