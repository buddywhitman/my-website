import {
  Box,
  Flex,
  Heading,
  Icon,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaOrcid } from "react-icons/fa";
import { Magnetic } from "./motion/Magnetic";
import { useRef } from "react";

const MotionHeading = motion(Heading) as any;
const MotionText = motion(Text) as any;
const MotionFlex = motion(Flex) as any;

const springConfig = { type: "spring", duration: 0.8, bounce: 0.2 };

const SomeText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <VStack
      ref={ref}
      align="flex-start"
      gap={8}
      p={{ base: 6, md: 10 }}
      maxW="3xl"
      style={{ y, opacity } as any}
      as={motion.div}
    >
      <Box>
        <MotionHeading
          className="organic-gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.1 } as any}
          fontWeight="900"
          fontSize={{ base: "7xl", md: "9xl", lg: "10xl" }}
          letterSpacing="tight"
          lineHeight="0.9"
          fontFamily="display"
          fontStyle="italic"
          mb={12}
        >
          Silicon to<br/>Intelligence.
        </MotionHeading>
        <MotionText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.3 } as any}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="900"
          color="var(--synced-text)"
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
          color="var(--synced-muted)"
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
        color="var(--synced-muted)"
        maxW="2xl"
        borderLeft="4px solid"
        borderColor="brand.500"
        pl={8}
        py={2}
      >
        Architecting production-grade infrastructure from <strong>RTL-level hardware</strong> 
        up to <strong>agentic AI orchestration</strong>. Specializing in low-latency systems 
        for HFT, hospital networks, and autonomous racing. Springer Nature Author.
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
            color="var(--synced-muted)"
            _hover={{ color: "brand.500", transform: "scale(1.2) rotate(10deg)" }}
            transition="all 0.2s"
          >
            <Icon as={BsLinkedin} boxSize={8} />
          </ChakraLink>
        </Magnetic>
        <Magnetic>
          <ChakraLink
            href="https://github.com/buddywhitman"
            target="_blank"
            color="var(--synced-muted)"
            _hover={{ color: "brand.500", transform: "scale(1.2) rotate(-10deg)" }}
            transition="all 0.2s"
          >
            <Icon as={BsGithub} boxSize={8} />
          </ChakraLink>
        </Magnetic>
        <Magnetic>
          <ChakraLink
             href="https://orcid.org/0000-0003-4078-1780"
            target="_blank"
            color="var(--synced-muted)"
            _hover={{ color: "brand.500", transform: "scale(1.2) rotate(10deg)" }}
            transition="all 0.2s"
          >
            <Icon as={FaOrcid} boxSize={8} />
          </ChakraLink>
        </Magnetic>
      </MotionFlex>
    </VStack>
  );
};

export default SomeText;
