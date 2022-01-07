import { Box, Flex } from "@chakra-ui/react";
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
} from "../components";
import { useTranslation } from "../hooks";

export default function Home() {
  const { t } = useTranslation();

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

            <Flex minH="100vh" id="skills" bg="dark.850">
              <SkillsSection />
            </Flex>

            <Flex minH="100vh" id="history">
              <WorkHistorySection />
            </Flex>

            <Flex minH="100vh" id="portfolio" bg="dark.850">
              <PortfolioSection />
            </Flex>

            <Flex minH="100vh" id="contact">
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
