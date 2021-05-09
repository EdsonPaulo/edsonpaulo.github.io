import { Box, Text } from "@chakra-ui/react";
import { useI18n } from "next-rosetta";
import React from "react";

import { ILocaleTable } from "../../../i18n";

import SectionTitle from "../section-title";

const WorkHistorySection: React.FC = () => {
  const { t } = useI18n<ILocaleTable>();

  return (
    <Box w="full" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
      <Box>
        <SectionTitle title={t("section.history.title")} />
        <Text as="h2">{t("section.history.subtitle")}</Text>
      </Box>
    </Box>
  );
};

export default WorkHistorySection;
