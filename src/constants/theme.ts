import { createTheme } from "@mui/material/styles";

const dashboardTheme = createTheme({
  palette: {
    primary: {
      main: "rgb(52, 71, 103)",
    },
    secondary: {
      main: "rgb(103, 116, 142)",
    },
    error: {
      main: "rgb(234, 6, 6)",
    },
    success: {
      main: "rgb(130, 214, 22)",
    },
    info: {
      main: "#FFFFFF",
    },
  },
  typography: {
    h5: {
      fontSize: "2rem",
    },
    h6: {
      fontSize: "1.6rem",
    },
    body1: {
      fontSize: "1.4rem",
    },
    caption: {
      fontSize: "1.2rem",
    },
  },
});

export default dashboardTheme;
