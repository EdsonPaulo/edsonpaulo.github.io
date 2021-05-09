import { Box, Center, Container, Heading, Stack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import SocialNetworks from "../components/social-networks";

export default function Home() {
  return (
    <Box bg="dark.800" minH="100vh">
      <Head>
        <title>Edson Paulo - Portfolio</title>
        <meta name="description" content="Edson Paulo Gregório´s portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container
          centerContent
          maxWidth="container.lg"
          minHeight="100vh"
          justifyContent="center"
        >
          <Stack
            p={[10, 20]}
            bg="dark.700"
            spacing="6"
            borderWidth="2px"
            borderRadius="lg"
            textAlign="center"
            borderColor="accent"
          >
            <Heading
              fontSize={{ base: "3xl", md: "6xl" }}
              color="accent"
              as="h1"
            >
              EDSON´S PORTFOLIO
            </Heading>
            <Heading
              fontSize={{ base: "2xl", md: "4xl" }}
              color="whiteAlpha.600"
              as="h2"
            >
              S O O N
            </Heading>

            <Center>
              <SocialNetworks />
            </Center>
          </Stack>
        </Container>
      </main>
    </Box>
  );
}
