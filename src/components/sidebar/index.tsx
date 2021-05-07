import { Button } from "@chakra-ui/button";
import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";
import {
  BiBriefcase,
  BiCodeAlt,
  BiEnvelope,
  BiUser,
  BiCoffee,
} from "react-icons/bi";

import styles from "./sidebar.module.scss";

// const AnimatedFlex = motion(Flex, { forwardMotionProps: true });

const Sidebar: React.FC = () => {
  const { pathname, locale, replace } = useRouter();
  const { t } = useTranslation("common");

  const handleChangeLanguage = (changeLanguageTo: "pt" | "en") => {
    if (locale && changeLanguageTo !== locale)
      replace(pathname, pathname, { locale: changeLanguageTo });
  };

  return (
    <Flex
      px="4"
      py="6"
      h="100vh"
      bg="dark.900"
      alignItems="center"
      position="fixed"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex alignItems="center" justifyContent="center" fontSize="4xl">
        <Heading>E</Heading>
        <Heading mx="1" color="accent">
          P
        </Heading>
        <Heading>G</Heading>
      </Flex>

      <nav>
        <Flex flexDirection="column" className={styles.nav}>
          <Link href="#about">
            <i>
              <BiUser />
            </i>
            <Text>{t("nav.about")}</Text>
          </Link>
          <Link href="#skills">
            <i>
              <BiCoffee />
            </i>
            <Text>{t("nav.skills")}</Text>
          </Link>
          <Link href="#experience">
            <i>
              <BiBriefcase />
            </i>
            <Text>{t("nav.experience")}</Text>
          </Link>
          <Link href="#portfolio">
            <i>
              <BiCodeAlt />
            </i>
            <Text>{t("nav.portfolio")}</Text>
          </Link>
          <Link href="#contact">
            <i>
              <BiEnvelope />
            </i>
            <Text>{t("nav.contact")}</Text>
          </Link>
        </Flex>
      </nav>

      <Flex fontSize="16pt" flexDirection="column">
        <Button
          fontSize="lg"
          letterSpacing="widest"
          _hover={{ bg: "dark.700" }}
          onClick={() => handleChangeLanguage("pt")}
          color={!locale || locale === "pt" ? "accent" : "light"}
        >
          PT
        </Button>
        <Button
          mt="1"
          fontSize="lg"
          letterSpacing="widest"
          _hover={{ bg: "dark.700" }}
          onClick={() => handleChangeLanguage("en")}
          color={locale === "en" ? "accent" : "light"}
        >
          EN
        </Button>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
