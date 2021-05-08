import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import React from "react";

import SectionTitle from "../section-title";

const SkillsSection: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <Box>
      <Box>
        <SectionTitle title={t("section.skills.title")} />
        <Text as="h2">{t("section.skills.subtitle")}</Text>
      </Box>
    </Box>
  );
};

export default SkillsSection;
