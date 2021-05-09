import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useI18n } from "next-rosetta";
import { useRouter } from "next/router";
import React from "react";
import { IoHeart, IoMail, IoLogoWhatsapp, IoChevronUp } from "react-icons/io5";
import { ILocaleTable } from "../../i18n";

const Footer: React.FC = () => {
  const { t } = useI18n<ILocaleTable>();
  const router = useRouter();

  return (
    <Box
      ml={{ lg: "100px" }}
      px="12"
      py="6"
      bg="dark.900"
      color="gray.300"
      fontSize="lg"
    >
      <Flex
        mb="4"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "unset" }}
      >
        <Box mb={{ base: "4", md: "unset" }}>
          <Text color="gray.500">{t("me.fullname")}</Text>
          <Text color="gray.500">{t("me.shortDescription")}</Text>
        </Box>

        <Flex
          flexDirection="column"
          alignItems={{ base: "center", md: "unset" }}
        >
          <Flex alignItems="center">
            <IoMail />
            <Text ml="3">{t("me.email")}</Text>
          </Flex>
          <Flex alignItems="center">
            <IoLogoWhatsapp />
            <Text ml="3">{t("me.whatsapp")}</Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex alignItems="center" justifyContent="space-between">
        <Box />
        <Flex alignItems="center" justifyContent="center">
          <Text>{t("footer.createdBy")}</Text>
          <Text ml="2">
            <IoHeart color="crimson" />
          </Text>
        </Flex>

        <IconButton
          p="1"
          fontSize="3xl"
          bg="dark.800"
          aria-label="ir para o topo"
          icon={<IoChevronUp />}
          borderColor="dark.700"
          borderWidth="1px"
          onClick={() => router.replace("#about")}
        />
      </Flex>
    </Box>
  );
};

export default Footer;
