import { Box, Flex, Heading, Text, Link as ChakraLink, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import MenuButton from "./MenuButton";
import ThemeToggle from "./ThemeToggle";

interface MenuItemProps {
  children: React.ReactNode;
}

const MenuItem = ({ children }: MenuItemProps) => {
  return (
    <Box>
      {children}
    </Box>
  );
};

const HeaderLink = ({ text, url, isSpecial = false }: { text: string; url: string; isSpecial?: boolean }) => {
  return (
    <MenuItem>
      <ChakraLink
        asChild
        px="3"
        py="2"
        rounded="md"
        fontWeight="medium"
        fontSize="sm"
        transition="all 0.2s"
        bg={isSpecial ? "brand.500" : "transparent"}
        color={isSpecial ? "white" : "fg.default"}
        _hover={{
          bg: isSpecial ? "brand.600" : "bg.subtle",
          textDecoration: "none",
        }}
      >
        <Link href={url}>{text}</Link>
      </ChakraLink>
    </MenuItem>
  );
};

interface HeaderProps {
  onOpen: () => void;
}

const Header = ({ onOpen }: HeaderProps) => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      justify="space-between"
      py="4"
    >
      <Heading fontWeight="bold" fontSize="xl" letterSpacing="tight">
        <Link href="/" passHref>
          <Text
            as="span"
            position="relative"
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: "0",
              left: "0",
              bg: "brand.500/30",
              zIndex: -1,
            }}
          >
            buddywhitman
          </Text>
        </Link>
      </Heading>

      <Box>
        <HStack gap="1" display={{ base: "none", md: "flex" }}>
          <HeaderLink text="about" url="/about" />
          <HeaderLink text="tech" url="/tech" />
          <HeaderLink text="contact" url="/contact" />
          <HeaderLink 
            text="resume" 
            url="https://github.com/buddywhitman/my-website/blob/main/Pulkit_Kumar_Resume.pdf" 
            isSpecial 
          />
          <ThemeToggle />
        </HStack>
        
        <HStack gap="1" display={{ base: "flex", md: "none" }}>
          <ThemeToggle />
          <MenuButton onClick={onOpen} />
        </HStack>
      </Box>
    </Flex>
  );
};

export default Header;
