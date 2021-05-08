import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import React from "react";
import { IoMail, IoLogoWhatsapp, IoMap } from "react-icons/io5";
import { CgPhone } from "react-icons/cg";

import SocialNetworks from "../../social-networks";
import SectionTitle from "../section-title";
import ContactForm from "./contact-form";

const ContactSection: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <Box>
      <SectionTitle title={t("section.contact.title")} />

      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }}>
        <Box>
          <Text as="h2">{t("section.contact.subtitle")}</Text>

          <Flex alignItems="center">
            <CgPhone />
            <Text ml="3">{t("me.phone")}</Text>
          </Flex>
          <Flex my="3" alignItems="center">
            <IoLogoWhatsapp />
            <Text ml="3">{t("me.whatsapp")}</Text>
          </Flex>
          <Flex alignItems="center">
            <IoMail />
            <Text ml="3">{t("me.email")}</Text>
          </Flex>
          <Flex mt="3" mb="6" alignItems="center">
            <IoMap />
            <Text ml="3">{t("me.address")}</Text>
          </Flex>

          <SocialNetworks />
        </Box>

        <Box p="6" borderRadius="lg" bg="dark.700" shadow="lg">
          <ContactForm />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ContactSection;
