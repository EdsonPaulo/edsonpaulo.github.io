import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { I18nProvider } from "next-rosetta";

import "../styles/globals.scss";
import CustomTheme from "../constants/custom-theme";

const MainApp = ({ Component, pageProps }: AppProps) => (
  <I18nProvider table={pageProps.table}>
    <ChakraProvider theme={CustomTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </I18nProvider>
);

export default MainApp;
