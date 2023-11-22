"use client";
import { useEffect, useState } from "react";
import {
  Button,
  ButtonBase,
  Card,
  CardActions,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
  Theme,
} from "@mui/material";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import DrImg from "../../../public/images/laura1.jpg";
import shareIcon from "../../../public/images/share_icon.png";
import countryIcon from "../../../public/images/map1.png";

import ButtonUse from "../ButtonUse";
import { useRouter } from "next/navigation";
// import { useSearchParams } from 'next/navigation'
//import { useRouter } from 'next/router';
import { usePathname } from "next/navigation";

interface InstructorDetailsCompmaincardProps {
  teacherDatacard: any;
}

const InstructorDetailsCard: React.FC<InstructorDetailsCompmaincardProps> = ({
  teacherDatacard,
}) => {
  console.log(teacherDatacard, "from child card");

  const [liked, setLiked] = useState<boolean>(false);
  const [less, setLess] = useState<boolean>(false);

  const funcshowHide = () => {
    setLess(!less);
  };

  return (
    <Card sx={instCard} elevation={0}>
      <Grid container spacing={2}>
        <Grid item sx={imgPrt}>
          <ButtonBase sx={profileImage}>
            <Image src={DrImg} alt="complex" fill sizes="100vw" />
            <Stack sx={countryImage}>
              <Image src={countryIcon} alt="#" fill sizes="100vw" />
            </Stack>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography sx={tTitle} variant="subtitle1" component="h2">
                {/* {Teacherdata?.name} */} 
                {teacherDatacard?.name}
              </Typography>
              <Typography variant="body2" gutterBottom sx={subtxt}>
                Professional Teacher
              </Typography>
              <Stack sx={rateReview}>
                <Typography component="div" sx={ratingtxt}>
                  <StarIcon /> 5.0
                </Typography>
                <Typography variant="body2" component="h6" sx={lessontxt}>
                  1050 Lessons
                </Typography>
              </Stack>
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                flexWrap="wrap"
              >
                <Typography variant="body2" component="h6" sx={subtxt}>
                  Speaks:
                </Typography>
                <Button sx={langchip}>
                  English <Chip sx={native} label="NATIVE" />
                </Button>
                <Button sx={langchip}>
                  Spanish <Chip sx={upperInter} label="UPPER-INTERMEDIATE" />
                </Button>
                <Button sx={langchip}>
                  French <Chip sx={upperInter} label="UPPER-INTERMEDIATE" />
                </Button>
              </Stack>
            </Grid>
          </Grid>

          <Stack sx={likeIcon}>
            <IconButton aria-label="share">
              <Image src={shareIcon} alt="#" width={22} height={22} />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => setLiked(!liked)}>
              {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

// style
const instCard = (theme: Theme) => ({
  padding: "2rem",
  borderRadius: "1.5rem",
  position: "relative",
  marginBottom: "1.625rem",
  width: "100%",
  [theme.breakpoints.down("xl")]: {
    padding: "1rem",
  },
});

const imgPrt = () => ({
  display: "flex",
  flexDirection: "column",
});
const profileImage = (theme: Theme) => ({
  width: 281,
  height: 256,
  borderRadius: "1.5rem",
  overflow: "hidden",
  position: "relative",
  [theme.breakpoints.down("xl")]: {
    width: 200,
    height: 204,
  },
});
const countryImage = () => ({
  position: "absolute",
  right: "1rem",
  bottom: "1rem",
  width: "2.813rem",
  height: "2.813rem",
  borderRadius: "50%",
  border: "2px solid #fff",
  overflow: "hidden",
});
const rateReview = () => ({
  flexDirection: "row",
  marginTop: "1rem",
  marginBottom: "1rem",
});
const ratingtxt = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
  marginRight: "1.5rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    color: "#E78E0A",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});
const lessontxt = (theme: Theme) => ({
  color: "#1E1E1C",
  textAlign: "center",
  fontFamily: "Karla",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  display: "inline-flex",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});
const tTitle = (theme: Theme) => ({
  color: "#000",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.75rem",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  marginBottom: "0.625rem",
  "& :hover": {
    color: "#2599fb",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.375rem",
  },
});

const likeIcon = () => ({
  position: "absolute",
  right: "1rem",
  top: "1.5rem",
  flexDirection: "row",
  "& svg": {
    width: "27px",
    height: "24px",
    padding: 0,
  },
});
const langchip = (theme: Theme) => ({
  color: "#8F8F8D",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  textTransform: "capitalize",
  borderRadius: "2rem",
  cursor: "inherit",
  marginLeft: "0.5rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
    margin: "0!important",
  },
});
const native = (theme: Theme) => ({
  background: "#8ADCC9",
  color: "#1E1E1C",
  marginLeft: "0.5rem",
  fontSize: "1rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "0.75rem",
  },
});
const upperInter = (theme: Theme) => ({
  background: "#A9D8FF",
  color: "#1E1E1C",
  marginLeft: "0.5rem",
  fontSize: "1rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "0.75rem",
  },
});
const subtxt = (theme: Theme) => ({
  color: "#8F8F8D",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});

export default InstructorDetailsCard;
