import { Flex, Link } from "@chakra-ui/react";
import React, { FC } from "react";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaEnvelopeSquare,
} from "react-icons/fa";

const SocialButton: FC<{ href: string }> = ({ children, href }) => (
  <Link
    p="2"
    mx="2"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    bg="light"
    color="dark.900"
    borderRadius="full"
    _hover={{ color: "light" }}
  >
    {children}
  </Link>
);

const SocialNetworks: FC = () => {
  return (
    <Flex alignItems="center">
      <SocialButton href="https://github.com/EdsonPaulo">
        <FaGithubAlt />
      </SocialButton>

      <SocialButton href="https://linkedin.com/in/edsonpaulo1">
        <FaLinkedinIn />
      </SocialButton>

      <SocialButton href="https://instagram.com/edsonpaulo24">
        <FaInstagram />
      </SocialButton>

      <SocialButton href="https://facebook.com/EdsonGregorioEG">
        <FaFacebookF />
      </SocialButton>
    </Flex>
  );
};

export default SocialNetworks;
