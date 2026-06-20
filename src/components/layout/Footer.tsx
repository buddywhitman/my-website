import { Box, Flex, Link, Text, Container, HStack } from "@chakra-ui/react";

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
            { label: "design", href: "https://dribbble.com/buddywhitman" },
            { label: "music", href: "https://2wenzy.vercel.app" },
            { label: "writing", href: "https://desihippe.vercel.app" },
            { label: "github", href: "https://github.com/buddywhitman" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label"
              fontSize="9px"
              color="var(--synced-muted)"
              _hover={{ color: "var(--accent)" }}
              transition="color 200ms ease"
              textDecoration="none"
            >
              {label}
            </Link>
          ))}
        </HStack>

        <Text className="mono-label" fontSize="9px" color="var(--synced-muted)">
          Built with ♥ in Manipal
        </Text>
      </Flex>
    </Container>
  );
};

export default Footer;
