import { Box, Flex, Text, SimpleGrid, Icon, VStack, HStack, Link as ChakraLink, Heading, Badge } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaFlask, FaUniversity, FaFileAlt, FaLightbulb, FaExternalLinkAlt } from "react-icons/fa";
import { BiCodeAlt, BiBrain, BiStats, BiChip } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import {
  SiCplusplus, SiPytorch, SiTensorflow, SiNumpy, SiUbuntu
} from "react-icons/si";
import { Tooltip } from "components/ui/tooltip";

const MotionBox = motion(Box) as any;
const EASE = [0.23, 1, 0.32, 1] as const;

const SectionHead = ({ kicker, title }: { kicker: string; title: string }) => (
  <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }} mb={{ base: 8, md: 12 }}>
    <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb="3">{kicker}</Text>
    <Text className="editorial" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="600" color="var(--synced-text)" letterSpacing="-0.02em" lineHeight="1">
      {title}
    </Text>
  </MotionBox>
);

const SkillPill = ({ icon, name }: { icon: IconType; name: string }) => (
  <Tooltip content={name} showArrow positioning={{ placement: "top" }}>
    <MotionBox
      whileHover={{ scale: 1.18, rotate: [0, -8, 8, 0], y: -4 }}
      transition={{ type: "spring", stiffness: 300 } as any}
      p={3} bg="var(--synced-surface)" borderRadius="full" borderWidth="1px" borderColor="var(--synced-border)"
      display="flex" alignItems="center" justifyContent="center" cursor="default" tabIndex={0} role="img" aria-label={name}
      _hover={{ borderColor: "var(--accent)" }} style={{ backdropFilter: "blur(8px)" }}
    >
      <Icon as={icon} h={6} w={6} color="var(--accent)" />
    </MotionBox>
  </Tooltip>
);

const SkillCategory = ({ title, icon, skills, delay }: { title: string; icon: IconType; skills: { icon: IconType; name: string }[]; delay: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  return (
    <MotionBox
      ref={ref} style={{ y } as any}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className="lift-card" p={8} bg="var(--synced-surface)" borderRadius="2xl" borderWidth="1px" borderColor="var(--synced-border)"
      _hover={{ borderColor: "var(--accent)" }}
    >
      <HStack mb={7} gap={3}>
        <Icon as={icon} w={6} h={6} color="var(--accent)" aria-label={title} />
        <Text className="editorial" fontSize="2xl" fontWeight="600" color="var(--synced-text)">{title}</Text>
      </HStack>
      <Flex gap={3} wrap="wrap">
        {skills.map((skill) => <SkillPill key={skill.name} icon={skill.icon} name={skill.name} />)}
      </Flex>
    </MotionBox>
  );
};

const WorkCard = ({ name, kicker, description, tags, link, index, wide = false }: {
  name: string; kicker: string; description: string; tags: string[]; link?: string; index: number; wide?: boolean;
}) => (
  <MotionBox
    initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: EASE, delay: index * 0.07 }}
    className="lift-card"
    position="relative" p={{ base: 7, md: 9 }} borderRadius="2xl" border="1px solid"
    borderColor="var(--synced-border)" bg="var(--synced-surface)"
    gridColumn={wide ? { base: "span 1", md: "span 2" } : "span 1"} overflow="hidden"
    style={{ backdropFilter: "blur(10px)" }}
    _hover={{ borderColor: "var(--accent)" }}
  >
    {link && (
      <Box position="absolute" top="6" right="6" zIndex="1" color="var(--synced-muted)">
        <a href={link} target="_blank" rel="noopener noreferrer"><BsArrowUpRight size={16} /></a>
      </Box>
    )}
    <Text className="mono-label" color="var(--accent)" mb="3" fontSize="9px">{kicker}</Text>
    <Text className="editorial" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="600" color="var(--synced-text)" lineHeight="1.15" mb="4">
      {name}
    </Text>
    <Text fontSize="sm" color="var(--synced-muted)" lineHeight="relaxed" mb="6" maxW={wide ? "100%" : "46ch"}>{description}</Text>
    <Flex gap="2" flexWrap="wrap">
      {tags.map((t) => (
        <Text key={t} className="mono-label" fontSize="9px" px="2.5" py="1" border="1px solid" borderColor="var(--synced-border)" borderRadius="full" color="var(--synced-muted)">
          {t}
        </Text>
      ))}
    </Flex>
  </MotionBox>
);

const ExpertiseCard = ({ title, description, icon, delay }: { title: string; description: string; icon: any; delay: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

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
      _hover={{ borderColor: "var(--accent)", transform: "scale(1.05) rotate(2deg)", boxShadow: "xl" }}
    >
      <Icon as={icon} w={12} h={12} color="var(--accent)" mb={6} aria-label={title} />
      <Heading size="lg" mb={4} fontWeight="800" color="var(--synced-text)">{title}</Heading>
      <Text color="var(--synced-muted)" fontSize="lg">{description}</Text>
    </MotionBox>
  );
};

const Research = () => {
  const skillCategories = [
    { title: "Quantitative & Math Tools", icon: BiCodeAlt, delay: 0.05, skills: [
      { icon: SiCplusplus, name: "C++" }, { icon: SiNumpy, name: "NumPy" }, { icon: SiPytorch, name: "PyTorch" },
      { icon: SiTensorflow, name: "TensorFlow" }, { icon: SiUbuntu, name: "Linux" }] },
  ];

  const projects = [
    {
      name: "Market OS: Quant Finance & HFT Infrastructure",
      kicker: "MARKET OS · SYSTEMATIC TRADING",
      description: "Built systematic trading infrastructure for reproducible, explainable alpha generation. Enforces strict capital allocation and walk-forward validation across three horizons: Theme Hunter (days-months), Mini Hedge Fund (days-weeks), and Market OS (years+). Developed a multi-agent framework (TradingAgents) featuring specialized analyst, researcher, and execution agents communicating with multi-LLM backends.",
      tags: ["Quant Finance", "HFT", "Feature Store", "Backtesting", "Multi-Agent Systems"],
      link: "https://github.com/buddywhitman/market-os",
      wide: true
    },
    {
      name: "Multimodal Biofeedback Autonomic Regulation",
      kicker: "SPRINGER NATURE · SCIENTIFIC REPORTS",
      description: "Published a peer-reviewed Q1 paper validating an emotion-adaptive biofeedback system. Deployed digital signal processing (DSP) pipelines for real-time biological data acquisition and physiological feature extraction (using LSTM and transformer encoder architectures) running under strict timing constraints on ESP32/Jetson.",
      tags: ["Biofeedback", "Nature", "DSP", "LSTM", "Real-Time Systems"],
      link: "https://doi.org/10.1038/s41598-026-46105-9"
    },
    {
      name: "Intellectual Property - 3 Patents",
      kicker: "MAHE · PROVISIONAL PATENTS",
      description: "Filer and owner of three patents: Adaptive EV Interface, Long-Range Solar Telemetry, and Robotic Solar Panel Cleaning. Designed electrical and control schemas, communication protocols, and mechanical control systems under academic supervision.",
      tags: ["Patents", "EV Telemetry", "Robotics", "Automotive Electronics"]
    },
    {
      name: "Stochastic Control Receding Horizon",
      kicker: "IEEE VTC 2026 · PEER-REVIEWED PAPER",
      description: "Authored research paper on Physics-Informed Stochastic Receding Horizon Control (PI-SRHC) for electric vehicle energy management. Modeled solar EV dynamics under uncertainty using receding-horizon optimization, achieving optimal power routing and state-of-charge trajectory preservation.",
      tags: ["Stochastic Control", "IEEE VTC", "Optimization", "Model Predictive Control"],
      link: "https://vtc2026spring.trackchair.com/paper/47987"
    },
    {
      name: "AQI Informatics India: Public Policy Systems",
      kicker: "AQI INFORMATICS · ENVIRONMENTAL INTELLIGENCE",
      description: "Developed an environmental intelligence data platform for the Indian subcontinent. Integrated explainable AI and machine learning regime detection algorithms over atmospheric datasets to assist public policy experts in assessing air quality trends and evaluating policy measures.",
      tags: ["Data Science", "Public Policy", "ESG", "Explainable AI", "Regime Detection"],
      link: "https://github.com/buddywhitman/aqi-informatics-india"
    }
  ];

  return (
    <Box pb={20}>
      {/* HERO */}
      <Box position="relative" minH={{ base: "58vh", md: "66vh" }} display="flex" flexDirection="column" justifyContent="flex-end" pb={{ base: 8, md: 12 }} overflow="hidden">
        <Box className="blob blob-alt" top="0%" left="-6%" w={{ base: "50vw", md: "34vw" }} h={{ base: "50vw", md: "34vw" }} bg="radial-gradient(circle, var(--c-indigo) 0%, transparent 68%)" opacity="0.16" />
        <Box className="blob" bottom="-5%" right="-6%" w={{ base: "45vw", md: "30vw" }} h={{ base: "45vw", md: "30vw" }} bg="radial-gradient(circle, var(--c-violet) 0%, transparent 68%)" opacity="0.18" style={{ animationDelay: "5s" }} />
        <Box position="relative" zIndex="1">
          <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb={{ base: 4, md: 6 }}>03 — SCIENTIFIC RESEARCH & COMPUTATIONAL SYSTEMS</Text>
          <Text as="h1" className="editorial" fontSize={{ base: "17vw", md: "13vw", lg: "11vw" }} fontWeight="600" lineHeight="0.85" letterSpacing="-0.03em">
            <Box as="span" color="var(--synced-text)">Rese</Box><Box as="span" className="tiedye-text">arch</Box>
          </Text>
          <Text mt={{ base: 6, md: 8 }} maxW="660px" fontSize={{ base: "md", md: "lg" }} color="var(--synced-muted)" lineHeight="relaxed">
            I conduct research at the intersection of control theory, biomedical engineering, and systematic finance. Fusing statistical modeling with embedded execution.
          </Text>
        </Box>
      </Box>

      {/* WHAT I'M GOOD AT */}
      <Box pt={{ base: 16, md: 24 }}>
        <SectionHead kicker="THE CORE FOCUS" title="What I'm good at" />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          <ExpertiseCard
            title="Stochastic Optimization"
            description="Modeling system dynamics under uncertainty using REC, physics-informed receding-horizon control, and predictive strategy solvers."
            icon={BiChip}
            delay={0.1}
          />
          <ExpertiseCard
            title="Signal & Biofeedback DSP"
            description="Real-time acquisition, preprocessing (STFT, filter design), and ML classification (LSTM, transformers) of high-frequency biological signals."
            icon={BiBrain}
            delay={0.2}
          />
          <ExpertiseCard
            title="Multi-Agent Simulation"
            description="Designing concurrent agentic architectures for quantitative modeling, risk validation, and predictive scenario simulation."
            icon={BiStats}
            delay={0.3}
          />
        </SimpleGrid>
      </Box>

      {/* SELECTED SYSTEMS */}
      <Box pt={{ base: 24, md: 36 }}>
        <SectionHead kicker="THE KNOWLEDGE BASE" title="Featured academic & quant research" />
        <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="4">
          {projects.map((p, idx) => (
            <WorkCard key={p.name} index={idx} name={p.name} kicker={p.kicker} description={p.description} tags={p.tags} link={p.link} wide={p.wide} />
          ))}
        </Box>
      </Box>

      {/* Publications & IP Section */}
      <Box mt={32}>
        <SectionHead kicker="THE ACADEMIC RECORD" title="Publications & IP" />
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
            _hover={{ transform: "rotate(-1deg) scale(1.02)", borderColor: "var(--accent)" }}
            transition={{ duration: 0.4 }}
          >
            <Box position="absolute" top={0} left={0} w="full" h="4px" bg="green.400" />
            <Flex alignItems="center" mb={6} gap={4}>
              <Icon as={FaFileAlt} color="brand.500" boxSize={8} />
              <Badge colorPalette="green" fontSize="sm" px={3} py={1}>Scientific Reports (Springer Nature, Q1)</Badge>
            </Flex>
            <Heading size="xl" mb={4} fontWeight="800" lineHeight="shorter" color="var(--synced-text)">Technical validation of a multimodal emotion-adaptive biofeedback system for autonomic regulation using guided breathing</Heading>
            <Text color="var(--synced-muted)" mb={8} fontSize="lg">Published in Sci Rep (2026). DOI: 10.1038/s41598-026-46105-9</Text>
            <ChakraLink 
                href="https://doi.org/10.1038/s41598-026-46105-9" 
                target="_blank" 
                rel="noopener noreferrer" 
                color="var(--accent)" 
                fontWeight="900" 
                fontSize="xl"
                _hover={{ color: "brand.600", textDecoration: "underline" }}
            >
              View Publication <Icon as={FaExternalLinkAlt} mx="2px" boxSize={4} />
            </ChakraLink>
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
            _hover={{ transform: "rotate(1deg) scale(1.02)", borderColor: "var(--accent)" }}
            transition={{ duration: 0.4 }}
          >
            <Box position="absolute" top={0} left={0} w="full" h="4px" bg="blue.400" />
            <Flex alignItems="center" mb={6} gap={4}>
              <Icon as={FaFileAlt} color="brand.500" boxSize={8} />
              <Badge colorPalette="blue" fontSize="sm" px={3} py={1}>IEEE VTC (A*)</Badge>
            </Flex>
            <Heading size="xl" mb={4} fontWeight="800" lineHeight="shorter" color="var(--synced-text)">Physics-Informed Stochastic Receding Horizon Control for Autonomous Energy Management in Solar Racing</Heading>
            <Text color="var(--synced-muted)" mb={8} fontSize="lg">Accepted for IEEE VTC (2026).</Text>
            <ChakraLink 
                href="https://vtc2026spring.trackchair.com/paper/47987" 
                target="_blank" 
                rel="noopener noreferrer" 
                color="var(--accent)" 
                fontWeight="900" 
                fontSize="xl"
                _hover={{ color: "brand.600", textDecoration: "underline" }}
            >
              View Paper <Icon as={FaExternalLinkAlt} mx="2px" boxSize={4} />
            </ChakraLink>
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

      {/* CAPABILITIES */}
      <Box pt={{ base: 24, md: 36 }}>
        <SectionHead kicker="THE MATHEMATICAL BASICS" title="Core modeling capabilities" />
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
          {skillCategories.map((c) => <SkillCategory key={c.title} {...c} />)}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Research;
