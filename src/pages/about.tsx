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

  const x = useTransform(scrollYProgress, [0, 1], reverse ? [-100, 100] : [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], reverse ? [-5, 5] : [5, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <Flex
      ref={ref}
      marginY={{ base: 12, md: 32 }}
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
        <Text fontSize="2xl" lineHeight="tall" fontWeight="medium" color="var(--synced-text)">
          {text}
        </Text>
      </Box>
      <MotionBox
        style={{ x, rotate, scale } as any}
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

const ExpertiseCard = ({ title, description, icon, delay }: ExpertiseCardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <MotionBox
      ref={ref}
      style={{ y } as any}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
      p={10}
      bg="var(--synced-surface)"
      borderRadius="3xl"
      borderWidth="1px"
      borderColor="var(--synced-border)"
      _hover={{ borderColor: "brand.500", transform: "scale(1.05) rotate(2deg)", boxShadow: "xl" }}
    >
      <Icon as={icon} w={12} h={12} color="brand.400" mb={6} aria-label={title} />
      <Heading size="lg" mb={4} fontWeight="800" color="var(--synced-text)">{title}</Heading>
      <Text color="var(--synced-muted)" fontSize="lg">{description}</Text>
    </MotionBox>
  );
};

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
          <Text className="mono-label" fontSize="10px" color="var(--accent)" mb={4}>
            THE LONG VERSION
          </Text>
          <Heading as="h2" fontSize={{ base: "6xl", md: "8xl", lg: "9xl" }} fontWeight="600" letterSpacing="-0.02em" fontFamily="'EB Garamond', serif" fontStyle="italic" mb={16} color="var(--synced-text)">
            How I got here.
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
        <Heading as="h3" fontSize={{ base: "5xl", md: "7xl" }} mb={16} fontWeight="600" letterSpacing="-0.02em" fontFamily="'EB Garamond', serif" fontStyle="italic" color="var(--synced-text)">
          What I&apos;m good at
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
        <Heading as="h3" fontSize={{ base: "5xl", md: "7xl" }} mb={16} fontWeight="600" letterSpacing="-0.02em" fontFamily="'EB Garamond', serif" fontStyle="italic" color="var(--synced-text)">
          Publications &amp; IP
        </Heading>
        <VStack gap={10} align="stretch">
          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            p={10}
            bg="var(--synced-surface)"
            borderRadius="3xl"
            borderWidth="1px"
            borderColor="var(--synced-border)"
            position="relative"
            overflow="hidden"
            _hover={{ transform: "rotate(-1deg) scale(1.02)", boxShadow: "2xl" }}
            transition={{ duration: 0.4 }}
          >
            <Box position="absolute" top={0} left={0} w="full" h="4px" bg="green.400" />
            <Flex alignItems="center" mb={6} gap={4}>
              <Icon as={FaFileAlt} color="brand.500" boxSize={8} />
              <Badge colorPalette="green" fontSize="sm" px={3} py={1}>Scientific Reports (Springer Nature, Q1)</Badge>
            </Flex>
            <Heading size="xl" mb={4} fontWeight="800" lineHeight="shorter" color="var(--synced-text)">Technical validation of a multimodal emotion-adaptive biofeedback system for autonomic regulation using guided breathing</Heading>
            <Text color="var(--synced-muted)" mb={8} fontSize="lg">Published in Sci Rep (2026). DOI: 10.1038/s41598-026-46105-9</Text>
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
            bg="var(--synced-surface)"
            borderRadius="3xl"
            borderWidth="1px"
            borderColor="var(--synced-border)"
            position="relative"
            overflow="hidden"
            _hover={{ transform: "rotate(1deg) scale(1.02)", boxShadow: "2xl" }}
            transition={{ duration: 0.4 }}
          >
            <Box position="absolute" top={0} left={0} w="full" h="4px" bg="blue.400" />
            <Flex alignItems="center" mb={6} gap={4}>
              <Icon as={FaFileAlt} color="brand.500" boxSize={8} />
              <Badge colorPalette="blue" fontSize="sm" px={3} py={1}>IEEE VTC (A*)</Badge>
            </Flex>
            <Heading size="xl" mb={4} fontWeight="800" lineHeight="shorter" color="var(--synced-text)">Physics-Informed Stochastic Receding Horizon Control for Autonomous Energy Management in Solar Racing</Heading>
            <Text color="var(--synced-muted)" mb={8} fontSize="lg">Accepted for IEEE VTC (2026).</Text>
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
                    bg="var(--synced-surface)"
                    borderRadius="3xl"
                    borderWidth="1px"
                    borderColor="var(--synced-border)"
                    _hover={{ borderColor: "yellow.400", transform: "scale(1.05)", boxShadow: "lg" }}
                    transition={{ duration: 0.3 }}
                >
                    <Icon as={FaLightbulb} color="yellow.400" boxSize={8} mb={4} />
                    <Heading size="md" mb={4} fontWeight="800" color="var(--synced-text)">Patent: {patent.title}</Heading>
                    <Text fontSize="md" color="var(--synced-muted)" lineHeight="relaxed">{patent.desc}</Text>
                </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>

      {/* Comprehensive Career Timeline */}
      <Box px={{ base: 6, md: 10, lg: 20 }} mt={40} position="relative">
        <Heading as="h3" fontSize={{ base: "5xl", md: "7xl" }} mb={24} fontWeight="600" letterSpacing="-0.02em" fontFamily="'EB Garamond', serif" fontStyle="italic" textAlign="center" color="var(--synced-text)">
          The journey so far
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

          {[{
              role: "Founder",
              company: "Guaq AI",
              period: "Dec 2025 - Present",
              desc: "Building agentic solutions for hospitality, real estate, and finance. Scaled to 6+ clients with ~$8K MRR in 6 months.",
              tags: ["Agentic AI", "LLMs", "Product Strategy"]
            },
            {
              role: "Freelance Web Developer",
              company: "GigsWall",
              period: "Jun 2025 - Present",
              desc: "Web design & UX research for European and US clients, helping scale online presence and customer engagement.",
              tags: ["Freelance", "UX", "Web"]
            },
            {
              role: "Founding Engineer",
              company: "Fettle",
              period: "2025 - Present",
              desc: "Architecting distributed health ecosystems using FastAPI and Kubernetes. Optimizing real-time voice AI latency with LiveKit and OpenAI.",
              tags: ["Voice AI", "PyTorch", "Kubernetes"]
            },
            {
              role: "Software Developer",
              company: "Student Council Dev Team",
              period: "Dec 2024 - Present",
              desc: "Designed and built cross-platform application interfaces using Flutter and Dart. Deployed Firebase backend services for authentication and caching.",
              tags: ["Flutter", "Dart", "Firebase"]
            },
            {
              role: "System Engineer",
              company: "Team SolarMobil",
              period: "Jan 2024 - Present",
              desc: "Engineered automotive electronics for a solar racing EV. Developed low-level drivers for Arm Cortex M7-based ECUs and built real-time telemetry dashboards.",
              tags: ["Embedded C", "FreeRTOS", "STM32"]
            },
            {
              role: "Hardware Lead (Volunteer)",
              company: "MOSS",
              period: "2023 - Present",
              desc: "Led community building around OpenLane and SkyWater130 stack. Hosted 4+ workshops and contributed to Arduino's LiquidCrystal library for unconventional 5x10 displays.",
              tags: ["Open Source", "Hardware", "Arduino"]
            },
            {
              role: "AI Engineer",
              company: "Teachafy Labs",
              period: "Aug 2025 - Nov 2025",
              desc: "Developed Google ADK-based agentic orchestration and WhatsApp business chatbots to inject natural language workflows into ERP platforms, saving 5000+ hrs/week across 17+ clients.",
              tags: ["Agentic AI", "RAG", "Google Cloud"]
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
              role: "Patent Inventor",
              company: "Intellectual Property",
              period: "2025",
              desc: "Filed 3 provisional patents: Adaptive EV Interface, Long-Range Telemetry for Solar EVs, and Automated Robotic Solar Cleaning under MAHE.",
              tags: ["Patents", "Invention", "R&D"]
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
              role: "Core Committee (Volunteer)",
              company: "Manipal Hackathon",
              period: "2024",
              desc: "Developed full-stack developer management portals for Manipal Hackathon's 2024 edition, scaling to 35k+ DAU and optimizing FCP by over 68%.",
              tags: ["Full Stack", "Performance"]
            },
            {
              role: "Community Engagement Intern",
              company: "Open Horizon Robotics",
              period: "Aug 2023 - Jan 2024",
              desc: "Generated over $35k+ in sponsorships and onboarded 18+ collaborators, driving 52% YoY growth for the open-source community.",
              tags: ["Open Source", "Leadership"]
            },
            {
              role: "UI/UX & Branding Lead",
              company: "Kraftr",
              period: "Jul 2023 - Dec 2023",
              desc: "Created brand guidelines, visual communication, and social media content using Adobe Creative Suite and Figma. Secured term sheet worth $100k through investor decks.",
              tags: ["Figma", "Branding", "UI/UX"]
            },
            {
              role: "UI/UX Designer",
              company: "GramHealth",
              period: "Sep 2023 - Nov 2023",
              desc: "Designed high-fidelity wireframes for healthcare apps, increasing user satisfaction by 20 points.",
              tags: ["Figma", "UI/UX"]
            },
            {
              role: "Social Media Manager",
              company: "Manipal Updates",
              period: "Aug 2023 - Oct 2023",
              desc: "Designed social media marketing content resulting in a 78% increase in footfall and 55% rise in revenue for client restaurants.",
              tags: ["Marketing", "Design"]
            },
            {
              role: "Certified Professional",
              company: "AWS & (ISC)²",
              period: "2023",
              desc: "Achieved AWS Certified Solutions Architect and (ISC)² SSCP certifications.",
              tags: ["AWS", "Security", "Certification"]
            },
            {
              role: "CTO",
              company: "Project fAte",
              period: "Feb 2022 - Aug 2022",
              desc: "Led an international team to build a full-stack Flutter/Firebase application connecting food-abundant establishments with volunteers.",
              tags: ["Flutter", "Firebase", "Leadership"]
            },
            {
              role: "Web Developer Intern",
              company: "MyCaptain",
              period: "Aug 2021",
              desc: "Designed and built a responsive webapp using React, Apollo GraphQL, and Next.js. Integrated Amazon S3, Sentry, and Cloudflare Radar.",
              tags: ["React", "GraphQL", "NextJS"]
            },
            {
              role: "Branding & Audio Editor",
              company: "The Teen Business Podcast",
              period: "Aug 2020",
              desc: "Conceptualized branding guidelines and edited over 30 episodes reaching 30,000+ views using Adobe Premiere Pro, After Effects, and DaVinci Resolve.",
              tags: ["Audio", "Video", "Branding"]
            },
            {
              role: "Developer",
              company: "Xesbi Cloud",
              period: "2020",
              desc: "Built a custom web server and voice assistant for an ESP32-based development board. Integrated AWS and Google Cloud APIs for NLP and TTS. Built a GRNN for wakeword recognition.",
              tags: ["ESP32", "TensorFlow", "AWS"]
            },
            {
              role: "Student Trainee",
              company: "SP Robotics Works",
              period: "Jul 2019 - Dec 2019",
              desc: "Designed and built biped, rover, and octapod robots using Raspberry Pi and Arduino. Wrote a custom bootloader for Arm Cortex A53.",
              tags: ["Robotics", "Raspberry Pi", "Arduino"]
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
                  whileInView={{ opacity: 1, x: 0, rotate: isEven ? 2 : -2 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  w={{ base: "calc(100% - 50px)", md: "45%" }}
                  ml={{ base: "50px", md: isEven ? "55%" : 0 }}
                  mr={{ base: 0, md: isEven ? 0 : "55%" }}
                  p={8}
                  bg="var(--synced-surface)"
                  borderRadius="3xl"
                  borderWidth="1px"
                  borderColor="var(--synced-border)"
                  _hover={{ borderColor: "brand.500", boxShadow: "2xl", transform: "scale(1.05) rotate(0deg)" }}
                  position="relative"
                >
                  <Text color="brand.400" fontWeight="900" fontSize="sm" letterSpacing="widest" mb={2}>
                    {item.period}
                  </Text>
                  <Heading size="xl" fontWeight="800" mb={1} color="var(--synced-text)">{item.role}</Heading>
                  <Text color="var(--synced-muted)" fontSize="lg" fontWeight="bold" mb={4}>{item.company}</Text>
                  <Text color="var(--synced-muted)" lineHeight="relaxed" mb={6}>{item.desc}</Text>
                  <HStack gap={2} flexWrap="wrap">
                    {item.tags.map(tag => (
                      <Badge key={tag} variant="outline" color="var(--synced-text)" borderColor="var(--synced-border)" borderRadius="full" px={3} py={1}>
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
        <Heading as="h3" fontSize={{ base: "6xl", md: "8xl" }} fontWeight="600" letterSpacing="-0.02em" fontFamily="'EB Garamond', serif" fontStyle="italic" color="var(--synced-text)">
           Still building.
        </Heading>
      </Flex>
    </Box>
  );
};

export default About;
