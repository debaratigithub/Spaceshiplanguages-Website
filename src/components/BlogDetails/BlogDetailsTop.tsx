import { Grid, Box, Typography, Stack, Theme } from "@mui/material";
import Image from "next/image";
import loginBanner from "../../../public/images/blogdetlbnr.png";
import calIcon from "../../../public/images/cal.png";
import { styles } from "@/app/styles";

const BlogDetailsTop = () => {
  return (
    <>
      <Box sx={blogDetailsWrp}>
        <Grid container sx={styles.container}>
          <Grid item xs={12}>
            <Typography sx={dateTxt} variant="h5">
              <Image
                src={calIcon}
                alt="calIcon"
                style={{ marginRight: "0.5rem" }}
              />
              03-08-2023
            </Typography>
            <Typography sx={blogTitle} variant="h1">
              The standard chunk of Lorem Ipsum used since the 1500s
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={FormWrap}>
        <Grid container sx={styles.container}>
          <Grid item xs={12}>
            <Stack sx={bannerImg}>
              <Image src={loginBanner} fill sizes="100vw" alt="banner Image" />
            </Stack>

            <Stack sx={blogDetailsContent}>
              <Typography variant="body1" sx={paraTxt}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which do not look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there is not anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </Typography>
              <Typography variant="body1" sx={paraTxt}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which do not look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there is not anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
const blogDetailsWrp = () => ({
  background: "#fad237 url(../images/blogdetl.jpg) center top no-repeat",
  marginTop: "134px",
  backgroundSize: "cover",
  paddingTop: "110px",
  paddingBottom: "270px",
});
const blogTitle = (theme: Theme) => ({
  color: "#1E1E1C",
  textAlign: "center",
  fontFamily: "'Karla', sans-serif",
  fontSize: "3.125rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  [theme.breakpoints.down("xl")]: {
    fontSize: "2rem",
  },
});
const FormWrap = () => ({
  background: "#fff",
});
const bannerImg = () => ({
  position: "relative",
  width: "100%",
  minHeight: "448px",
  objectFit: "cover",
  objectPosition: "center center",
  marginTop: "-220px",
});
const blogDetailsContent = (theme: Theme) => ({
  marginTop: "3.75rem",
  marginBottom: "6.875rem",
  [theme.breakpoints.down("xl")]: {
    marginBottom: "2rem",
    marginTop: "2.5rem",
  },
});
const dateTxt = (theme: Theme) => ({
  color: "#1E1E1C",
  justifyContent: "center",
  fontFamily: "'Karla' , sans-serif",
  fontSize: "1.75rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  display: "flex",
  alignItems: "center",
  marginBottom: "2.5rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.5rem",
  },
});
const paraTxt = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla' , sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "2.25rem",
  marginBottom: "2.5rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
    lineHeight: "1.625rem",
  },
});
export default BlogDetailsTop;
