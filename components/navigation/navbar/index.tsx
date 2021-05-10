import { Button, IconButton } from "@chakra-ui/button";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import {
  BiBriefcase,
  BiCodeAlt,
  BiCoffee,
  BiEnvelope,
  BiMenu,
  BiUser,
  BiX,
} from "react-icons/bi";

import { useTranslation } from "../../../hooks";
import ActiveLink from "../active-link";

const MotionStack = motion(Box, { forwardMotionProps: true });

const menuVariants = {
  open: {
    transform: "translateY(0%)",
  },
  closed: {
    transform: "translateY(-100%)",
  },
};
const menuTransition = {
  type: "tween",
  duration: 0.3,
  delay: 0.1,
};

const Navbar: FC = () => {
  const { pathname, locale, replace } = useRouter();
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((open) => !open);

  const handleChangeLanguage = (changeLanguageTo: "pt" | "en") => {
    if (locale && changeLanguageTo !== locale) {
      replace(pathname, pathname, { locale: changeLanguageTo });
      toggleOpen();
    }
  };

  return (
    <>
      <Flex
        py="4"
        top={0}
        w="full"
        h="60px"
        zIndex={90}
        bg="dark.900"
        position="fixed"
        alignItems="center"
        px={{ base: 8, md: 12 }}
        justifyContent="space-between"
      >
        <Flex alignItems="center" justifyContent="center" fontSize="4xl">
          <Heading>E</Heading>
          <Heading mx="1" color="accent">
            P
          </Heading>
          <Heading>G</Heading>
        </Flex>
        <IconButton
          aria-label="menu"
          fontSize="4xl"
          icon={isOpen ? <BiX /> : <BiMenu />}
          onClick={toggleOpen}
        />
      </Flex>

      <MotionStack
        pt="4"
        w="full"
        mt="60px"
        bg="dark.900"
        top={0}
        position="fixed"
        zIndex={89}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
        transform="translateY(-4em)"
      >
        <ActiveLink isMobile href="#about" onNavigate={toggleOpen}>
          <Flex alignItems="center">
            <BiUser />
            <Text ml="4">{t("nav.about")}</Text>
          </Flex>
        </ActiveLink>

        <ActiveLink isMobile href="#skills" onNavigate={toggleOpen}>
          <Flex alignItems="center">
            <BiCoffee />
            <Text ml="4">{t("nav.skills")}</Text>
          </Flex>
        </ActiveLink>

        <ActiveLink isMobile href="#history" onNavigate={toggleOpen}>
          <Flex alignItems="center">
            <BiBriefcase />
            <Text ml="4">{t("nav.history")}</Text>
          </Flex>
        </ActiveLink>

        <ActiveLink isMobile href="#portfolio" onNavigate={toggleOpen}>
          <Flex alignItems="center">
            <BiCodeAlt />
            <Text ml="4">{t("nav.portfolio")}</Text>
          </Flex>
        </ActiveLink>

        <ActiveLink isMobile href="#contact" onNavigate={toggleOpen}>
          <Flex alignItems="center">
            <BiEnvelope />
            <Text ml="4">{t("nav.contact")}</Text>
          </Flex>
        </ActiveLink>

        <Flex p="4" justifyContent="center" fontSize="16pt">
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
            ml="5"
            fontSize="lg"
            letterSpacing="widest"
            _hover={{ bg: "dark.700" }}
            onClick={() => handleChangeLanguage("en")}
            color={locale === "en" ? "accent" : "light"}
          >
            EN
          </Button>
        </Flex>
      </MotionStack>
    </>
  );
};

export default Navbar;
