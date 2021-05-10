import { Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const ActiveLink: React.FC<{
  href: string;
  isMobile?: boolean;
  onNavigate?: () => void;
}> = ({ href, children, isMobile, onNavigate }) => {
  const { asPath, push } = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    if (onNavigate) onNavigate();
    push(href);
  };

  return isMobile ? (
    <Link
      py="4"
      display="flex"
      alignItems="center"
      px={{ base: 8, md: 16 }}
      textTransform="uppercase"
      justifyContent="space-between"
      _hover={{ textDecoration: "none" }}
      transition="all 200ms ease-in-out"
      href={href}
      onClick={handleClick}
      color={asPath.includes(href) ? "accent" : "light"}
    >
      {children}
      <BiChevronRight />
    </Link>
  ) : (
    <Link
      href={href}
      onClick={handleClick}
      color={asPath.includes(href) ? "accent" : "light"}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
