import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import React from "react";

import SectionTitle from "../section-title";

const ContactSection: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <Box minH="100%" flexDirection="column" justifyContent="space-between">
      <Box>
        <SectionTitle title={t("section.contact.title")} />
        <Text as="h2">{t("section.contact.subtitle")}</Text>
      </Box>
    </Box>
  );
};

export default ContactSection;
