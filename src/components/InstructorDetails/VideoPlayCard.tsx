import { Card, Stack, Button, CardActions, Theme } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Image from "next/image";
import laura from "../../../public/images/laura1.jpg";
import ButtonUse from "../ButtonUse";

const VideoPlayCard = () => {
  return (
    <Card sx={videodetailsCard} elevation={0}>
      <Stack sx={videoWrap}>
        <Image
          src={laura}
          alt="#"
          style={{
            width: "100%",
            height: "19.4375rem",
            borderRadius: "1.5625rem",
            border: "1px solid #EAEAEA",
          }}
        />
        <Button sx={playButton}>
          <PlayCircleIcon
            sx={{
              width: "3.25rem",
              height: "3.25rem",
              background: "#fff",
              borderRadius: "50%",
            }}
          />
        </Button>
      </Stack>
      <CardActions sx={cardAction}>
        <ButtonUse name="Book Lesson" />
        <ButtonUse name="Contact Instructor" />
      </CardActions>
    </Card>
  );
};
const videoWrap = () => ({
  position: "relative",
});
const playButton = () => ({
  color: "#2699FB",
  position: "absolute",
  left: "1.5rem",
  bottom: "1.5rem",
});
const videodetailsCard = () => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "1.25rem",
  background: "#FFF",
  padding: "0.75rem",
  paddingRight: "1.75rem",
});
const cardAction = (theme: Theme) => ({
  flexWrap: "wrap",
  padding: "1rem",
  button: {
    width: "100%",
    height: "4.875rem",
    color: "#FFF",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textTransform: "capitalize",
    margin: "0.5rem 0",
    boxShadow: "none",
    "&:last-child": {
      background: "#CBCBCB",
      color: "#1E1E1C",
    },
    [theme.breakpoints.down("xl")]: {
      height: "3.5rem",
      fontSize: "1.125rem",
    },
  },
});

export default VideoPlayCard;
