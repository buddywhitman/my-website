import { Box, Flex, Text, SimpleGrid, Icon, VStack, HStack, Link as ChakraLink, Heading } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BsArrowUpRight, BsCodeSquare } from "react-icons/bs";
import { FaPython, FaJava, FaRobot, FaServer, FaCloud } from "react-icons/fa";
import { BiCodeAlt, BiBrain, BiStats } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import {
  SiJavascript, SiTypescript, SiDocker, SiKubernetes, SiVercel, SiGooglecloud,
  SiGit, SiReact, SiNextdotjs, SiSpring, SiChakraui, SiNumpy, SiAmazonec2,
  SiPytorch, SiTensorflow, SiKeras, SiOpenai, SiNodered, SiFastapi
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

const Software = () => {
  const skillCategories = [
    { title: "Languages", icon: BiCodeAlt, delay: 0.05, skills: [
      { icon: SiTypescript, name: "TypeScript" }, { icon: SiJavascript, name: "JavaScript" },
      { icon: FaPython, name: "Python" }, { icon: FaJava, name: "Java" }] },
    { title: "ML & AI", icon: FaRobot, delay: 0.1, skills: [
      { icon: SiPytorch, name: "PyTorch" }, { icon: SiTensorflow, name: "TensorFlow" }, { icon: SiKeras, name: "Keras" },
      { icon: SiOpenai, name: "OpenAI / LLMs" }, { icon: SiNodered, name: "Agentic / n8n" }, { icon: SiNumpy, name: "NumPy" }] },
    { title: "Web & Full-Stack", icon: FaServer, delay: 0.15, skills: [
      { icon: SiReact, name: "React" }, { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiSpring, name: "Spring Boot" }, { icon: SiFastapi, name: "FastAPI" }, { icon: SiChakraui, name: "Chakra UI" }] },
    { title: "Cloud & DevOps", icon: FaCloud, delay: 0.2, skills: [
      { icon: SiAmazonec2, name: "AWS" }, { icon: SiGooglecloud, name: "Google Cloud" }, { icon: SiDocker, name: "Docker" },
      { icon: SiKubernetes, name: "Kubernetes" }, { icon: SiVercel, name: "Vercel" }, { icon: SiGit, name: "Git" }] },
  ];

  const projects = [
    {
      name: "Fettle: Healthcare Voice AI",
      kicker: "FETTLE · FOUNDING ENGINEER",
      description: "Distributed voice agents for hospital customer experience and automated workflows. Orchestrated high-concurrency SIP trunking with LiveKit, built a cross-modal clinical recommender engine, and optimized real-time sub-second inference using PyTorch and TorchRec on Kubernetes. Owned the complete backend design and DevOps lifecycle.",
      tags: ["Agentic AI", "LiveKit", "PyTorch", "Kubernetes", "FastAPI", "Inference"],
      link: "https://letsfettle.com",
      wide: true
    },
    {
      name: "Solar Racing Digital Twin",
      kicker: "SOLARMOBIL · DATA ENGINEERING",
      description: "A real-time telemetry and race-strategy engine for a solar EV. Fused real-time GIS elevation data, live weather APIs, and vehicle state dynamics using a stochastic receding-horizon model predictive control framework. Handled time-series data storage on InfluxDB and designed real-time observability dashboards with Grafana.",
      tags: ["InfluxDB", "Grafana", "Data Engineering", "Control Theory", "Python", "Observability"],
      link: "https://vtc2026spring.trackchair.com/paper/47987"
    },
    {
      name: "Teachafy Labs",
      kicker: "GUAQ AI · FOUNDING WORK",
      description: "Enterprise generative AI solutions. Built complex multi-agent workflows and high-performance retrieval-augmented generation (RAG) pipelines. Developed custom integrations linking vector databases directly to corporate ERP/CRM systems, enabling sub-second factual query answering.",
      tags: ["RAG", "Agentic AI", "LangChain", "Vector DB", "ERP"],
      link: "https://teachafy.com"
    },
    {
      name: "multi-TB Document Processing at DCPR AI",
      kicker: "DCPR AI · PIP PACKAGE",
      description: "Distributed multi-TB document ingestion pipeline using GCS and Gemini. Cut manual processing queues by 92% and storage costs by 74%.",
      tags: ["Kubernetes", "GCS", "Redis", "Distributed System"],
      link: "https://pypi.org/project/dist-gcs-pdf-processing/"
    },
    {
      name: "Dev Team Lead",
      kicker: "MIT, MANIPAL · TICKETING & SCALE",
      description: "Led the developer division for national-level college fests. Designed and deployed highly concurrent ticketing, registration, and payment gateway platforms. Maintained 99.9% uptime and handled tens of thousands of simultaneous requests under heavy peak loads.",
      tags: ["System Design", "Ticketing", "Node.js", "Chakra UI", "Scale"],
      link: "https://manipal.edu/mit.html"
    }
  ];

  return (
    <Box pb={20}>
      {/* HERO */}
      <Box position="relative" minH={{ base: "58vh", md: "66vh" }} display="flex" flexDirection="column" justifyContent="flex-end" pb={{ base: 8, md: 12 }} overflow="hidden">
        <Box className="blob blob-alt" top="0%" left="-6%" w={{ base: "50vw", md: "34vw" }} h={{ base: "50vw", md: "34vw" }} bg="radial-gradient(circle, var(--c-violet) 0%, transparent 68%)" opacity="0.16" />
        <Box className="blob" bottom="-5%" right="-6%" w={{ base: "45vw", md: "30vw" }} h={{ base: "45vw", md: "30vw" }} bg="radial-gradient(circle, var(--c-teal) 0%, transparent 68%)" opacity="0.18" style={{ animationDelay: "5s" }} />
        <Box position="relative" zIndex="1">
          <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb={{ base: 4, md: 6 }}>01 — HIGH CONCURRENCY & INFERENCE AT SCALE</Text>
          <Text as="h1" className="editorial" fontSize={{ base: "17vw", md: "13vw", lg: "11vw" }} fontWeight="600" lineHeight="0.85" letterSpacing="-0.03em">
            <Box as="span" color="var(--synced-text)">Soft</Box><Box as="span" className="tiedye-text">ware</Box>
          </Text>
          <Text mt={{ base: 6, md: 8 }} maxW="660px" fontSize={{ base: "md", md: "lg" }} color="var(--synced-muted)" lineHeight="relaxed">
            I engineer high-throughput backend architectures, low-latency AI inference pipelines, and structured telemetry databases. Allergy to latency, devotion to reliability.
          </Text>
        </Box>
      </Box>

      {/* What I'm good at Section */}
      <Box pt={{ base: 16, md: 24 }}>
        <SectionHead kicker="THE CORE FOCUS" title="What I'm good at" />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          <ExpertiseCard
            title="Agentic AI & Inference"
            description="Building autonomous LLM workflows and optimized inference pipelines using LiveKit, PyTorch, and distributed K8s clusters."
            icon={BiBrain}
            delay={0.1}
          />
          <ExpertiseCard
            title="Data Engineering"
            description="Implementing real-time signal acquisition and processing pipelines for bio-signals and telemetry."
            icon={BiStats}
            delay={0.2}
          />
          <ExpertiseCard
            title="Distributed Systems"
            description="Developing scalable backends with FastAPI, Kubernetes, and cloud-native observability stacks."
            icon={BiCodeAlt}
            delay={0.3}
          />
        </SimpleGrid>
      </Box>

      {/* SELECTED SYSTEMS */}
      <Box pt={{ base: 24, md: 36 }}>
        <SectionHead kicker="THE SHIPPED CODEBASE" title="Featured software work" />
        <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="4">
          {projects.map((p, idx) => (
            <WorkCard key={p.name} index={idx} name={p.name} kicker={p.kicker} description={p.description} tags={p.tags} link={p.link} wide={p.wide} />
          ))}
        </Box>
      </Box>

      {/* CAPABILITIES */}
      <Box pt={{ base: 24, md: 36 }}>
        <SectionHead kicker="THE TECHNICAL STACK" title="What I write & deploy" />
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
          {skillCategories.map((c) => <SkillCategory key={c.title} {...c} />)}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Software;
