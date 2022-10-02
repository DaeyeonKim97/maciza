import Router from './routes/Router';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router/>
      </div>
    </ThemeProvider>
  );
}

export default App;
