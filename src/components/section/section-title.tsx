import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <Box mb="6">
    <code>
      <Text ml={["2", "4", "5"]}>{`<section>`}</Text>
    </code>
    <code>
      <Text ml={["4", "6", "8"]}>{`<h1>`}</Text>
    </code>
    <Heading
      as="h1"
      color="accent"
      ml={["8", "10", "12"]}
      textTransform="uppercase"
      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
    >
      {title}
    </Heading>
    <code>
      <Text ml={["4", "6", "8"]}>{`</h1>`}</Text>
    </code>
    <code>
      <Text ml={["4", "6", "6"]}>{`<p>`}</Text>
    </code>
  </Box>
);

export default SectionTitle;
