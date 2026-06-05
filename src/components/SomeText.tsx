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
import { Magnetic } from "./motion/Magnetic";

const MotionHeading = motion(Heading) as any;
const MotionText = motion(Text) as any;
const MotionFlex = motion(Flex) as any;

const springConfig = { type: "spring", duration: 0.8, bounce: 0.2 };

const SomeText = () => {
  return (
    <VStack
      align="flex-start"
      gap={8}
      p={{ base: 6, md: 10 }}
      maxW="3xl"
    >
      <Box>
        <MotionHeading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.1 } as any}
          fontWeight="900"
          fontSize={{ base: "7xl", md: "9xl", lg: "10xl" }}
          letterSpacing="tight"
          lineHeight="0.9"
          color="white"
          fontFamily="display"
          mb={12}
          bgGradient="to-br"
          gradientFrom="white"
          gradientTo="whiteAlpha.600"
          bgClip="text"
        >
          Silicon to<br/>Intelligence.
        </MotionHeading>
        <MotionText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.3 } as any}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="900"
          color="brand.400"
          letterSpacing="tighter"
          textTransform="uppercase"
        >
          Pulkit Kumar
        </MotionText>
        <MotionText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.4 } as any}
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          color="whiteAlpha.800"
          mt={4}
          letterSpacing="wide"
        >
          FULL-STACK INFERENCE ARCHITECT
        </MotionText>
      </Box>

      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springConfig, delay: 0.5 } as any}
        fontSize={{ base: "lg", md: "xl" }}
        lineHeight="relaxed"
        color="whiteAlpha.700"
        maxW="2xl"
        borderLeft="4px solid"
        borderColor="brand.500"
        pl={8}
        py={2}
      >
        Architecting production-grade infrastructure from **RTL-level hardware** 
        up to **agentic AI orchestration**. Specializing in low-latency systems 
        for HFT, hospital networks, and autonomous racing. Q1 Nature Author.
      </MotionText>

      <MotionFlex
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springConfig, delay: 0.6 } as any}
        gap={8}
        pt={4}
      >
        <Magnetic>
          <ChakraLink
            href="https://www.linkedin.com/in/buddywhitman"
            target="_blank"
            color="whiteAlpha.700"
            _hover={{ color: "brand.500" }}
            transition="color 0.2s"
          >
            <Icon as={BsLinkedin} boxSize={8} />
          </ChakraLink>
        </Magnetic>
        <Magnetic>
          <ChakraLink
            href="https://github.com/buddywhitman"
            target="_blank"
            color="whiteAlpha.700"
            _hover={{ color: "brand.500" }}
            transition="color 0.2s"
          >
            <Icon as={BsGithub} boxSize={8} />
          </ChakraLink>
        </Magnetic>
      </MotionFlex>
    </VStack>
  );
};

export default SomeText;
