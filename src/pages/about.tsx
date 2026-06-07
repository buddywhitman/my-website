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
      <Box px={{ base: 6, md: 10, lg: 20 }} mt={40} id="publications">
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

      {/* Comprehensive Career Timeline */}
      <Box px={{ base: 6, md: 10, lg: 20 }} mt={40} position="relative">
        <Heading as="h3" size="3xl" mb={24} fontWeight="900" letterSpacing="tight" textAlign="center">
          The Journey
        </Heading>
        
        <Box position="relative" maxW="5xl" mx="auto">
          {/* Central Line */}
          <Box 
            position="absolute" 
            left={{ base: "20px", md: "50%" }}
            top="0"
            bottom="0"
            width="2px"
            transform={{ base: "none", md: "translateX(-50%)" }}
            bgGradient="to-b"
            gradientFrom="brand.500"
            gradientTo="purple.500"
            opacity="0.3"
            borderRadius="full"
          />

          {[
            {
              role: "Founding Engineer",
              company: "Fettle",
              period: "2025 - Present",
              desc: "Architecting distributed health ecosystems using FastAPI and Kubernetes. Optimizing real-time voice AI latency with LiveKit and OpenAI.",
              tags: ["Voice AI", "PyTorch", "Kubernetes"]
            },
            {
              role: "Founder",
              company: "Guaq AI",
              period: "2024 - Present",
              desc: "Building agentic solutions for hospitality, real estate, and finance. Scaled to 6+ clients with ~$8K MRR in 6 months.",
              tags: ["Agentic AI", "LLMs", "Product Strategy"]
            },
            {
              role: "System Engineer",
              company: "SolarMobil",
              period: "2024 - Present",
              desc: "Engineered automotive electronics for a solar racing EV. Developed low-level drivers for Arm Cortex M7-based ECUs and built real-time telemetry dashboards.",
              tags: ["Embedded C", "FreeRTOS", "STM32"]
            },
            {
              role: "Embedded Software Engineer",
              company: "Symbionic",
              period: "May 2025 - Jul 2025",
              desc: "Developed drivers for ESP32 cores and designed a signal acquisition pipeline for multi-channel EMG/EEG sensing.",
              tags: ["Edge AI", "DSP", "ESP32"]
            },
            {
              role: "Co-Founder",
              company: "FoodSwipe",
              period: "Jan 2025 - Jun 2025",
              desc: "Outsourced food choices to content-based & collaborative recommender systems achieving 85%+ positive customer experience.",
              tags: ["Recommender Systems", "A/B Testing"]
            },
            {
              role: "Machine Learning Engineer",
              company: "DCPR AI",
              period: "Jul 2024 - Dec 2024",
              desc: "Leveraged n8n to build agentic RAG-based LLM workflows around Urban Planning regulation utilizing Redis, Cohere, and FastAPI.",
              tags: ["RAG", "FastAPI", "n8n"]
            },
            {
              role: "Embedded Engineer",
              company: "Krop AI",
              period: "Sep 2024 - Nov 2024",
              desc: "Designed hardware systems and wrote DMA drivers for AtlasScientific precision sensing probes on ESP32-based agritech modules.",
              tags: ["Hardware Design", "ESP32", "Computer Vision"]
            },
            {
              role: "Software Engineer",
              company: "MTTN",
              period: "Sep 2024 - Nov 2024",
              desc: "Developed web & native applications supporting 260K+ MAU, utilizing AWS ELB, NextJS, Spring Boot, and Kubernetes.",
              tags: ["NextJS", "Kubernetes", "Spring Boot"]
            },
            {
              role: "SoC Design Intern",
              company: "CoreEL Technologies",
              period: "May 2024 - Jul 2024",
              desc: "Developed RTL2GDSII design of high-speed CAN bus & I2C controllers using Verilog. Simulated on a Virtex 7 FPGA.",
              tags: ["Verilog", "ASIC Flow", "FPGA"]
            },
            {
              role: "Community Engagement Intern",
              company: "Open Horizon Robotics",
              period: "Aug 2023 - Jan 2024",
              desc: "Generated over $35k+ in sponsorships and onboarded 18+ collaborators, driving 52% YoY growth for the open-source community.",
              tags: ["Open Source", "Leadership"]
            },
            {
              role: "UI/UX Designer",
              company: "GramHealth",
              period: "Sep 2023 - Nov 2023",
              desc: "Designed high-fidelity wireframes for healthcare apps, increasing user satisfaction by 20 points.",
              tags: ["Figma", "UI/UX"]
            },
            {
              role: "CTO",
              company: "Project fAte",
              period: "Feb 2022 - Aug 2022",
              desc: "Led an international team to build a full-stack Flutter/Firebase application connecting food-abundant establishments with volunteers.",
              tags: ["Flutter", "Firebase", "Leadership"]
            },
            {
              role: "Student Trainee",
              company: "SP Robotics Works",
              period: "Jul 2019 - Dec 2019",
              desc: "Designed and built biped, rover, and octapod robots using Raspberry Pi and Arduino. Wrote a custom bootloader for Arm Cortex A53.",
              tags: ["Robotics", "Raspberry Pi", "Arduino"]
            },
            {
              role: "Developer",
              company: "Xesbi Cloud",
              period: "2020",
              desc: "Built a custom web server and voice assistant for an ESP32-based development board. Integrated AWS and Google Cloud APIs for NLP and TTS. Built a GRNN for wakeword recognition.",
              tags: ["ESP32", "TensorFlow", "AWS"]
            },
            {
              role: "Creator",
              company: "R/C Electric Skateboard",
              period: "2019",
              desc: "Designed and built a remote-controlled electric skateboard achieving 32 km/h using a BLDC motor, custom battery pack, and Arduino Uno.",
              tags: ["Hardware", "Arduino", "Motor Control"]
            },
            {
              role: "Developer",
              company: "FlatCalc",
              period: "2018",
              desc: "Created a terminal-based application using Java 8 to simplify real estate calculations applying OOP principles for modularity.",
              tags: ["Java", "OOP"]
            },
            {
              role: "Creator",
              company: "LAMP Stack Web Server",
              period: "2018",
              desc: "Created a self-hosted web server and deployed an onion site on the Tor network using Apache, Raspberry Pi, Linux, and MySQL.",
              tags: ["Linux", "MySQL", "Raspberry Pi"]
            }
          ].map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <Flex 
                key={index}
                direction={{ base: "column", md: "row" }}
                justifyContent={{ base: "flex-start", md: isEven ? "flex-end" : "flex-start" }}
                alignItems="center"
                position="relative"
                w="full"
                mb={16}
                _last={{ mb: 0 }}
              >
                {/* Timeline Dot */}
                <Box 
                  position="absolute"
                  left={{ base: "20px", md: "50%" }}
                  transform={{ base: "translateX(-4px)", md: "translateX(-50%)" }}
                  w="10px"
                  h="10px"
                  bg="brand.400"
                  borderRadius="full"
                  zIndex={2}
                  boxShadow="0 0 10px var(--chakra-colors-brand-500)"
                />

                <MotionBox
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  w={{ base: "calc(100% - 50px)", md: "45%" }}
                  ml={{ base: "50px", md: isEven ? "55%" : 0 }}
                  mr={{ base: 0, md: isEven ? 0 : "55%" }}
                  p={8}
                  bg="bg.surface"
                  borderRadius="3xl"
                  borderWidth="1px"
                  borderColor="border.default"
                  _hover={{ borderColor: "brand.500", boxShadow: "xl" }}
                  position="relative"
                >
                  <Text color="brand.400" fontWeight="900" fontSize="sm" letterSpacing="widest" mb={2}>
                    {item.period}
                  </Text>
                  <Heading size="xl" fontWeight="800" mb={1}>{item.role}</Heading>
                  <Text color="whiteAlpha.800" fontSize="lg" fontWeight="bold" mb={4}>{item.company}</Text>
                  <Text color="fg.muted" lineHeight="relaxed" mb={6}>{item.desc}</Text>
                  <HStack gap={2} flexWrap="wrap">
                    {item.tags.map(tag => (
                      <Badge key={tag} variant="subtle" colorPalette="gray" borderRadius="full" px={3} py={1}>
                        {tag}
                      </Badge>
                    ))}
                  </HStack>
                </MotionBox>
              </Flex>
            );
          })}
        </Box>
      </Box>

      <Flex alignItems="center" direction="column" mt={40} mb={20}>
        <Heading as="h3" size="4xl" fontWeight="900" letterSpacing="tighter" fontFamily="display" fontStyle="italic">
           Keep Pushing.
        </Heading>
      </Flex>
    </Box>
  );
};

export default About;
