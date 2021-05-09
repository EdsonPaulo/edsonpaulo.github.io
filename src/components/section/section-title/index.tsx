import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <Box mb={6}>
    <code>
      <Text>{`<section>`}</Text>
    </code>
    <code>
      <Text ml={{ base: 4, md: 6, lg: 8 }}>{`<h1>`}</Text>
    </code>
    <Heading
      as="h1"
      color="accent"
      ml={{ base: 8, md: 10, lg: 12 }}
      textTransform="uppercase"
      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
    >
      {title}
    </Heading>
    <code>
      <Text ml={{ base: 4, md: 6, lg: 8 }}>{`</h1>`}</Text>
    </code>
    <code>
      <Text ml={{ base: 4, md: 6, lg: 8 }}>{`<p>`}</Text>
    </code>
  </Box>
);

export default SectionTitle;
