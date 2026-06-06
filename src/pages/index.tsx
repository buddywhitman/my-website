import {
  Box,
  Heading,
  Flex,
  Spacer,
  Text,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import FeaturedProject from "components/FeaturedProject";
import ImageBox from "components/ImageBox";
import SomeText from "components/SomeText";
import ThemedButton from "components/ThemedButton";
import FeaturedProjectList from "data/featured_projects";
import SchemaMarkup from "components/SchemaMarkup";

const MotionBox = motion(Box) as any;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.2,
    } as any,
  },
};

const Home = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pulkit Kumar",
    url: "https://buddywhitman.vercel.app",
    jobTitle: "Founding Engineer & HPC Researcher",
    worksFor: {
      "@type": "Organization",
      name: "Fettle",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Manipal Institute of Technology",
    },
    sameAs: [
      "https://github.com/buddywhitman",
      "https://www.linkedin.com/in/buddywhitman",
    ],
    description: "Systems Architect specializing in Agentic AI, Efficient Inference, and High-Performance Embedded Computing. Q1 Nature Author & Patent Filer.",
  };

  return (
    <Box position="relative" overflow="hidden">
      {/* Cinematic Background Ambient Effect */}
      <Box
        position="absolute"
        top="-10%"
        left="-10%"
        width="120%"
        height="120%"
        zIndex="-1"
        opacity="0.4"
        filter="blur(120px)"
        background="radial-gradient(circle at 20% 30%, var(--chakra-colors-brand-900) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--chakra-colors-brand-800) 0%, transparent 40%)"
        pointerEvents="none"
      />

      <SchemaMarkup data={personSchema} />
      
      <MotionBox
        initial="visible"
        animate="visible"
        variants={containerVariants}
        px={{ base: 6, md: 10, lg: 20 }}
        py={20}
      >
        {/* Hero Section */}
        <MotionBox mb={32}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={20}
          >
            <Box flex="1.2">
              <SomeText />
            </Box>
            <Box flex="1" display={{ base: "none", lg: "block" }} position="relative">
              <Box
                position="absolute"
                inset="-20px"
                bg="brand.500/20"
                filter="blur(40px)"
                borderRadius="full"
                zIndex="-1"
              />
              <ImageBox
                image="/hero_2026.webp"
                height={800}
                width={800}
                alt="Pulkit Kumar - Full-Stack Inference Architect"
              />
            </Box>
          </Flex>
        </MotionBox>

        {/* About Section */}
        <MotionBox mb={48}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={20}
            align="center"
          >
            <VStack align="flex-start" flex="1" gap={8}>
              <Heading size="4xl" fontWeight="900" letterSpacing="tight" color="fg.default">
                2026 / Performance Architecture
              </Heading>
              <Text fontSize="2xl" color="fg.muted" lineHeight="relaxed">
                I architect production-grade infrastructure where <strong>determinism meets 
                intelligence</strong>. My work spans from <strong>RTL-level hardware optimization</strong> 
                for low-latency controllers to <strong>agentic AI orchestration</strong> for 
                safety-critical environments.
              </Text>
              <Text fontSize="2xl" color="fg.muted" lineHeight="relaxed">
                Currently, I&apos;m a founding engineer at <strong>Fettle</strong>, where I lead 
                software architecture for distributed voice AI. I also lead automotive 
                electronics for <strong>SolarMobil</strong>, designing stochastic telemetry engines 
                that fuse vehicle state with environmental data in real-time.
              </Text>
              <Stack direction={{ base: "column", sm: "row" }} gap={6} pt={8} width="full">
                <Link href="/tech" passHref>
                  <ThemedButton size="xl" bg="brand.500" color="fg.default" px={10} width={{ base: "full", sm: "auto" }}>
                    Full Stack Capability
                  </ThemedButton>
                </Link>
                <Link href="/about" passHref>
                  <ThemedButton variant="outline" size="xl" px={10} width={{ base: "full", sm: "auto" }}>
                    Research Journal <BsArrowRight style={{ marginLeft: '12px' }} />
                  </ThemedButton>
                </Link>
              </Stack>
            </VStack>
          </Flex>
        </MotionBox>

        {/* Featured Work Section */}
        <MotionBox 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          mb={32}
        >
          <Heading size="3xl" fontWeight="800" letterSpacing="tight" color="fg.default" mb={12}>
            Strategic Engineering
          </Heading>
          <VStack gap={20} align="stretch">
            {FeaturedProjectList.map((value) => (
              <FeaturedProject
                name={value.name}
                description={value.description}
                textc="whiteAlpha.700"
                images={[value.images[0], value.images[1]]}
                key={value.id}
                tags={value.tags}
                link_icons={value.icons}
                height={value.height}
                width={value.width}
                alt={value.alt}
                reversed={value.reversed}
              />
            ))}
          </VStack>
          <Flex justify="center" mt={16}>
            <Link href="/tech" passHref>
              <ThemedButton variant="outline" px={12}>
                Detailed Systems Log
              </ThemedButton>
            </Link>
          </Flex>
        </MotionBox>

        {/* Contact CTA */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          bg="brand.500"
          color="fg.default"
          p={{ base: 8, md: 16 }}
          rounded="3xl"
          textAlign="center"
        >
          <VStack gap={8}>
            <Heading size="4xl" fontWeight="900" letterSpacing="tight" color="fg.default">
              Architecting the High-Stakes.
            </Heading>
            <Text fontSize="xl" opacity="0.9" maxW="2xl" color="fg.default">
              Actively seeking roles in <strong>HFT</strong>, <strong>Inference Infrastructure</strong>, and 
              <strong>Safety-Critical Embedded Systems</strong>. I build the systems that cannot fail.
            </Text>
            <Link href="/contact" passHref>
              <ThemedButton
                bg="white"
                color="brand.500"
                _hover={{ bg: "gray.100" }}
                size="xl"
                px={12}
              >
                Request Technical Brief <BsArrowRight style={{ marginLeft: '8px' }} />
              </ThemedButton>
            </Link>
          </VStack>
        </MotionBox>
      </MotionBox>
    </Box>
  );
};

export default Home;
