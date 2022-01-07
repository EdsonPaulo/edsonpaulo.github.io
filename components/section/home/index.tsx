import { Box, Flex, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";
import React from "react";

import { useTranslation } from "../../../hooks";
import SocialNetworks from "../../social-networks";

const HomeSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Flex
      w="full"
      id="about"
      minH="90vh"
      flexDirection="column"
      justifyContent="space-between"
      px={{ base: 5, md: 10 }}
      pb={{ base: 8, md: 12 }}
      pt={{ base: 8, md: 6 }}
    >
      <Box>
        <code>
          <Text>{`</head>`}</Text>
        </code>
        <code>
          <Text>{`<body>`}</Text>
        </code>
        <code>
          <Text ml={{ base: 2, md: 4, lg: 5 }}>{`<section>`}</Text>
        </code>
        <code>
          <Text ml={{ base: 4, md: 6, lg: 8 }}>{`<h1>`}</Text>
        </code>

        <Flex
          flexWrap="wrap"
          alignItems="center"
          ml={{ base: 8, md: 10, lg: 12 }}
          fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
        >
          <Heading as="h1" color="light">
            {`${t("section.about.introduce")}`}
          </Heading>

          <Heading mx="2" as="h1" color="accent">
            {`${t("me.firstname")},`}
          </Heading>

          <Heading as="h1" color="light">
            {`${t("section.about.subtitle")}.`}
          </Heading>
        </Flex>

        <code>
          <Text ml={{ base: 4, md: 6, lg: 8 }}>{`</h1>`}</Text>
        </code>

        <SimpleGrid
          mt="8"
          gap={["4", "8", "12"]}
          columns={{ base: 1, md: 1, lg: 2 }}
        >
          <Box my="4" ml={["6", "8", "10"]}>
            <code>
              <Text>{`const onLoadInfo = () => {`}</Text>
            </code>

            <Flex alignItems="center">
              <Box
                ml="16"
                my="2"
                borderRadius="2xl"
                borderWidth="4px"
                borderColor="dark.500"
                width={250}
                height={265}
                overflow="hidden"
              >
                <Image
                  src="/img/epg.jpg"
                  alt="edson photo"
                  width={250}
                  height={265}
                />
              </Box>

              <Box ml="4">
                <Text fontSize="2xl" color="light">
                  Web Developer
                </Text>
                <Text fontSize="2xl" color="light">
                  Mobile Developer
                </Text>
                <Text fontSize="2xl" color="accent">
                  UI Designer
                </Text>
              </Box>
            </Flex>

            <code>
              <Text>{`}`}</Text>
            </code>
          </Box>

          <Box>
            <code>
              <Text>{`<about>`}</Text>
            </code>

            <Box my="3" p="6" bg="dark.700" shadow="lg" borderRadius="lg">
              <Text>{t("welcome")}</Text>
              <Text my="2" textAlign="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                id nisi finibus, suscipit libero vestibulum, porttitor purus.
                Duis felis lectus, luctus vel lacus quis, vulputate interdum
                elit.
              </Text>
              <Text my="2" textAlign="justify">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Vivamus id est non mi rutrum
                condimentum. Duis felis lectus, luctus vel lacus quis, vulputate
                interdum elit.
              </Text>
            </Box>

            <code>
              <Text>{`</about>`}</Text>
            </code>
          </Box>
        </SimpleGrid>
      </Box>

      <Box mt={{ base: "8" }} alignSelf="center">
        <SocialNetworks />
      </Box>
    </Flex>
  );
};

export default HomeSection;
