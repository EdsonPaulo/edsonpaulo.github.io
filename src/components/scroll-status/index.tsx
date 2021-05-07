import { Badge, Flex } from "@chakra-ui/react";
import React from "react";
import { motion, useViewportScroll } from "framer-motion";

const ScrollStatus: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  return (
    <Flex>
      <Badge />
      <Badge />
      <Badge my="3" />
      <Badge />
      <Badge />
    </Flex>
  );
};

export default ScrollStatus;
