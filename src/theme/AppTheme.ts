import { createTheme, colors } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: colors.deepPurple[500],
      light: colors.deepPurple[400],
      dark: colors.deepPurple[600],
    },
    secondary: {
      main: colors.blue["A400"],
      dark: colors.blue["A700"],
      light: colors.blue[50],
    },
    error: {
      main: colors.red["500"],
      dark: colors.red["800"],
      light: colors.red["300"],
    },
    action:{
      activatedOpacity: 0.4
    }
  },
  shape: {
    borderRadius: 5,
  },
  zIndex: {
    appBar: 1100,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
});

export const ALLCOLORS = {
  ...colors
}