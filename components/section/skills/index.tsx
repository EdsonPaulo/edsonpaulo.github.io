import { Box, Text } from "@chakra-ui/react";
import { useI18n } from "next-rosetta";
import { ILocaleTable } from "../../../i18n";import React from "react";

import SectionTitle from "../section-title";

const SkillsSection: React.FC = () => {
  const { t } = useI18n<ILocaleTable>();

  return (
    <Box w="full" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
      <Box>
        <SectionTitle title={t("section.skills.title")} />
        <Text as="h2">{t("section.skills.subtitle")}</Text>
      </Box>
    </Box>
  );
};

export default SkillsSection;
