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
  Separator,
} from "@chakra-ui/react";
import Image from "next/image";
import { BiCodeAlt, BiChip, BiBrain, BiStats, BiTimeFive } from "react-icons/bi";
import { FaExternalLinkAlt, FaFileAlt, FaLightbulb } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], reverse ? [-50, 50] : [50, -50]);

  return (
    <Flex
      ref={ref}
      marginY={{ base: 12, md: 24 }}
      paddingX={{ base: 0, md: 4, xl: 10 }}
      marginX={{ base: 0, xl: "5%" }}
      direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
      alignItems="center"
      gap={16}
    >
      <Box
        textAlign={{ base: "center", md: "left" }}
        width={{ base: "100%", md: cw }}
      >
        <Text fontSize="2xl" lineHeight="tall" fontWeight="medium" color="fg.default">
          {text}
        </Text>
      </Box>
      <MotionBox
        style={{ x } as any}
        borderRadius="3xl"
        overflow="hidden"
        boxShadow="2xl"
        flex="1"
      >
        <Image height={height} width={width} src={image} alt={alt} style={{ borderRadius: '24px' }} />
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
    p={10}
    bg="bg.surface"
    borderRadius="3xl"
    borderWidth="1px"
    borderColor="border.default"
    _hover={{ borderColor: "brand.500", transform: "translateY(-8px)", boxShadow: "xl" }}
  >
    <Icon as={icon} w={12} h={12} color="brand.400" mb={6} aria-label={title} />
    <Heading size="lg" mb={4} fontWeight="800">{title}</Heading>
    <Text color="fg.muted" fontSize="lg">{description}</Text>
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
    mb={12}
    p={10}
    bg="bg.subtle"
    borderRadius="3xl"
    borderLeftWidth="8px"
    borderLeftColor="brand.500"
    boxShadow="sm"
  >
    <Flex justifyContent="space-between" alignItems="flex-start" mb={4} flexWrap="wrap">
      <VStack align="start" gap={1}>
        <Heading size="xl" fontWeight="900" letterSpacing="tight">{role}</Heading>
        <Text color="brand.400" fontWeight="800" fontSize="lg" textTransform="uppercase" letterSpacing="widest">{company}</Text>
      </VStack>
      <Badge colorPalette="brand" variant="surface" px={4} py={2} borderRadius="full" fontSize="sm">
        {period}
      </Badge>
    </Flex>
    <Text mb={6} color="fg.default" fontSize="xl" lineHeight="relaxed">{description}</Text>
    <HStack gap={3} flexWrap="wrap">
      {tags.map(tag => (
        <Badge key={tag} variant="outline" colorPalette="gray" fontSize="xs" px={3} py={1} borderRadius="md">{tag}</Badge>
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
      <Flex alignItems="flex-start" direction="column" pt={10} px={{ base: 6, md: 10, lg: 20 }}>
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text
            fontFamily="display"
            fontSize="sm"
            fontWeight="bold"
            color="brand.500"
            letterSpacing="widest"
            mb={4}
            textTransform="uppercase"
          >
            The Architect
          </Text>
          <Heading as="h2" size="4xl" fontWeight="900" letterSpacing="tighter" fontFamily="display" fontStyle="italic" mb={16}>
            Deeptech<br/>Pioneer.
          </Heading>
        </MotionBox>

        <Box w="full">
          <TextImage
            text="I am a Systems Engineer and Founding Engineer at Fettle, currently pursuing my undergraduate degree at Manipal Institute of Technology (Expected 2027). My journey in technology began in the fifth grade with a simple 'Hello World' in HTML, which sparked a decade-long obsession with understanding what truly happens 'under the hood'. This curiosity led me from high-level software development into the intricate world of hardware, embedded systems, and silicon design."
            image="/staring.webp"
            height={600}
            cw="50%"
            width={600}
            alt="staring into the vast ocean"
            reverse={false}
          />
          <TextImage
            text="At SolarMobil, I lead the automotive electronics for a high-performance solar racing EV, architecting low-level drivers for Arm Cortex M7-based ECUs and developing real-time telemetry systems. My work at Fettle involves building voice AI agents and scalable backend architectures for healthcare. I thrive at the intersection of hardware and software, where I can apply my expertise in HPC, Embedded Systems, and Agentic AI to solve complex, real-world problems."
            image="/working_bb.webp"
            alt="working"
            reverse
            cw="55%"
            height={500}
            width={700}
          />
        </Box>
      </Flex>

      {/* Core Expertise Section */}
      <Box px={{ base: 6, md: 10, lg: 20 }} mt={32}>
        <Heading as="h3" size="3xl" mb={16} fontWeight="900" letterSpacing="tight">
          Core Expertise
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={12}>
          <ExpertiseCard
            title="HPC & Low-Latency"
            description="Architecting high-frequency, safety-critical systems using FreeRTOS, STM32, and Arm Cortex architectures for HFT and racing."
            icon={BiChip}
            delay={0.1}
          />
          <ExpertiseCard
            title="Agentic AI & Inference"
            description="Building autonomous LLM workflows and optimized inference pipelines using LiveKit, PyTorch, and distributed K8s clusters."
            icon={BiBrain}
            delay={0.2}
          />
          <ExpertiseCard
            title="VLSI & ASIC Design"
            description="Experience with RTL design (Verilog), UVM verification, and ASIC design flows (STA, PPA, floorplanning)."
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
            title="Distributed Systems"
            description="Developing scalable backends with FastAPI, Kubernetes, and cloud-native observability stacks."
            icon={BiCodeAlt}
            delay={0.6}
          />
        </SimpleGrid>
      </Box>

      {/* Publications & IP Section */}
      <Box px={{ base: 6, md: 10, lg: 20 }} mt={40}>
        <Heading as="h3" size="3xl" mb={16} fontWeight="900" letterSpacing="tight">
          Publications & IP
        </Heading>
        <VStack gap={10} align="stretch">
          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            p={10}
            bg="bg.surface"
            borderRadius="3xl"
            borderWidth="1px"
            borderColor="border.default"
            position="relative"
            overflow="hidden"
          >
            <Box position="absolute" top={0} left={0} w="full" h="4px" bg="green.400" />
            <Flex alignItems="center" mb={6} gap={4}>
              <Icon as={FaFileAlt} color="brand.500" boxSize={8} />
              <Badge colorPalette="green" fontSize="sm" px={3} py={1}>Scientific Reports (Springer Nature, Q1)</Badge>
            </Flex>
            <Heading size="xl" mb={4} fontWeight="800" lineHeight="shorter">Technical validation of a multimodal emotion-adaptive biofeedback system for autonomic regulation using guided breathing</Heading>
            <Text color="fg.muted" mb={8} fontSize="lg">Published in Sci Rep (2026). DOI: 10.1038/s41598-026-46105-9</Text>
            <Link 
                href="https://doi.org/10.1038/s41598-026-46105-9" 
                target="_blank" 
                rel="noopener noreferrer" 
                color="brand.500" 
                fontWeight="900" 
                fontSize="xl"
                _hover={{ color: "brand.600", textDecoration: "underline" }}
            >
              View Publication <Icon as={FaExternalLinkAlt} mx="2px" boxSize={4} />
            </Link>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            p={10}
            bg="bg.surface"
            borderRadius="3xl"
            borderWidth="1px"
            borderColor="border.default"
            position="relative"
            overflow="hidden"
          >
            <Box position="absolute" top={0} left={0} w="full" h="4px" bg="blue.400" />
            <Flex alignItems="center" mb={6} gap={4}>
              <Icon as={FaFileAlt} color="brand.500" boxSize={8} />
              <Badge colorPalette="blue" fontSize="sm" px={3} py={1}>IEEE VTC (A*)</Badge>
            </Flex>
            <Heading size="xl" mb={4} fontWeight="800" lineHeight="shorter">Physics-Informed Stochastic Receding Horizon Control for Autonomous Energy Management in Solar Racing</Heading>
            <Text color="fg.muted" mb={8} fontSize="lg">Accepted for IEEE VTC (2026).</Text>
            <Link 
                href="https://vtc2026spring.trackchair.com/paper/47987" 
                target="_blank" 
                rel="noopener noreferrer" 
                color="brand.500" 
                fontWeight="900" 
                fontSize="xl"
                _hover={{ color: "brand.600", textDecoration: "underline" }}
            >
              View Paper <Icon as={FaExternalLinkAlt} mx="2px" boxSize={4} />
            </Link>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {[
                { title: "Adaptive EV Interface", desc: "System and method for adaptive interface in EV control and monitoring. Filed 2025." },
                { title: "Long-Range Telemetry", desc: "System and method for long-range telemetry and observability for Solar EVs. Filed 2025." },
                { title: "Robotic Solar Cleaning", desc: "Automated robotic solar panel cleaning with obstacle detection. Filed 2025." }
            ].map((patent, i) => (
                <MotionBox
                    key={i}
                    p={8}
                    bg="bg.subtle"
                    borderRadius="3xl"
                    borderWidth="1px"
                    borderColor="border.default"
                    _hover={{ borderColor: "yellow.400" }}
                >
                    <Icon as={FaLightbulb} color="yellow.400" boxSize={8} mb={4} />
                    <Heading size="md" mb={4} fontWeight="800">Patent: {patent.title}</Heading>
                    <Text fontSize="md" color="fg.muted" lineHeight="relaxed">{patent.desc}</Text>
                </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>

      {/* Key Experiences Section */}
      <Box px={{ base: 6, md: 10, lg: 20 }} mt={40}>
        <Heading as="h3" size="3xl" mb={16} fontWeight="900" letterSpacing="tight">
          Key Experiences
        </Heading>
        <VStack align="stretch" gap={0}>
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
        </VStack>
      </Box>

      <Flex alignItems="center" direction="column" mt={40} mb={20}>
        <Heading as="h3" size="4xl" fontWeight="900" letterSpacing="tighter" fontFamily="display" fontStyle="italic">
           Keep<br/>Pushing.
        </Heading>
      </Flex>
    </Box>
  );
};

export default About;
