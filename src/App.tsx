import {
  CssBaseline,
  GlobalStyles,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import MainLayout from "./layouts/MainLayout";
import getGlobalStyles from "./utils/getGlobalStyles";
import React from "react";
import { useAppDispatch } from "./redux/hooks";
import { refreshToken } from "./redux/features/user/user.slice";

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
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const isUserLoggedIn = async () => await dispatch(refreshToken());
    isUserLoggedIn().catch((err) => console.log(err));
  }, [dispatch]);

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
