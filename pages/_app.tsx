import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import { NextComponentType, NextPageContext } from "next";
import NextApp from "next/app";
import React from "react";
import Router from "next/router";

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
  loading: boolean;
  language: Languages;
  langDictionary: Record<string, string>;
}

class App extends NextApp<AppProps> {
  static async getInitialProps({ Component, ctx }: InitialProps) {
    const { language, langDictionary } = await getI18nLocale(ctx);

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps, langDictionary, language };
  }

  componentDidMount() {
    const start = () => this.setState({ loading: true });
    const end = () => this.setState({ loading: false });

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
  }

  componentWillUnmount() {
    const start = () => this.setState({ loading: true });
    const end = () => this.setState({ loading: false });

    Router.events.off("routeChangeStart", start);
    Router.events.off("routeChangeComplete", end);
    Router.events.off("routeChangeError", end);
  }

  render() {
    const { Component, pageProps, langDictionary, language, loading } =
      this.props;
    return (
      <I18n ref={I18nRef} langDictionary={langDictionary} language={language}>
        <ChakraProvider theme={CustomTheme}>
          {loading ? (
            <Center h="100vh" w="full">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="dark.800"
                color="accent"
                size="xl"
              />
            </Center>
          ) : (
            <Component {...pageProps} />
          )}
        </ChakraProvider>
      </I18n>
    );
  }
}

export default App;
