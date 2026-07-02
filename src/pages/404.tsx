 
import { Box, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Page404 = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="70vh" position="relative" overflow="hidden" textAlign="center" px="4">
      <Box className="blob blob-alt" top="10%" left="20%" w="40vw" h="40vw" bg="radial-gradient(circle, var(--c-violet) 0%, transparent 68%)" opacity="0.16" />
      <Box className="blob" bottom="5%" right="15%" w="35vw" h="35vw" bg="radial-gradient(circle, var(--c-coral) 0%, transparent 68%)" opacity="0.14" style={{ animationDelay: "4s" }} />

      <Box position="relative" zIndex="1">
        <Text className="editorial tiedye-text" fontSize={{ base: "32vw", md: "22vw" }} fontWeight="600" lineHeight="0.8" letterSpacing="-0.04em">
          404
        </Text>
        <Text className="editorial" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="500" color="var(--synced-text)" mt="4" mb="3">
          This thread doesn&apos;t exist.
        </Text>
        <Text color="var(--synced-muted)" maxW="36ch" mx="auto" mb="10" fontSize={{ base: "sm", md: "md" }}>
          The page you went looking for wandered off — or never existed. Happens to the best of us.
        </Text>
        <Link href="/" className="press-btn"
          style={{ fontFamily: "'Space Grotesk','Inter',sans-serif", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.78rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", background: "var(--accent)", color: "#fff", padding: "16px 32px", borderRadius: "9999px" }}>
          Back to the start <BsArrowRight />
        </Link>
      </Box>
    </Flex>
  );
};

export default Page404;
