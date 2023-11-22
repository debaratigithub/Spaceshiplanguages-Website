import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
  Theme,
} from "@mui/material";
import learningIcon from "../../../public/images/dbLearning_Icon.png";
import Image from "next/image";

const TotalHoursbook = () => {
  return (
    <Box sx={{ marginBottom: "2rem" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={learningCard} elevation={0}>
            <Stack sx={learningCircle}>
              <Image src={learningIcon} alt="#" />
            </Stack>
            <CardContent sx={learningContent}>
              <Typography sx={contentTitle} variant="h3" component="h3">
                50
              </Typography>
              <Typography sx={contentSubtitle} variant="h6" component="h6">
                Hours Booked
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={learningCard} elevation={0}>
            <Stack sx={learningCircle}>
              <Image src={learningIcon} alt="#" />
            </Stack>
            <CardContent sx={learningContent}>
              <Typography sx={contentTitle} variant="h3" component="h3">
                50
              </Typography>
              <Typography sx={contentSubtitle} variant="h6" component="h6">
                Completed Sessions
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

const learningCard = (theme: Theme) => ({
  borderRadius: "1.875rem",
  padding: "1.875rem",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("xl")]: {
    borderRadius: "1.25rem",
    padding: "1.25rem",
  },
});
const learningContent = () => ({
  flex: 1,
  padding: "0 0 0 1rem",
  ":last-child": {
    paddingBottom: 0,
  },
});
const contentTitle = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "3.125rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "2.625rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.5rem",
  },
});
const contentSubtitle = (theme: Theme) => ({
  color: "#727272",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "auto",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});
const learningCircle = (theme: Theme) => ({
  width: "7rem",
  height: "7rem",
  background: "#F9D136",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  [theme.breakpoints.down("xl")]: {
    width: "5rem",
    height: "5rem",
  },
});

export default TotalHoursbook;
