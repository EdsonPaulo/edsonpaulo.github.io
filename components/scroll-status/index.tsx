import { Badge, Box, Button, Flex, IconButton, Stack } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const Status: FC<{ isActive?: boolean }> = ({ isActive }) => (
  <Box
    h={4}
    w={4}
    my="1.5"
    borderWidth="1px"
    borderRadius="full"
    borderColor="whiteAlpha.400"
    bg={isActive ? "accent" : "transparent"}
  />
);

const ScrollStatus: FC = () => {
  const { scrollYProgress, scrollY } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const [currentScrollY, setCurrentScrollY] = useState(0);

  useEffect(() => {
    yRange.onChange(setCurrentScrollY);
    console.log(yRange.get());
  }, [yRange]);

  useEffect(() => {
    console.log(currentScrollY);
  }, [currentScrollY]);

  return (
    <Flex
      p="8"
      top={0}
      right={0}
      minH="100vh"
      position="fixed"
      alignItems="flex-end"
      flexDirection="column"
      justifyContent="center"
    >
      <Box>
        <Status isActive={currentScrollY >= 0 && currentScrollY < 0.1} />
        <Status isActive={currentScrollY >= 0.1 && currentScrollY < 0.2} />
        <Status isActive={currentScrollY >= 0.2 && currentScrollY < 0.3} />
        <Status isActive={currentScrollY >= 0.3 && currentScrollY < 0.4} />
        <Status isActive={currentScrollY >= 0.4 && currentScrollY < 0.5} />
      </Box>
    </Flex>
  );
};

export default ScrollStatus;
