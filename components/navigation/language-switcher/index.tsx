import { Button, Flex } from "@chakra-ui/react";
import React from "react";

import { Languages } from "../../../constants/enums";
import { useTranslation } from "../../../hooks";
import { storeLocaleCookie } from "../../../utils";

const LanguageSwitcher: React.FC = () => {
  const { activeLanguage, locale } = useTranslation();

  const handleChangeLanguage = async (e: any) => {
    e.preventDefault();
    const newLanguage = e.target?.value || Languages.English;
    if (newLanguage !== activeLanguage) {
      storeLocaleCookie(newLanguage);
      const { langDictionary = {} } = await import(
        `../../../i18n/${newLanguage}`
      );
      locale(newLanguage, langDictionary);
    }
  };

  return (
    <Flex
      p={{ base: 4, md: 4, lg: 0 }}
      flexDirection={{ lg: "column" }}
      justifyContent="center"
      fontSize="16pt"
    >
      <Button
        fontSize="lg"
        letterSpacing="widest"
        _hover={{ bg: "dark.700" }}
        value={Languages.Portuguese}
        onClick={handleChangeLanguage}
        color={activeLanguage === Languages.Portuguese ? "accent" : "light"}
      >
        PT
      </Button>
      <Button
        ml={{ base: 5, lg: 0 }}
        fontSize="lg"
        letterSpacing="widest"
        _hover={{ bg: "dark.700" }}
        value={Languages.English}
        onClick={handleChangeLanguage}
        color={activeLanguage === Languages.English ? "accent" : "light"}
      >
        EN
      </Button>
    </Flex>
  );
};

export default LanguageSwitcher;
