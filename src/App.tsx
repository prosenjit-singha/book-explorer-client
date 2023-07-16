import {
  CssBaseline,
  GlobalStyles,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import MainLayout from "./layouts/MainLayout";
import getGlobalStyles from "./utils/getGlobalStyles";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#171a23",
        paper: "#171a23",
      },
    },
    typography: {
      allVariants: {
        fontFamily: "Poppins",
      },
    },
  });
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles styles={getGlobalStyles(theme)} />
          <CssBaseline enableColorScheme />
          <MainLayout />
        </>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
