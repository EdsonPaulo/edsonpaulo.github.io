import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";
import { IoHeart, IoMail, IoLogoWhatsapp, IoChevronUp } from "react-icons/io5";

import SocialNetworks from "../social-networks";

const Footer: React.FC = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <Box ml="100px" px="12" py="6" bg="dark.900" color="gray.300" fontSize="lg">
      <Flex mb="4" alignItems="center" justifyContent="space-between">
        <Box>
          <Text letterSpacing="widest">{`(EPG) => {};`}</Text>
          <Text color="gray.500">{t("me.fullname")}</Text>
        </Box>

        <Box>
          <Flex alignItems="center">
            <IoMail />
            <Text ml="3">{t("me.email")}</Text>
          </Flex>
          <Flex alignItems="center">
            <IoLogoWhatsapp />
            <Text ml="3">{t("me.whatsapp")}</Text>
          </Flex>
        </Box>
      </Flex>

      <Flex alignItems="center" justifyContent="space-between">
        <Box />
        <Flex alignItems="center" justifyContent="center">
          <Text>{t("footer.created-by")}</Text>
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
          onClick={() => router.replace("#home")}
        />
      </Flex>
    </Box>
  );
};

export default Footer;
