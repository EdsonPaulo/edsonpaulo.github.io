import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import React from "react";

const ContactForm: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <Box>
      <Text as="h2">{t("name")}</Text>
    </Box>
  );
};

export default ContactForm;
