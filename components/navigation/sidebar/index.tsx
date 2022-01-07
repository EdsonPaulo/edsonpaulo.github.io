import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import {
  BiBriefcase,
  BiCodeAlt,
  BiCoffee,
  BiEnvelope,
  BiUser,
} from "react-icons/bi";

import { useTranslation } from "../../../hooks";
import ActiveLink from "../active-link";
import LanguageSwitcher from "../language-switcher";
import styles from "../navigation.module.scss";

const Sidebar: FC = () => {
  const { t } = useTranslation();

  return (
    <Flex
      px="4"
      py="6"
      left={0}
      w="100px"
      h="100vh"
      bg="dark.900"
      position="fixed"
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
        <Flex flexDirection="column" className={styles.sidebar}>
          <ActiveLink href="#about">
            <i>
              <BiUser />
            </i>
            <Text>{t("nav.about")}</Text>
          </ActiveLink>
          <ActiveLink href="#skills">
            <i>
              <BiCoffee />
            </i>
            <Text>{t("nav.skills")}</Text>
          </ActiveLink>
          <ActiveLink href="#history">
            <i>
              <BiBriefcase />
            </i>
            <Text>{t("nav.history")}</Text>
          </ActiveLink>
          <ActiveLink href="#portfolio">
            <i>
              <BiCodeAlt />
            </i>
            <Text>{t("nav.portfolio")}</Text>
          </ActiveLink>
          <ActiveLink href="#contact">
            <i>
              <BiEnvelope />
            </i>
            <Text>{t("nav.contact")}</Text>
          </ActiveLink>
        </Flex>
      </nav>

      <LanguageSwitcher />
    </Flex>
  );
};

export default Sidebar;
