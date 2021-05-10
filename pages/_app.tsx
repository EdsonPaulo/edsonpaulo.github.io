import { ChakraProvider } from "@chakra-ui/react";
import { NextComponentType, NextPageContext } from "next";
import { I18nProvider } from "next-rosetta";
import NextApp from "next/app";
import React from "react";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css";

import CustomTheme from "../constants/custom-theme";
import { Languages } from "../constants/enums";
import { I18n } from "../i18n";
import { I18nRef } from "../i18n/translate";
import "../styles/globals.scss";
import { getI18nLocale } from "../utils";

interface InitialProps {
  Component: NextComponentType;
  ctx: NextPageContext;
}

interface AppProps {
  language: Languages;
  langDictionary: Record<string, string>;
}

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class App extends NextApp<AppProps> {
  static async getInitialProps({ Component, ctx }: InitialProps) {
    const { language, langDictionary } = await getI18nLocale(ctx);

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps, langDictionary, language };
  }

  render() {
    const { Component, pageProps, langDictionary, language } = this.props;
    return (
      <I18n ref={I18nRef} langDictionary={langDictionary} language={language}>
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
