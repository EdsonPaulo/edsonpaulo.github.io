import { Button, IconButton } from "@chakra-ui/button";
import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { FiMail } from "react-icons/fi";
import { CgCoffee, CgHome, CgBriefcase, CgMail } from "react-icons/cg";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

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
          <Link href="#home">
            <i>
              <CgHome />
            </i>
            <Text>{t("nav.home")}</Text>
          </Link>
          <Link href="#skills">
            <i>
              <CgCoffee />
            </i>
            <Text>{t("nav.skills")}</Text>
          </Link>
          <Link href="#works">
            <i>
              <CgBriefcase />
            </i>
            <Text>{t("nav.portfolio")}</Text>
          </Link>
          <Link href="#contact">
            <i>
              <FiMail />
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
