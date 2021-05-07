import { Box, Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";

import { HomeSection, Sidebar } from "../components";

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Edson Paulo Gregório - Portfolio</title>
        <meta name="description" content="Edson Paulo Gregório´s portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex>
          <Sidebar />

          <Box p="24">
            <HomeSection />
          </Box>
        </Flex>
      </main>

      <footer></footer>
    </Box>
  );
}
