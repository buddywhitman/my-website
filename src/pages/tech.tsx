/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Text,
  SimpleGrid,
  useBreakpointValue,
  Spinner,
  Flex,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { BiCodeAlt, BiGitRepoForked, BiCheckCircle } from "react-icons/bi";
import { FaPython, FaJava, FaRobot, FaMicrochip, FaServer, FaCloud, FaPalette, FaTools } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import {
  SiJavascript, SiTypescript, SiDocker, SiKubernetes, SiVercel, SiGooglecloud,
  SiGit, SiCplusplus, SiC, SiReact, SiAngular, SiNextdotjs, SiSpring, SiChakraui,
  SiNumpy, SiAmazonec2, SiGooglechrome, SiArduino, SiArm, SiRaspberrypi, SiUbuntu,
  SiFigma, SiPytorch, SiTensorflow, SiKeras, SiFastapi, SiOpenai, SiNodered, SiAdobecreativecloud,
} from "react-icons/si";
import Slider from "react-slick";
import { motion, useScroll, useTransform } from "framer-motion";

import EnhancedProject from "components/EnhancedProject";
import GithubProject from "components/GithubProject";
import MoreProjectList from "data/more_projects";
import MotionBox from "components/motion/Box";
import { Tooltip } from "components/ui/tooltip";

const EASE = [0.23, 1, 0.32, 1];

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
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
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

const Tech = () => {
  const [data, SetData] = useState<any>(null);
  const SlidShow = useBreakpointValue({ base: 1, lg: 2 });

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const repos = await fetch("/api/get-repos");
        const toks = await repos.json();
        SetData(toks.status ? toks.data : { failed: true });
      } catch (e) {
        console.error("GitHub fetch failed", e);
        SetData({ failed: true });
      }
    };
    fetchGitHub();
  }, []);

  const skillCategories = [
    { title: "Languages", icon: BiCodeAlt, delay: 0.05, skills: [
      { icon: SiC, name: "C" }, { icon: SiCplusplus, name: "C++" }, { icon: FaPython, name: "Python" },
      { icon: FaJava, name: "Java" }, { icon: SiTypescript, name: "TypeScript" }, { icon: SiJavascript, name: "JavaScript" }] },
    { title: "Systems & Embedded", icon: FaMicrochip, delay: 0.1, skills: [
      { icon: FaMicrochip, name: "STM32" }, { icon: SiArm, name: "Arm Cortex" }, { icon: FaTools, name: "Verilog" },
      { icon: SiArduino, name: "Arduino" }, { icon: SiRaspberrypi, name: "Raspberry Pi" }, { icon: SiUbuntu, name: "Linux" }] },
    { title: "ML & AI", icon: FaRobot, delay: 0.15, skills: [
      { icon: SiPytorch, name: "PyTorch" }, { icon: SiTensorflow, name: "TensorFlow" }, { icon: SiKeras, name: "Keras" },
      { icon: SiOpenai, name: "OpenAI / LLMs" }, { icon: SiNodered, name: "Agentic / n8n" }, { icon: SiNumpy, name: "NumPy" }] },
    { title: "Web & Full-Stack", icon: FaServer, delay: 0.2, skills: [
      { icon: SiReact, name: "React" }, { icon: SiNextdotjs, name: "Next.js" }, { icon: SiAngular, name: "Angular" },
      { icon: SiSpring, name: "Spring Boot" }, { icon: SiFastapi, name: "FastAPI" }, { icon: SiChakraui, name: "Chakra UI" }] },
    { title: "Cloud & DevOps", icon: FaCloud, delay: 0.25, skills: [
      { icon: SiAmazonec2, name: "AWS" }, { icon: SiGooglecloud, name: "Google Cloud" }, { icon: SiDocker, name: "Docker" },
      { icon: SiKubernetes, name: "Kubernetes" }, { icon: SiVercel, name: "Vercel" }, { icon: SiGit, name: "Git" }] },
    { title: "Design", icon: FaPalette, delay: 0.3, skills: [
      { icon: SiFigma, name: "Figma" }, { icon: SiAdobecreativecloud, name: "Adobe CC" },
      { icon: SiGooglechrome, name: "UX Research" }, { icon: FaPalette, name: "Branding" }] },
  ];

  return (
    <Box pb={20}>
      {/* HERO */}
      <Box position="relative" minH={{ base: "58vh", md: "66vh" }} display="flex" flexDirection="column" justifyContent="flex-end" pb={{ base: 8, md: 12 }} overflow="hidden">
        <Box className="blob blob-alt" top="0%" left="-6%" w={{ base: "50vw", md: "34vw" }} h={{ base: "50vw", md: "34vw" }} bg="radial-gradient(circle, var(--c-teal) 0%, transparent 68%)" opacity="0.16" />
        <Box className="blob" bottom="-5%" right="-6%" w={{ base: "45vw", md: "30vw" }} h={{ base: "45vw", md: "30vw" }} bg="radial-gradient(circle, var(--c-indigo) 0%, transparent 68%)" opacity="0.18" style={{ animationDelay: "5s" }} />
        <Box position="relative" zIndex="1">
          <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb={{ base: 4, md: 6 }}>01 — FROM SILICON TO INFERENCE</Text>
          <Text as="h1" className="editorial" fontSize={{ base: "17vw", md: "13vw", lg: "11vw" }} fontWeight="600" lineHeight="0.85" letterSpacing="-0.03em">
            <Box as="span" color="var(--synced-text)">Tech</Box><Box as="span" className="tiedye-text">nology</Box>
          </Text>
          <Text mt={{ base: 6, md: 8 }} maxW="660px" fontSize={{ base: "md", md: "lg" }} color="var(--synced-muted)" lineHeight="relaxed">
            I build down the whole stack — from RTL controllers taped out to GDSII, to deterministic firmware
            on Cortex-M7, to agentic inference running in production. Safety-critical, low-latency, and
            allergic to magic. Here&apos;s how the machine is put together.
          </Text>
        </Box>
      </Box>

      {/* CAPABILITIES */}
      <Box pt={{ base: 16, md: 24 }}>
        <SectionHead kicker="THE CAPABILITY MAP" title="What I reach for" />
        <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} gap={6}>
          {skillCategories.map((c) => <SkillCategory key={c.title} {...c} />)}
        </SimpleGrid>
      </Box>

      {/* BUILD LOG */}
      <Box pt={{ base: 24, md: 36 }}>
        <SectionHead kicker="THE BUILD LOG" title="Selected systems" />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {MoreProjectList.map((value) => (
            <EnhancedProject key={value.id} icons={value.icons} title={value.title} description={value.description} tags={value.tags} />
          ))}
        </SimpleGrid>
      </Box>

      {/* OPEN SOURCE + IMPACT */}
      <VStack gap={28} align="stretch" pt={{ base: 24, md: 36 }}>
        <Box>
          <Flex justify="space-between" align="flex-end" mb={10} flexWrap="wrap" gap="3">
            <Box>
              <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb="3">IN THE OPEN</Text>
              <Text className="editorial" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="600" color="var(--synced-text)">Open source</Text>
            </Box>
            <HStack gap={3} color="var(--synced-muted)">
              <Icon as={BiGitRepoForked} boxSize={6} />
              <Text className="mono-label" fontSize="9px" display={{ base: "none", sm: "block" }}>Pinned repositories</Text>
            </HStack>
          </Flex>
          <Box minH="250px">
            {!data ? (
              <Flex justify="center" align="center" minH="250px"><Spinner color="var(--accent)" size="xl" /></Flex>
            ) : (
              <Slider infinite centerMode className="center" pauseOnHover={false} slidesToShow={SlidShow} slidesToScroll={1} autoplay autoplaySpeed={3000}>
                {data?.repositories?.nodes?.map((value: any) => <GithubProject key={value.id} data={value} />)}
              </Slider>
            )}
          </Box>
        </Box>

        <Box>
          <Flex justify="space-between" align="flex-end" mb={10} flexWrap="wrap" gap="3">
            <Box>
              <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb="3">WHERE IT LANDED</Text>
              <Text className="editorial" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="600" color="var(--synced-text)">Impact</Text>
            </Box>
            <HStack gap={3} color="var(--accent)">
              <Icon as={BiCheckCircle} boxSize={6} />
              <Text className="mono-label" fontSize="9px" display={{ base: "none", sm: "block" }}>Org contributions</Text>
            </HStack>
          </Flex>
          <Box minH="250px">
            {!data ? (
              <Flex justify="center" align="center" minH="250px"><Spinner color="var(--accent)" size="xl" /></Flex>
            ) : (
              <Slider infinite centerMode className="center" pauseOnHover={false} slidesToShow={SlidShow} slidesToScroll={1} autoplay autoplaySpeed={3000}>
                {data?.repositoriesContributedTo?.nodes?.map((value: any) => <GithubProject key={value.id} data={value} />)}
              </Slider>
            )}
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default Tech;
