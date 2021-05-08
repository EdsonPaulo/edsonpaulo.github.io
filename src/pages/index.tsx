import { Box, Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";

import {
  ContactSection,
  Footer,
  HomeSection,
  PortfolioSection,
  Sidebar,
  SkillsSection,
  ExperienceSection,
} from "../components";
import ScrollStatus from "../components/scroll-status";

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("meta.title")} </title>
        <meta name="description" content={t("meta.description")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex>
          <Sidebar />

          <Box ml="50px" flex={1}>

            <HomeSection />


            <Box minH="100vh" id="skills" py="6" px="24" bg="dark.700">
              <SkillsSection />
            </Box>

            <Box minH="100vh" id="experience" py="6" px="24">
              <ExperienceSection />
            </Box>

            <Box minH="100vh" id="portfolio" py="6" px="24">
              <PortfolioSection />
            </Box>

            <Box minH="100vh" id="contact" py="6" px="24">
              <ContactSection />
            </Box>
          </Box>

          <ScrollStatus />
        </Flex>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
