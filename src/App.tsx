import { ThemeProvider, createTheme } from "@mui/material";
import MainLayout from "./layouts/Main";

function App() {
  const theme = createTheme({
    palette: { mode: "dark" },
  });
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
