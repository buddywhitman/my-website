import { Box, Flex, Text, Link as ChakraLink, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import MenuButton from "./MenuButton";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { text: "about", url: "/about", external: false },
  { text: "software", url: "/software", external: false },
  { text: "hardware", url: "/hardware", external: false },
  { text: "research", url: "/research", external: false },
  { text: "open-source", url: "/open-source", external: false },
  { text: "design", url: "/design", external: false },
  { text: "blog", url: "/blog", external: false },
  { text: "contact", url: "/contact", external: false },
];

interface NavLinkItemProps {
  text: string;
  url: string;
  isSpecial?: boolean;
  external?: boolean;
}

const HeaderLink = ({ text, url, isSpecial = false, external = false }: NavLinkItemProps) => {
  const router = useRouter();
  const isActive = !external && router.pathname === url;

  const sharedStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', 'Inter', sans-serif",
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    textDecoration: "none",
    padding: "6px 10px",
    color: isSpecial ? "var(--void)" : isActive ? "var(--accent)" : "var(--synced-text)",
    background: isSpecial ? "var(--accent)" : "transparent",
    borderRadius: isSpecial ? "4px" : "0",
    transition: "color 200ms ease",
    display: "inline-block",
    position: "relative",
  };

  if (external) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link-animated"
        style={sharedStyle}
        onMouseEnter={(e) => { if (!isSpecial) e.currentTarget.style.color = "var(--accent)"; }}
        onMouseLeave={(e) => { if (!isSpecial) e.currentTarget.style.color = isActive ? "var(--accent)" : "var(--synced-text)"; }}
      >
        {text}
      </a>
    );
  }

  return (
    <Link
      href={url}
      className="nav-link-animated"
      style={sharedStyle}
      onMouseEnter={(e) => { if (!isSpecial) (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
      onMouseLeave={(e) => { if (!isSpecial) (e.currentTarget as HTMLElement).style.color = isActive ? "var(--accent)" : "var(--synced-text)"; }}
    >
      {text}
    </Link>
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
      py="5"
      borderBottom="1px solid"
      borderColor="var(--synced-border)"
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "6px" }}>
        <Text
          as="span"
          fontFamily="'EB Garamond', Georgia, serif"
          fontStyle="italic"
          fontWeight="500"
          fontSize="xl"
          color="var(--synced-text)"
          transition="color 200ms ease"
          _hover={{ color: "var(--accent)" }}
        >
          buddywhitman
        </Text>
        <Text as="span" className="mono-label" fontSize="9px" color="var(--synced-muted)">
          ©2026
        </Text>
      </Link>

      {/* Desktop nav */}
      <HStack gap="0" display={{ base: "none", lg: "flex" }} align="center">
        {NAV_LINKS.map((link) => (
          <HeaderLink key={link.url} text={link.text} url={link.url} external={link.external} />
        ))}
        <Box ml="3">
          <HeaderLink text="resume" url="/resume" isSpecial />
        </Box>
        <Box ml="2">
          <ThemeToggle />
        </Box>
      </HStack>

      {/* Mobile controls */}
      <HStack gap="2" display={{ base: "flex", lg: "none" }}>
        <ThemeToggle />
        <MenuButton onClick={onOpen} />
      </HStack>
    </Flex>
  );
};

export default Header;
