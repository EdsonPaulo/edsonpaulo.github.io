import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import React from "react";

import SocialNetworks from "../../social-networks";
import SectionTitle from "../section-title";

const PortfolioSection: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <Box minH="100%" flexDirection="column" justifyContent="space-between">
      <Box>
        <SectionTitle title={t("section.portfolio.title")} />
        <Text as="h2">{t("section.portfolio.subtitle")}</Text>
      </Box>
      <SocialNetworks />
    </Box>
  );
};

export default PortfolioSection;
