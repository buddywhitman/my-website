/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  Box,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Icon,
  Link,
  VStack,
  HStack,
  Badge,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactElement } from "react";
import { BiCodeAlt, BiChip, BiBrain, BiStats, BiTimeFive } from "react-icons/bi";
import { FaExternalLinkAlt, FaAward, FaFileAlt, FaLightbulb } from "react-icons/fa";
import MotionBox from "components/motion/Box";
import SchemaMarkup from "components/SchemaMarkup";

interface TextImageProps {
  text: string;
  reverse: boolean;
  image: string;
  alt: string;
  height: number;
  width: number;
  cw: string;
}

const TextImage = ({
  text,
  reverse,
  image,
  alt,
  height,
  width,
  cw,
}: TextImageProps) => {
  return (
    <Flex
      marginY={{ base: 8, md: 12 }}
      paddingX={{ base: 0, md: 4, xl: 10 }}
      marginX={{ base: 0, xl: "10%" }}
      direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
      alignItems="center"
    >
      <Box
        mr={{ base: 0, md: reverse ? 0 : 8 }}
        ml={{ base: 0, md: reverse ? 8 : 0 }}
        textAlign={{ base: "center", md: "left" }}
        width={{ base: "100%", md: cw }}
      >
        <Text fontSize="lg" lineHeight="tall">{text}</Text>
      </Box>
      <MotionBox
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        borderRadius="xl"
        overflow="hidden"
        boxShadow="2xl"
      >
        <Image height={height} width={width} src={image} alt={alt} style={{ borderRadius: '12px' }} />
      </MotionBox>
    </Flex>
  );
};

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: any;
  delay: number;
}

const ExpertiseCard = ({ title, description, icon, delay }: ExpertiseCardProps) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    p={6}
    bg="bg.surface"
    borderRadius="xl"
    borderWidth="1px"
    borderColor="border.default"
    _hover={{ borderColor: "brand.500", transform: "translateY(-4px)" }}
  >
    <Icon as={icon} w={10} h={10} color="brand.400" mb={4} aria-label={title} />
    <Heading size="md" mb={2}>{title}</Heading>
    <Text color="fg.muted">{description}</Text>
  </MotionBox>
);

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  delay: number;
}

const ExperienceItem = ({ role, company, period, description, tags, delay }: ExperienceItemProps) => (
  <MotionBox
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    mb={8}
    p={6}
    bg="bg.surface"
    borderRadius="xl"
    borderLeftWidth="4px"
    borderLeftColor="brand.500"
  >
    <Flex justifyContent="space-between" alignItems="flex-start" mb={2} flexWrap="wrap">
      <VStack align="start" spacing={0}>
        <Heading size="md">{role}</Heading>
        <Text color="brand.300" fontWeight="bold">{company}</Text>
      </VStack>
      <Badge colorScheme="brand" variant="subtle" px={3} py={1} borderRadius="full">
        {period}
      </Badge>
    </Flex>
    <Text mb={4} color="fg.muted">{description}</Text>
    <HStack spacing={2} flexWrap="wrap">
      {tags.map(tag => (
        <Badge key={tag} variant="outline" colorScheme="gray" fontSize="xs">{tag}</Badge>
      ))}
    </HStack>
  </MotionBox>
);

const About = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pulkit Kumar",
    jobTitle: "Founding Engineer",
    description: "Expert in Embedded Systems, Voice AI, and Production Inference Infrastructure.",
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Q1 Springer Nature Author",
        "url": "https://doi.org/10.1038/s41598-026-46105-9"
      }
    ],
    "award": [
      "3 Patents Filed (EV Adaptive Interface, Telemetry, Robotic Cleaning)",
      "Outstanding Student Presentation Award, Junior Social Scientist Conference"
    ],
    "knowsAbout": ["Embedded C/C++", "RTOS", "Voice AI", "HFT", "HPC", "Digital Logic", "Agentic AI"]
  };

  return (
    <Box pb={20}>
      <SchemaMarkup data={aboutSchema} />
      <Flex alignItems="center" direction="column" pt={10}>
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h2" size="2xl" mb={10}>
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: "full",
                height: "25%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "brand.500",
                zIndex: -1,
              }}
            >
              About Me
            </Text>
          </Heading>
        </MotionBox>

        <Box>
          <TextImage
            text="I am a Systems Engineer and Founding Engineer at Fettle, currently pursuing my undergraduate degree at Manipal Institute of Technology (Expected 2027). My journey in technology began in the fifth grade with a simple 'Hello World' in HTML, which sparked a decade-long obsession with understanding what truly happens 'under the hood'. This curiosity led me from high-level software development into the intricate world of hardware, embedded systems, and silicon design."
            image="/staring.webp"
            height={400}
            cw="50%"
            width={480}
            alt="staring into the vast ocean"
            reverse={false}
          />
          <TextImage
            text="At SolarMobil, I lead the automotive electronics for a high-performance solar racing EV, architecting low-level drivers for Arm Cortex M7-based ECUs and developing real-time telemetry systems. My work at Fettle involves building voice AI agents and scalable backend architectures for healthcare. I thrive at the intersection of hardware and software, where I can apply my expertise in HPC, Embedded Systems, and Agentic AI to solve complex, real-world problems."
            image="/working_bb.webp"
            alt="working"
            reverse
            cw="50%"
            height={300}
            width={500}
          />
        </Box>
      </Flex>

      {/* Core Expertise Section */}
      <Box px={{ base: 4, md: 8, lg: 20 }} mt={20}>
        <Heading as="h3" size="xl" mb={10} textAlign="center">
          Core Expertise
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          <ExpertiseCard
            title="HPC & Embedded Systems"
            description="Architecting low-latency, safety-critical systems using FreeRTOS, STM32, and Arm Cortex architectures."
            icon={BiChip}
            delay={0.1}
          />
          <ExpertiseCard
            title="Agentic AI & RAG"
            description="Building autonomous LLM workflows and RAG-based applications using n8n, LangChain, and vector databases."
            icon={BiBrain}
            delay={0.2}
          />
          <ExpertiseCard
            title="VLSI & SoC Design"
            description="Experience with RTL design (Verilog), ASIC design flows, and FPGA implementation (Vivado/Vitis)."
            icon={BiCodeAlt}
            delay={0.3}
          />
          <ExpertiseCard
            title="Digital Signal Processing"
            description="Implementing real-time signal acquisition and processing pipelines for bio-signals and telemetry."
            icon={BiStats}
            delay={0.4}
          />
          <ExpertiseCard
            title="Real-Time Systems"
            description="Designing deterministic task scheduling and high-performance sensor fusion for automotive applications."
            icon={BiTimeFive}
            delay={0.5}
          />
          <ExpertiseCard
            title="Full-Stack Architecture"
            description="Developing scalable backends with FastAPI, Kubernetes, and cloud-native observability stacks."
            icon={BiCodeAlt}
            delay={0.6}
          />
        </SimpleGrid>
      </Box>

      {/* Publications & IP Section */}
      <Box px={{ base: 4, md: 8, lg: 20 }} mt={24}>
        <Heading as="h3" size="xl" mb={10} textAlign="center">
          Publications & IP
        </Heading>
        <VStack spacing={6} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            p={6}
            bg="bg.surface"
            borderRadius="xl"
            borderWidth="1px"
            borderColor="border.default"
          >
            <Flex alignItems="center" mb={4}>
              <Icon as={FaFileAlt} color="brand.500" mr={3} />
              <Badge colorScheme="green">Scientific Reports (Springer Nature, Q1)</Badge>
            </Flex>
            <Heading size="md" mb={2}>Technical validation of a multimodal emotion-adaptive biofeedback system for autonomic regulation using guided breathing</Heading>
            <Text color="fg.muted" mb={4}>Published in Sci Rep (2026). DOI: 10.1038/s41598-026-46105-9</Text>
            <Link href="https://doi.org/10.1038/s41598-026-46105-9" isExternal color="brand.300">
              View Publication <Icon as={FaExternalLinkAlt} mx="2px" size="xs" />
            </Link>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            p={6}
            bg="bg.surface"
            borderRadius="xl"
            borderWidth="1px"
            borderColor="border.default"
          >
            <Flex alignItems="center" mb={4}>
              <Icon as={FaFileAlt} color="brand.500" mr={3} />
              <Badge colorScheme="blue">IEEE VTC (A*)</Badge>
            </Flex>
            <Heading size="md" mb={2}>Physics-Informed Stochastic Receding Horizon Control for Autonomous Energy Management in Solar Racing</Heading>
            <Text color="fg.muted" mb={4}>Accepted for IEEE VTC (2026).</Text>
            <Link href="https://vtc2026spring.trackchair.com/paper/47987" isExternal color="brand.300">
              View Paper <Icon as={FaExternalLinkAlt} mx="2px" size="xs" />
            </Link>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <MotionBox
              p={6}
              bg="bg.surface"
              borderRadius="xl"
              borderWidth="1px"
              borderColor="border.default"
            >
              <Icon as={FaLightbulb} color="yellow.400" mb={3} />
              <Heading size="sm" mb={2}>Patent: Adaptive EV Interface</Heading>
              <Text fontSize="sm" color="fg.muted">System and method for adaptive interface in EV control and monitoring. Filed 2025.</Text>
            </MotionBox>
            <MotionBox
              p={6}
              bg="bg.surface"
              borderRadius="xl"
              borderWidth="1px"
              borderColor="border.default"
            >
              <Icon as={FaLightbulb} color="yellow.400" mb={3} />
              <Heading size="sm" mb={2}>Patent: Long-Range Telemetry</Heading>
              <Text fontSize="sm" color="fg.muted">System and method for long-range telemetry and observability for Solar EVs. Filed 2025.</Text>
            </MotionBox>
            <MotionBox
              p={6}
              bg="bg.surface"
              borderRadius="xl"
              borderWidth="1px"
              borderColor="border.default"
            >
              <Icon as={FaLightbulb} color="yellow.400" mb={3} />
              <Heading size="sm" mb={2}>Patent: Robotic Solar Cleaning</Heading>
              <Text fontSize="sm" color="fg.muted">Automated robotic solar panel cleaning with obstacle detection. Filed 2025.</Text>
            </MotionBox>
          </SimpleGrid>
        </VStack>
      </Box>

      {/* Key Experiences Section */}
      <Box px={{ base: 4, md: 8, lg: 20 }} mt={24}>
        <Heading as="h3" size="xl" mb={10} textAlign="center">
          Key Experiences
        </Heading>
        <VStack align="stretch" spacing={0}>
          <ExperienceItem
            role="Founding Engineer"
            company="Fettle"
            period="2025 - Present"
            description="Architecting distributed health ecosystems using FastAPI and Kubernetes. Optimizing real-time voice AI latency with LiveKit and OpenAI for hospital communication workflows. Implementing cross-modal hybrid recommender engines using PyTorch."
            tags={["Voice AI", "FastAPI", "Kubernetes", "PyTorch", "LiveKit"]}
            delay={0.1}
          />
          <ExperienceItem
            role="System Engineer"
            company="SolarMobil"
            period="2024 - Present"
            description="Engineering automotive electronics for a solar racing EV. Developed low-level drivers for Arm Cortex M7-based ECUs. Implemented FreeRTOS for deterministic scheduling and built cloud-based telemetry dashboards using Prometheus, Influx, and Grafana."
            tags={["Embedded C", "FreeRTOS", "STM32", "Telemetry", "Grafana"]}
            delay={0.2}
          />
          <ExperienceItem
            role="Founder"
            company="Guaq AI"
            period="2024 - Present"
            description="Building agentic solutions for hospitality, real estate, and finance. Scaled to 6+ clients with ~$8K MRR in 6 months. Automating lead generation, content creation, and compliance workflows."
            tags={["Agentic AI", "Business Automation", "LLMs", "Product Strategy"]}
            delay={0.3}
          />
          <ExperienceItem
            role="Machine Learning Engineer"
            company="DCPR AI"
            period="2024"
            description="Leveraged n8n to build agentic RAG-based LLM workflows for Urban Planning regulation. Optimized data ingestion pipelines, reducing TTM by 88% and increasing data integrity by 39%."
            tags={["RAG", "n8n", "LLMOps", "Data Engineering"]}
            delay={0.4}
          />
        </VStack>
      </Box>

      <Flex alignItems="center" direction="column" mt={20}>
        <Heading as="h3" size="xl">
          <Text
            as="span"
            position="relative"
            _after={{
              content: "''",
              width: "full",
              height: "25%",
              position: "absolute",
              top: 1,
              left: 0,
              bg: "brand.500",
              zIndex: -1,
            }}
          >
            The journey continues...
          </Text>
        </Heading>
      </Flex>
    </Box>
  );
};

export default About;
