import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A1A2E", // Dark Blue
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#E94560", // Vibrant Red
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F6FA", // Light Gray
      paper: "#FFFFFF",
    },
    text: {
      primary: "#16213E", // Almost Black
      secondary: "#0F3460", // Deep Blue
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.5rem",
    },
  },
});

export default theme;
