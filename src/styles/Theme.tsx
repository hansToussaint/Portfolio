import "./global.css";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CommonColors {
    // mainBgColor: string;
    secondTextColor: string;
    secondBgColor: string;
  }
}

const secondBgColor = "#f5f5f5";
// const mainBgColor = "#F7F9FE";
const secondTextColor = "#545454";
const dangerColor = "#FF0000";

const theme = createTheme({
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
      secondBgColor,
      // mainBgColor,
      secondTextColor,
    },
    primary: {
      main: "#ffffff",
    },
    error: {
      main: dangerColor,
    },
  },

  typography: {
    fontFamily: "inherit",

    h1: {
      // fontSize: "2.5rem",
      // fontWeight: 700,
      // letterSpacing: "0.4px",

      // color: "#000000",
    },

    h2: {
      fontSize: "1.6rem",
      fontWeight: 400,
    },


    body1: {
      // fontWeight: 500,
      // fontSize: "1.55rem",
    },
  },
});

export default theme;
