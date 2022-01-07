import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { CgPhone } from "react-icons/cg";
import { IoLogoWhatsapp, IoMail, IoMap } from "react-icons/io5";

import { useTranslation } from "../../../hooks";
import SocialNetworks from "../../social-networks";
import SectionTitle from "../section-title";
import ContactForm from "./contact-form";

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box w="full" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
      <Flex
        flex={1}
        flexDirection={{ base: "column", lg: "row" }}
        px={{ base: 4, md: 6, lg: 8 }}
      >
        <Flex flex={1} flexDirection="column" justifyContent="space-between">
          <SectionTitle title={t("section.contact.title")} />

          <Text as="p" textAlign="justify">
            {t("section.contact.subtitle")}
          </Text>

          <Stack my={6} spacing={3}>
            <Flex alignItems="center">
              <CgPhone />
              <Text ml="3">{t("me.phone")}</Text>
            </Flex>
            <Flex alignItems="center">
              <IoLogoWhatsapp />
              <Text ml="3">{t("me.whatsapp")}</Text>
            </Flex>
            <Flex alignItems="center">
              <IoMail />
              <Text ml="3">{t("me.email")}</Text>
            </Flex>
            <Flex alignItems="center">
              <IoMap />
              <Text ml="3">{t("me.address")}</Text>
            </Flex>
          </Stack>

          <Center mb={6}>
            <SocialNetworks />
          </Center>
        </Flex>

        <Box flex={1} ml={{ lg: 8 }}>
          <code>
            <Text>{`<form>`}</Text>
          </code>

          <Box
            my="2"
            w="full"
            shadow="lg"
            bg="dark.700"
            borderRadius="lg"
            p={{ base: 4, md: 6, lg: 8 }}
          >
            <Text
              mb={4}
              fontSize="2xl"
              textAlign="center"
              textTransform="uppercase"
            >
              {t("section.contact.formTitle")}
            </Text>
            <ContactForm onSubmitContactMessage={() => {}} />
          </Box>

          <code>
            <Text>{`<form>`}</Text>
          </code>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactSection;
