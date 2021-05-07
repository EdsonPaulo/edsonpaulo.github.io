import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <Box mb="6">
    <code>
      <Text>{`</head>`}</Text>
    </code>
    <code>
      <Text ml="2">{`<body>`}</Text>
    </code>
    <code>
      <Text ml="6">{`<br />`}</Text>
    </code>
    <code>
      <Text ml="6">{`<h1>`}</Text>
    </code>
    <Heading fontSize="7xl" ml="12" as="h1" color="accent">
      {title}
    </Heading>
    <code>
      <Text ml="6">{`</h1>`}</Text>
    </code>
    <code>
      <Text ml="6">{`<p>`}</Text>
    </code>
  </Box>
);

export default SectionTitle;
