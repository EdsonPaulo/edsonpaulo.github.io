import { IconButton } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import SocialNetworks from "../../social-networks";
import SectionTitle from "../section-title";

const HomeSection: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <Box minH="100%" flexDirection="column" justifyContent="space-between">
      <Box>
        <SectionTitle title={t("section.about.title")} />
        <Text as="h2">{t("section.about.subtitle")}</Text>
        <Text>{t("welcome")}</Text>
        <Text textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
          nisi finibus, suscipit libero vestibulum, porttitor purus. Duis felis
          lectus, luctus vel lacus quis, vulputate interdum elit. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Vivamus id est non mi rutrum condimentum.
        </Text>
      </Box>
      <SocialNetworks />
    </Box>
  );
};

export default HomeSection;
