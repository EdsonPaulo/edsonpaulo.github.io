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
      <SimpleGrid gap={["4", "8", "12"]} columns={{ base: 1, md: 1, lg: 2 }}>
        <Flex flexDirection="column" justifyContent="space-between">
          <Box>
            <SectionTitle title={t("section.contact.title")} />

            <Box ml={[4, 8, 12]}>
              <Text as="h2" textAlign="justify">
                If you have any request or question, don’t hesitate to use the
                form or the contact details below to reach me...
              </Text>

              <Flex mt="8" alignItems="center">
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
            </Box>
          </Box>

          <Flex alignSelf="center" justifyContent="center">
            <SocialNetworks />
          </Flex>
        </Flex>

        <Box p="8" borderRadius="lg" bg="dark.700" shadow="lg">
          <ContactForm onSubmitContactMessage={() => {}} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ContactSection;
