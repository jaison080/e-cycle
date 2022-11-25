import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import {SessionProvider} from "next-auth/react";
import { useEffect } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "Montserrat",
        textTransform: "none",
      },
    },
  });
  useEffect(() => {
    AOS.init({ delay: 0, duration: 1000 });
  });
  return (
    <SessionProvider session={session}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
