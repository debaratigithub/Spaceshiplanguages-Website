"use client";
import { useState ,useEffect} from "react";
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
import countryIcon from "../../../public/images/map1.png";

import ButtonUse from "../ButtonUse";
import Link from "next/link";

//Redux Toolkit
import { RootState} from '../../reduxts/store'
import {useAppDispatch, useAppSelector} from '../../reduxts/hooks'
import {getTeacherListData} from '../../reduxts/Slices/teacherauthslice/teacherListSlice'


type CardType = {
  setVideohover?: React.Dispatch<React.SetStateAction<boolean>>;
};

const InstructorCard = (props: CardType) => {

    //calling all student data through redux
    const dispatch = useAppDispatch();

    useEffect(() => {
      // Dispatch the fetchSomeDataAsync action when the component mounts
      dispatch(getTeacherListData());
     
    }, [dispatch]);
  
    const apiuserdata = useAppSelector((state: RootState) =>state?.teacherListData?.teacherListData?.teacherList);
    console.log(apiuserdata,"++++FROM CARD+++++++")


  // const { setVideohover } = props;

  const [liked, setLiked] = useState<boolean>(false);
  const [less, setLess] = useState<boolean>(false);

  const funcshowHide = () => {
    setLess(!less);
  };

  return (
    <Card
      sx={instCard}
      elevation={0}
      style={{ marginBottom: "3.5rem" }}
      // onMouseEnter={(e: React.MouseEvent) => setVideohover(true)}
    >
      {apiuserdata && apiuserdata.length>0 && apiuserdata.map((teacherdata:any,teacherdataIndex:any)=>(
        <Grid container spacing={2} key={teacherdataIndex}>
        <Grid item sx={imgPrt}>
          <ButtonBase sx={profileImage}>
            <Image src={DrImg} alt="complex" fill sizes="100vw" />
            <Stack sx={countryImage}>
              <Image src={countryIcon} alt="#" fill sizes="100vw" />
            </Stack>
          </ButtonBase>
          <Typography component="div" sx={ratingtxt}>
            <StarIcon /> 5.0
          </Typography>
          <Typography variant="body2" component="h6" sx={lessontxt}>
            1050 Lessons
          </Typography>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography sx={tTitle} variant="subtitle1" component="h2">
                <Link href={`/find-an-instructor/${teacherdata.id}`}> {teacherdata.name}</Link>
              </Typography>
              <Typography variant="body2" gutterBottom sx={subtxt}>
                Professional Teacher
              </Typography>
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
                  English <Chip sx={upperInter} label="UPPER-INTERMEDIATE" />
                </Button>
              </Stack>
              <Typography
                variant="body2"
                sx={detailsTxt}
                style={{ display: less ? "block" : "" }}
              >
                Hi, I’m Laura and I’m a qualified English teacher from Scotland,
                now based in Spain. I love teaching English to adults, which is
                why I have been doing it full-time for 20 years. In fact, Hi,
                I’m Laura and I’m a qualified English teacher from Scotland, now
                based in Spain. I love teaching English to adults, which is why
                I have been doing it full-time for 20 years. In fact
              </Typography>
              <Button sx={lessMore} onClick={() => funcshowHide()}>
                {less ? "Less" : "More"}
                {less ? <ExpandLessSharpIcon /> : <ExpandMoreSharpIcon />}
              </Button>
              <CardActions sx={cardAction}>
                <Stack>
                  <Typography variant="h6" sx={actsubtxt} component="h6">
                    Lessons start from
                  </Typography>
                  <Typography variant="h4" sx={acttxt} component="h4">
                    USD 9.00
                  </Typography>
                </Stack>
                <ButtonUse name="Book Session" />
              </CardActions>
            </Grid>
          </Grid>

          <IconButton
            sx={likeIcon}
            aria-label="delete"
            onClick={() => setLiked(!liked)}
          >
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Grid>
      </Grid>
      ))}
      
      {/* <Grid container spacing={2}>
        <Grid item sx={imgPrt}>
          <ButtonBase sx={profileImage}>
            <Image src={DrImg} alt="complex" fill sizes="100vw" />
            <Stack sx={countryImage}>
              <Image src={countryIcon} alt="#" fill sizes="100vw" />
            </Stack>
          </ButtonBase>
          <Typography component="div" sx={ratingtxt}>
            <StarIcon /> 5.0
          </Typography>
          <Typography variant="body2" component="h6" sx={lessontxt}>
            1050 Lessons
          </Typography>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography sx={tTitle} variant="subtitle1" component="h2">
                <Link href={`/find-an-instructor/${1}`}> Laura MacCullach</Link>
              </Typography>
              <Typography variant="body2" gutterBottom sx={subtxt}>
                Professional Teacher
              </Typography>
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
                  English <Chip sx={upperInter} label="UPPER-INTERMEDIATE" />
                </Button>
              </Stack>
              <Typography
                variant="body2"
                sx={detailsTxt}
                style={{ display: less ? "block" : "" }}
              >
                Hi, I’m Laura and I’m a qualified English teacher from Scotland,
                now based in Spain. I love teaching English to adults, which is
                why I have been doing it full-time for 20 years. In fact, Hi,
                I’m Laura and I’m a qualified English teacher from Scotland, now
                based in Spain. I love teaching English to adults, which is why
                I have been doing it full-time for 20 years. In fact
              </Typography>
              <Button sx={lessMore} onClick={() => funcshowHide()}>
                {less ? "Less" : "More"}
                {less ? <ExpandLessSharpIcon /> : <ExpandMoreSharpIcon />}
              </Button>
              <CardActions sx={cardAction}>
                <Stack>
                  <Typography variant="h6" sx={actsubtxt} component="h6">
                    Lessons start from
                  </Typography>
                  <Typography variant="h4" sx={acttxt} component="h4">
                    USD 9.00
                  </Typography>
                </Stack>
                <ButtonUse name="Book Session" />
              </CardActions>
            </Grid>
          </Grid>

          <IconButton
            sx={likeIcon}
            aria-label="delete"
            onClick={() => setLiked(!liked)}
          >
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Grid>
      </Grid> */}
    </Card>
  );
};

// style
const instCard = (theme: Theme) => ({
  padding: "2rem",
  borderRadius: "1.5rem",
  position: "relative",
  marginBottom: "3.5rem",
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
  height: 305,
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
const ratingtxt = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
  marginTop: "1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    color: "#E78E0A",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.375rem",
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

const detailsTxt = (theme: Theme) => ({
  marginTop: "1.125rem",
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "2.25rem",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: "3",
  lineClamp: "3",
  WebkitBoxOrient: "vertical",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
  },
});

const lessMore = (theme: Theme) => ({
  color: "#D91A63",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "150%",
  textTransform: "capitalize",
  padding: 0,
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});
const cardAction = (theme: Theme) => ({
  paddingLeft: 0,
  paddingRight: 0,
  justifyContent: "space-between",
  marginTop: "1.125rem",
  "& button": {
    height: "4.0625rem;",
    fontSize: "1.625rem",
    fontWeight: 700,
    boxShadow: "none",
    [theme.breakpoints.down("xl")]: {
      height: "3rem;",
      fontSize: "1.125rem",
    },
  },
});

const actsubtxt = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  marginBottom: "0.75rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});
const acttxt = (theme: Theme) => ({
  color: "#000",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});

export default InstructorCard;
