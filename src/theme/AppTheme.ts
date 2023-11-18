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
      main: colors.amber[400],
      light: colors.amber[200],
      dark: colors.amber[600],
    },
    secondary: {
      main: colors.amber["A400"],
      dark: colors.amber["A700"],
      light: colors.amber[50],
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