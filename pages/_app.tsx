import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.scss";
import CustomTheme from "../constants/custom-theme";

const MainApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={CustomTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default appWithTranslation(MainApp);
