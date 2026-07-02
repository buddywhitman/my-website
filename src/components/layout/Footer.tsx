import { Box, Flex, Link as ChakraLink, Text, Container, HStack } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Container maxW="container.xl" py="8">
      <Flex
        as="footer"
        width="full"
        align="center"
        justify="space-between"
        borderTop="1px solid"
        borderColor="var(--synced-border)"
        pt="8"
        flexWrap="wrap"
        gap="4"
      >
        <Flex align="baseline" gap="2">
          <Text
            fontFamily="'EB Garamond', serif"
            fontStyle="italic"
            fontSize="md"
            color="var(--synced-text)"
          >
            buddywhitman
          </Text>
          <Text className="mono-label" fontSize="9px" color="var(--synced-muted)">
            © {new Date().getFullYear()}
          </Text>
        </Flex>

        <HStack gap="5">
          {[
            { label: "software", href: "/software", external: false },
            { label: "hardware", href: "/hardware", external: false },
            { label: "research", href: "/research", external: false },
            { label: "open-source", href: "/open-source", external: false },
            { label: "talks", href: "/talks", external: false },
            { label: "github", href: "https://github.com/buddywhitman", external: true },
          ].map(({ label, href, external }) => {
            const sharedProps = {
              className: "mono-label",
              fontSize: "9px",
              color: "var(--synced-muted)",
              _hover: { color: "var(--accent)" },
              transition: "color 200ms ease",
              textDecoration: "none",
            };

            if (external) {
              return (
                <ChakraLink
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...sharedProps}
                >
                  {label}
                </ChakraLink>
              );
            }

            return (
              <Link key={label} href={href} passHref legacyBehavior>
                <ChakraLink {...sharedProps}>
                  {label}
                </ChakraLink>
              </Link>
            );
          })}
        </HStack>

        <Text className="mono-label" fontSize="9px" color="var(--synced-muted)">
          Built with ♥ in <Link href="https://www.manipal.edu/mit.html" passHref legacyBehavior><ChakraLink color="var(--accent)">Manipal</ChakraLink></Link>
        </Text>
      </Flex>
    </Container>
  );
};

export default Footer;
