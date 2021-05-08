import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import React from "react";

import SectionTitle from "../section-title";

const ExperienceSection: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <Box>
      <Box>
        <SectionTitle title={t("section.experience.title")} />
        <Text as="h2">{t("section.experience.subtitle")}</Text>
      </Box>
    </Box>
  );
};

export default ExperienceSection;
