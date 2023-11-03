import { Theme } from "@mui/material/styles";

const container = (theme: Theme) => ({
  maxWidth: "1560px",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("xl")]: {
    maxWidth: "85%",
  },
  [theme.breakpoints.down("lg")]: {
    maxWidth: "90%",
  },
});
const inputField = (theme: Theme) => ({
  "& .MuiInputBase-root": {
    borderRadius: "0.625rem",
    [theme.breakpoints.down("xl")]: {
      borderRadius: "0.5rem",
    },
  },
  "& .MuiFormLabel-root": {
    color: " #727272 ",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    // background: "#fff",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.125rem",
    },
  },
  "& input": {
    color: " #727272 ",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.125rem",
    },
  },
  "& .MuiSelect-select": {
    color: " #727272 ",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textAlign: "left",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.125rem",
    },
  },
});

export const styles = {
  container: container,
  inputField: inputField,
};
