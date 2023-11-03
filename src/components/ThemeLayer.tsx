"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ThemeLayer = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2599FB",
        contrastText: "#fff",
      },
      secondary: {
        main: "#fad237",
        contrastText: "#fff",
      },
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 991,
        lg: 1200,
        xl: 1740,
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default ThemeLayer;
