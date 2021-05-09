import { Box, Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { I18nProps, useI18n } from "next-rosetta";
import Head from "next/head";
import React from "react";

import {
  ContactSection,
  Footer,
  HomeSection,
  Navbar,
  PortfolioSection,
  Sidebar,
  SkillsSection,
  WorkHistorySection,
  //  ScrollStatus
} from "../components";
import { ILocaleTable } from "../i18n";

export default function Home() {
  const { t } = useI18n<ILocaleTable>();

  return (
    <>
      <Head>
        <title>{t("meta.title")} </title>
        <meta name="description" content={t("meta.description")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display={{ lg: "none" }}>
        <Navbar />
      </Box>

      <main>
        <Flex>
          <Box display={{ base: "none", lg: "block" }}>
            <Sidebar />
          </Box>

          <Box ml={{ lg: "100px" }} mt={{ base: 8, lg: 0 }} flex={1}>
            <HomeSection />

            <Flex minH="calc(100vh/1.2)" id="skills" bg="dark.850">
              <SkillsSection />
            </Flex>

            <Flex minH="calc(100vh/1.2)" id="history">
              <WorkHistorySection />
            </Flex>

            <Flex minH="calc(100vh/1.2)" id="portfolio" bg="dark.850">
              <PortfolioSection />
            </Flex>

            <Flex minH="calc(100vh/1.2)" id="contact">
              <ContactSection />
            </Flex>
          </Box>

          {/**
            <ScrollStatus />
          */}
        </Flex>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export const getStaticProps: GetStaticProps<I18nProps<ILocaleTable>> = async ({
  locale,
  defaultLocale,
}) => {
  const { table = {} } = await import(
    `../i18n/${locale || defaultLocale || "en"}`
  );
  return { props: { table } };
};
