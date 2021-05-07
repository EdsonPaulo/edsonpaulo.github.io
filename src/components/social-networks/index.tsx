import { Flex, Link } from "@chakra-ui/react";
import React from "react";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

// import { Container } from './styles';

const SocialNetworks: React.FC = () => {
  return (
    <>
      <Flex alignItems="center">
        <Link>
          <FaGithubAlt />
        </Link>
        <Link ml="3">
          <FaLinkedinIn />
        </Link>
      </Flex>
      <Flex mt="3" alignItems="center">
        <Link>
          <FaInstagram />
        </Link>
        <Link ml="3">
          <FaFacebookF />
        </Link>
      </Flex>
    </>
  );
};

export default SocialNetworks;
