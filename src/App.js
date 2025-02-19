import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Dashboard from "./pages/Dashboard";

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
    },
    primary: {
      main: "#1e1e1e",
    },
    secondary: {
      main: "#0288d1",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
