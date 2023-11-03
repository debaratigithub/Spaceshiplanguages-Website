import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Theme,
  Typography,
} from "@mui/material";
import Image from "next/image";
import EnglishFlag from "../../../public/images/map1.png";
import JapaneseFlag from "../../../public/images/map2.png";
import SpanishFlag from "../../../public/images/map3.png";
import ChineseFlag from "../../../public/images/map4.png";
import FrenchFlag from "../../../public/images/map5.png";
import ItalianFlag from "../../../public/images/map6.png";
import GermanFlag from "../../../public/images/map7.png";
import MoreFlag from "../../../public/images/map8.png";
import { styles } from "@/app/styles";

interface CountryIns {
  country_name: string;
  total_instructor: number;
  flag: any;
}
const instructorbasedonCountry: CountryIns[] = [
  { country_name: "English", total_instructor: 1053, flag: EnglishFlag },
  { country_name: "Japanese", total_instructor: 533, flag: JapaneseFlag },
  { country_name: "Spanish", total_instructor: 153, flag: SpanishFlag },
  { country_name: "Chinese", total_instructor: 1054, flag: ChineseFlag },
  { country_name: "French", total_instructor: 2564, flag: FrenchFlag },
  { country_name: "Italian", total_instructor: 1986, flag: ItalianFlag },
  { country_name: "German", total_instructor: 953, flag: GermanFlag },
  { country_name: "More", total_instructor: 2000, flag: MoreFlag },
];

const FindRightInstructor = () => {
  return (
    <Box sx={findRightins}>
      <Stack sx={styles.container}>
        <Typography variant="h2" component="h2">
          Find The Right Instructors For You
        </Typography>

        <Grid container spacing={4}>
          {instructorbasedonCountry.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Card sx={countryCard} elevation={0}>
                <Image src={item.flag} width={77} height={77} alt={item.flag} />
                <CardContent sx={contentWrp}>
                  <Typography variant="h3" component="h3">
                    {item.country_name}{" "}
                  </Typography>
                  <Typography variant="h6" component="h6">
                    {item.total_instructor} + Instructors
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

// style

const findRightins = (theme: Theme) => ({
  background: "#F9D145",
  paddingTop: "6.25rem",
  paddingBottom: "7.188rem",
  [theme.breakpoints.down("xl")]: {
    paddingTop: "4rem",
    paddingBottom: "5rem",
  },
  typography: {
    h2: {
      textAlign: "center",
      width: "100%",
      color: "#1E1E1C",
      fontFamily: "'Karla', sans-serif",
      fontSize: "3.125rem",
      fontWeight: 700,
      lineHeight: "4.375rem",
      marginBottom: "2rem",
      [theme.breakpoints.down("xl")]: {
        fontSize: "2.5rem",
        lineHeight: "3.125rem",
      },
    },
  },
});

const countryCard = () => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "0.625rem",
  padding: "0.625rem",
  paddingTop: "1rem",
  paddingBottom: "1rem",
});
const contentWrp = (theme: Theme) => ({
  paddingRight: "0.5rem",
  flex: 1,
  [theme.breakpoints.down("xl")]: {
    padding: "1rem",
    paddingRight: "0rem",
    paddingBottom: "1rem",
  },
  "& h3": {
    color: "#000",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.5rem",
    },
  },
  "& h6": {
    color: "#1E1E1C",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.375rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1rem",
    },
  },
});
export default FindRightInstructor;
