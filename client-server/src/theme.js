import { createTheme } from "@mui/material";

export const theme = createTheme({
  status: {
    danger: "#33d9b2",
  },
  palette: {
    primary: {
      main: "#33d9b2",
      darker: "#218c74",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    secondary: {
      main: "rgba(0,0,0,0)",
      darker: "#ecf0f1",
    },
  },
});
