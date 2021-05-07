import Head from "next/head";
import React from "react";
import { Box, Container, Heading, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="gray.900" minH="100vh">
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
            bg="gray.900"
            borderWidth="2px"
            borderRadius="lg"
            textAlign="center"
            borderColor="blue.900"
          >
            <Heading
              fontSize={{ base: "3xl", md: "6xl" }}
              color="goldenrod"
              as="h1"
            >
              EDSON´S PORTFOLIO
            </Heading>
            <Heading
              mt="4"
              fontSize={{ base: "2xl", md: "4xl" }}
              color="whiteAlpha.600"
              as="h2"
            >
              S O O N
            </Heading>
          </Stack>
        </Container>
      </main>

      <footer></footer>
    </Box>
  );
}
