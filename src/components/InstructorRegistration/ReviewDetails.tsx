import {
  Box,
  Typography,
  Grid,
  Stack,
  ListItem,
  List,
  Theme,
} from "@mui/material";
import Image from "next/image";
import profilImg from "../../../public/images/laura1.jpg";
import certificate from "../../../public/images/file.jpg";
import ButtonUse from "../ButtonUse";
type Reviewprops = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

export const ReviewDetails = (props: Reviewprops) => {
  const { setActiveStep } = props;

  const handleBack = () => {
    setActiveStep((prevState) => prevState - 1);
  };
  const handleNext = () => {
    setActiveStep((prevState) => prevState + 1);
  };

  return (
    <Box sx={formWarp}>
      <Typography sx={pageTitle}>Review Details</Typography>
      <Grid container spacing={2} sx={sectionWrap}>
        <Grid item xs={6}>
          <Stack sx={profileWrap}>
            <Image src={profilImg} alt="profile image" style={imageStyle} />
            <Stack sx={profContent}>
              <Typography variant="h6" sx={labelName}>
                Laura MacCullach
              </Typography>
              <Typography variant="h3" sx={labelEmail}>
                Laura@gmail.com
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
          <Grid container spacing={{ md: 2, xl: 5 }}>
            <Grid item xs={6}>
              <Typography variant="h6" sx={labelTxt}>
                Display Name
              </Typography>
              <Typography variant="h3" sx={valueTxt}>
                Display Name
              </Typography>
            </Grid>
            <Grid item xs={6} sx={borderStyle}>
              <Typography variant="h6" sx={labelTxt}>
                Gender
              </Typography>
              <Typography variant="h3" sx={valueTxt}>
                Female
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* end profile section */}

      <Grid container spacing={{ md: 2, xl: 4 }} sx={sectionWrap}>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Phone Number
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            +91 321514511
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Birthday
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            12-07-1994
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Timezone
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            GMT -4 hours
          </Typography>
        </Grid>
      </Grid>
      {/* end numer birthday sectopn */}

      <Grid container spacing={{ md: 2, xl: 4 }} sx={sectionWrap}>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Country
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            USA
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            State
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            Washington, D.C.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            City
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            Washington
          </Typography>
        </Grid>
      </Grid>
      {/* end country sec */}
      <Grid
        container
        rowSpacing={{ md: 2, xl: 4 }}
        columnSpacing={1}
        sx={sectionWrap}
      >
        <Grid item xs={12}>
          <Typography variant="h6" sx={sectionTitle}>
            Language
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Language(which want to teach)
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            English
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" sx={labelTxt}>
            Proficiency Level
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            B2: Upper Intermediate
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Language(which want to teach)
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            Chinese
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" sx={labelTxt}>
            Proficiency Level
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            Native Speaker
          </Typography>
        </Grid>
      </Grid>
      {/* end speacking language section */}
      <Grid container rowSpacing={{ md: 2, xl: 4 }} sx={sectionWrap}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={labelTxt}>
            Video Introduction File
          </Typography>
          <Typography variant="h3" sx={valueTxt} noWrap>
            https://www.youtube.com/watch?v=jgm58cbu0kw
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={labelTxt}>
            About Me / Bio
          </Typography>
          <Typography variant="h3" sx={valueSubTxt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={labelTxt}>
            My Teaching Material
          </Typography>
          <Typography variant="h3" sx={valueSubTxt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
        </Grid>
      </Grid>
      {/* end speacking section */}
      <Grid container rowSpacing={{ md: 2, xl: 4 }} sx={sectionWrap}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={labelTxt}>
            My Teaching Materials
          </Typography>

          <List sx={materialFiles}>
            <ListItem sx={valueTxt}>PDF File</ListItem>
            <ListItem sx={valueTxt}> Video Files</ListItem>
            <ListItem sx={valueTxt}>Articles & News</ListItem>
            <ListItem sx={valueTxt}>Homework</ListItem>
          </List>
        </Grid>
      </Grid>
      {/* end teaching material section */}
      <Grid
        container
        rowSpacing={{ md: 2, xl: 4 }}
        columnSpacing={1}
        sx={sectionWrap}
      >
        <Grid item xs={12}>
          <Typography variant="h6" sx={sectionTitle}>
            Education
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Year From
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            1990
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Year To
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            1993
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Institution Name
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            ABS Academy
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Major / Topic
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            English Teaching
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Degree
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            Bachelor
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={labelTxt}>
            Description
          </Typography>
          <Typography variant="h3" sx={valueSubTxt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={labelTxt}>
            File
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Stack sx={{ position: "relative", marginTop: "1rem" }}>
                <Image
                  src={certificate}
                  alt="certificate"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* end Education section */}
      <Grid
        container
        rowSpacing={{ md: 2, xl: 4 }}
        columnSpacing={1}
        sx={sectionWrap}
      >
        <Grid item xs={12}>
          <Typography variant="h6" sx={sectionTitle}>
            Work Experience
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Year From
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            1990
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Year To
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            1993
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Institution Name
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            ABS Academy
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Position
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            English Teaching
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Country
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            USA
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            City
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            Washington DC
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={labelTxt}>
            Description
          </Typography>
          <Typography variant="h3" sx={valueSubTxt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={labelTxt}>
            File
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Stack sx={{ position: "relative", marginTop: "1rem" }}>
                <Image
                  src={certificate}
                  alt="certificate"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* end workexperience section */}
      <Grid
        container
        rowSpacing={{ md: 2, xl: 4 }}
        columnSpacing={1}
        sx={sectionWrap}
      >
        <Grid item xs={12}>
          <Typography variant="h6" sx={sectionTitle}>
            Certificates
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Year
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            1990
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Certificate Name
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            Certificate Of
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" sx={labelTxt}>
            Institution Name
          </Typography>
          <Typography variant="h3" sx={valueTxt}>
            ABS Academy
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" sx={labelTxt}>
            Description
          </Typography>
          <Typography variant="h3" sx={valueSubTxt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" sx={labelTxt}>
            File
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Stack sx={{ position: "relative", marginTop: "1rem" }}>
                <Image
                  src={certificate}
                  alt="certificate"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Stack sx={backBtn}>
            <ButtonUse name="Back" onClick={handleBack} />
          </Stack>
          <ButtonUse name="Next" onClick={handleNext} />
        </Grid>
      </Grid>
      {/* end workexperience section */}
    </Box>
  );
};
const formWarp = (theme: Theme) => ({
  background: "#fff",
  maxWidth: "73.125rem",
  width: "100%",
  padding: "3.25rem",
  borderRadius: "1.875rem",
  textAlign: "center",
  boxShadow: "0 0 2px #ccc",
  margin: "0 auto",
  "& .css-e7e092-MuiButtonBase-root-MuiButton-root": {
    marginTop: "2.5rem",
    minWidth: "23rem",
    height: "4.875rem",
    fontSize: "1.625rem",
    fontWeight: 700,
    lineHeight: "normal",
    [theme.breakpoints.down("xl")]: {
      minWidth: "15rem",
      height: "3.5rem",
      fontSize: "1.5rem",
    },
  },
  [theme.breakpoints.down("xl")]: {
    maxWidth: "60rem",
  },
});
const pageTitle = (theme: Theme) => ({
  color: "#000",
  textAlign: "center",
  fontFamily: "'Karla', sans-serif",
  fontSize: "3.75rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "4.375rem",
  marginBottom: "2rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.5rem",
    lineHeight: "3.125rem",
    marginBottom: "2.5rem",
  },
});
const sectionWrap = (theme: Theme) => ({
  borderBottom: "1px solid  #ECECEC",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  [theme.breakpoints.down("xl")]: {
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  },
  "&:last-child": {
    paddingBottom: 0,
    border: "none",
  },
});
const imageStyle = {
  width: " 9.25rem",
  height: "9.25rem",
  borderRadius: "50%",
  border: "0.5rem solid  #2599FB",
};
const profileWrap = () => ({
  flexDirection: "row",
  alignItems: "center",
});

const profContent = () => ({
  flex: 1,
  marginLeft: "1.5rem",
});
const labelName = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "2.1875rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  textAlign: "left",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.5rem",
  },
});
const labelEmail = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "2.1875rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textAlign: "left",
  marginTop: "1rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.5rem",
    marginTop: "0.5rem",
  },
});
const labelTxt = (theme: Theme) => ({
  color: "#727272",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textAlign: "left",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});
const valueTxt = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "2.1875rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  textAlign: "left",
  marginTop: "1rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.375rem",
    marginTop: "0.5rem",
  },
});
const valueSubTxt = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  textAlign: "left",
  marginTop: "1rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
  },
});
const borderStyle = (theme: Theme) => ({
  position: "relative",
  "&:after": {
    content: `' '`,
    borderLeft: "1px solid #D9D9D9",
    position: "absolute",
    width: "0.063rem",
    height: "3.75rem",
    display: "inline-block",
    left: 0,
    top: "50%",
    [theme.breakpoints.down("xl")]: {
      height: "2.75rem",
      display: "inline-block",
      left: "0",
      top: "60%",
      transform: "translateY(-40%)",
    },
  },
});
const sectionTitle = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.75rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  textAlign: "left",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.25rem",
  },
});
const materialFiles = (theme: Theme) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  padding: 0,
  marginTop: "1rem",
  "& .MuiListItem-root": {
    margin: "0",
    width: "auto",
    padding: "0 2.75rem 0 0",
    "&:after": {
      content: "''",
      background: "#1E1E1C",
      height: "1.75rem",
      width: "0.188rem",
      position: "absolute",
      right: "0",
      top: "50%",
      transform: "translateY(-50%)",
      [theme.breakpoints.down("xl")]: {
        width: "0.125rem",
        height: "1.375rem",
      },
    },
    // borderRight: "1px solid #000",
    "&:first-child": {
      paddingLeft: 0,
    },
    "&:last-child": {
      "&:after": { display: "none" },
    },
  },
});
const backBtn = () => ({
  marginRight: "1rem",
  display: "inline-block",
  "& .css-e7e092-MuiButtonBase-root-MuiButton-root": {
    background: "#000",
    "&:hover": {
      background: "#fad237",
    },
  },
});
