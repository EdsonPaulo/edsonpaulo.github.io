import { IconButton } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";

const HomeSection: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <Box>
      <Text>{t("home")}</Text>
      <Heading my="7">{`<H1>Edson Paulo Gregório</H1>`}</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nisi
        finibus, suscipit libero vestibulum, porttitor purus. Duis felis lectus,
        luctus vel lacus quis, vulputate interdum elit. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Vivamus id est non mi rutrum condimentum.
      </Text>
    </Box>
  );
};

export default HomeSection;
