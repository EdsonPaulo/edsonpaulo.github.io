import { ChakraProvider } from "@chakra-ui/react";
import { NextComponentType, NextPageContext } from "next";
import { I18nProvider } from "next-rosetta";
import NextApp from "next/app";
import nookies from "nookies";
import React from "react";

import CustomTheme from "../constants/custom-theme";
import { Locales, LocalStorageKeys } from "../constants/enums";
import { I18n } from "../i18n";
import { I18nRef } from "../i18n/translate";
import "../styles/globals.scss";
import { getI18nLocale } from "../utils";

interface InitialProps {
  Component: NextComponentType;
  ctx: NextPageContext;
}

interface AppProps {
  locale: Locales;
  langDictionary: Record<string, string>;
}

class App extends NextApp<AppProps> {
  static async getInitialProps({ Component, ctx }: InitialProps) {
    const { locale, langDictionary } = await getI18nLocale(ctx);

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

      return { pageProps, langDictionary, locale };
  }

  render() {
    const { Component, pageProps, langDictionary, locale } = this.props;
    return (
      <I18n ref={I18nRef} langDictionary={langDictionary} locale={locale}>
        <I18nProvider table={pageProps.table}>
          <ChakraProvider theme={CustomTheme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </I18nProvider>
      </I18n>
    );
  }
}

export default App;
