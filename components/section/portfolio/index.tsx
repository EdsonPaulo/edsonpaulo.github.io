import { Box, Text } from "@chakra-ui/react";
import React from "react";

import { useTranslation } from "../../../hooks";
import SectionTitle from "../section-title";

const PortfolioSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box w="full" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
      <Box>
        <SectionTitle title={t("section.portfolio.title")} />
        <Text as="h2">{t("section.portfolio.subtitle")}</Text>
      </Box>
    </Box>
  );
};

export default PortfolioSection;
