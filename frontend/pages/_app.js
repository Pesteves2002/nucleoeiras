import { CssBaseline } from "@material-ui/core";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Head from "next/head";

let theme = createTheme({
  palette: {
    primary: {
      main: "#f57c00",
    },
    secondary: {
      main: "#212121",
    },
  },
});
theme = responsiveFontSizes(theme);

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      {/* PWA primary color */}
      <meta name="theme-color" content={theme.palette.primary.main} />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <CssBaseline />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
