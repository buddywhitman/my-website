import { Flex, Link, Text, Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container maxW="container.xl" py="8">
      <Flex 
        as="footer" 
        width="full" 
        align="center" 
        justify="center"
        borderTop="1px solid"
        borderColor="border.subtle"
        pt="8"
      >
        <Text fontSize="sm" color="fg.muted">
          &copy; {new Date().getFullYear()} -{" "}
          <Link 
            href="https://buddywhitman.vercel.app" 
            color="fg.default"
            fontWeight="medium"
            _hover={{ color: "brand.500" }}
          >
            buddywhitman
          </Link>
        </Text>
      </Flex>
    </Container>
  );
};

export default Footer;
