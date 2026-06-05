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
import ThemedMainButton from "components/ThemedMainButton";
import FeaturedProjectList from "data/featured_projects";
import SchemaMarkup from "components/SchemaMarkup";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

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
    },
  },
};

const Home = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pulkit Kumar",
    url: "https://buddywhitman.vercel.app",
    jobTitle: "Founding Engineer",
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
    description: "Pre-final year EE undergrad specializing in Embedded Systems, Voice AI, and Production Inference Infrastructure.",
  };

  return (
    <Box>
      <SchemaMarkup data={personSchema} />
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        px={{ base: 6, md: 10, lg: 20 }}
        py={10}
      >
        {/* Hero Section */}
        <MotionBox variants={itemVariants} mb={20}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={10}
          >
            <Box flex="1">
              <SomeText />
            </Box>
            <Box flex="1" display={{ base: "none", lg: "block" }}>
              <ImageBox
                image="/home_w.webp"
                height={600}
                width={600}
                alt="Pulkit Kumar"
              />
            </Box>
          </Flex>
        </MotionBox>

        {/* About Section */}
        <MotionBox variants={itemVariants} mb={32}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={12}
            align="flex-start"
          >
            <VStack align="flex-start" flex="1" gap={6}>
              <Heading size="3xl" fontWeight="800" letterSpacing="tight">
                About
              </Heading>
              <Text fontSize="xl" color="fg.muted" lineHeight="relaxed">
                Hey, There! I&apos;m Pulkit. I build production-grade AI infrastructure
                and safety-critical systems. My work spans from real-time voice AI
                platforms to Q1-published research in embedded systems.
              </Text>
              <Text fontSize="xl" color="fg.muted" lineHeight="relaxed">
                Currently, I&apos;m a founding engineer at a health-tech startup,
                architecting voice AI systems for hospital networks. I focus on
                the intersection of high-performance inference and reliable
                hardware.
              </Text>
              <Stack direction="row" gap={4} pt={4}>
                <Link href="/tech" passHref>
                  <ThemedMainButton>Tech Stack</ThemedMainButton>
                </Link>
                <Link href="/about" passHref>
                  <ThemedButton rightIcon={<BsArrowRight />}>
                    Read More
                  </ThemedButton>
                </Link>
              </Stack>
            </VStack>
            <Spacer />
          </Flex>
        </MotionBox>

        {/* Featured Work Section */}
        <MotionBox variants={itemVariants} mb={32}>
          <Heading size="3xl" fontWeight="800" letterSpacing="tight" mb={12}>
            Featured Work
          </Heading>
          <VStack gap={20} align="stretch">
            {FeaturedProjectList.map((value) => (
              <FeaturedProject
                name={value.name}
                description={value.description}
                textc="fg.muted"
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
                View All Projects
              </ThemedButton>
            </Link>
          </Flex>
        </MotionBox>

        {/* Contact CTA */}
        <MotionBox
          variants={itemVariants}
          bg="brand.500"
          color="white"
          p={{ base: 8, md: 16 }}
          rounded="3xl"
          textAlign="center"
        >
          <VStack gap={8}>
            <Heading size="4xl" fontWeight="900" letterSpacing="tight">
              Let&apos;s build something resilient.
            </Heading>
            <Text fontSize="xl" opacity="0.9" maxW="2xl">
              Available for consulting on inference infrastructure, embedded
              systems, and AI integration.
            </Text>
            <Link href="/contact" passHref>
              <ThemedButton
                bg="white"
                color="brand.500"
                _hover={{ bg: "gray.100" }}
                rightIcon={<BsArrowRight />}
                size="xl"
                px={12}
              >
                Get in Touch
              </ThemedButton>
            </Link>
          </VStack>
        </MotionBox>
      </MotionBox>
    </Box>
  );
};

export default Home;
