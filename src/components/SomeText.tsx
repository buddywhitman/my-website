import {
  Box,
  Flex,
  Heading,
  Icon,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const springConfig = { type: "spring", duration: 0.5, bounce: 0.2 };

const SomeText = () => {
  return (
    <VStack
      align="flex-start"
      gap={6}
      p={{ base: 6, md: 10 }}
      maxW="2xl"
    >
      <Box>
        <MotionHeading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.1 }}
          fontWeight="800"
          fontSize={{ base: "5xl", md: "7xl" }}
          letterSpacing="tight"
          lineHeight="0.9"
          color="fg.default"
        >
          Pulkit Kumar
        </MotionHeading>
        <MotionText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.2 }}
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="medium"
          color="fg.muted"
          mt={4}
        >
          Founding Engineer & Researcher
        </MotionText>
      </Box>

      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springConfig, delay: 0.3 }}
        fontSize={{ base: "md", md: "lg" }}
        lineHeight="tall"
        color="fg.default"
      >
        Pre-final year EE undergrad. I build production inference infrastructure,
        safety-critical embedded systems, and real-time voice AI. Co-authored a
        Q1 Springer Nature paper; 3 patents filed. Currently founding engineer
        on a health-tech voice AI platform serving hospital networks at scale.
      </MotionText>

      <MotionFlex
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springConfig, delay: 0.4 }}
        gap={6}
      >
        <ChakraLink
          href="https://www.linkedin.com/in/buddywhitman"
          target="_blank"
          _hover={{ color: "brand.500", transform: "translateY(-2px)" }}
          transition="all 0.2s"
        >
          <Icon as={BsLinkedin} boxSize={6} />
        </ChakraLink>
        <ChakraLink
          href="https://github.com/buddywhitman"
          target="_blank"
          _hover={{ color: "brand.500", transform: "translateY(-2px)" }}
          transition="all 0.2s"
        >
          <Icon as={BsGithub} boxSize={6} />
        </ChakraLink>
      </MotionFlex>
    </VStack>
  );
};

export default SomeText;
