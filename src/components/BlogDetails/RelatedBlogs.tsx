import { styles } from "@/app/styles";
import { Box, Grid, Typography } from "@mui/material";
import blogImage from "../../../public/images/latestblog.jpg";
import blogImage2 from "../../../public/images/latestblog2.jpg";
import blogImage3 from "../../../public/images/latestblog3.jpg";
import CardUI from "../Ui/CardUI";
import { Theme } from "@mui/material/styles";

const BlogData = [
  {
    name: "The standard chunk of Lorem Ipsum used since",
    description:
      "It is a long established fact that a reader will be distracted by the readable...",
    date: "03-08-2023",
    image: blogImage,
  },
  {
    name: "The standard chunk of Lorem Ipsum used since",
    description:
      "It is a long established fact that a reader will be distracted by the readable...",
    date: "03-08-2023",
    image: blogImage2,
  },
  {
    name: "The standard chunk of Lorem Ipsum used since",
    description:
      "It is a long established fact that a reader will be distracted by the readable...",
    date: "03-08-2023",
    image: blogImage3,
  },
];
const RelatedBlogs = () => {
  return (
    <Box sx={RelatedBlogswrap}>
      <Grid container sx={styles.container}>
        <Grid item xs={12}>
          <Typography variant="h2" sx={titleTxt}>
            Related Blogs
          </Typography>
          <Grid container spacing={4}>
            {BlogData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CardUI itemData={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const RelatedBlogswrap = () => ({
  background: "#fff",
  paddingBottom: "3.75rem",
});
const titleTxt = (theme: Theme) => ({
  color: "#000",
  textAlign: "center",
  fontFamily: "'Karla', sans-serif",
  fontSize: "3.75rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "4.375rem",
  marginBottom: "2.5rem",

  [theme.breakpoints.down("xl")]: {
    fontSize: "2.125rem",
    lineHeight: "initial",
  },
});
export default RelatedBlogs;
