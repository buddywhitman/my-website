import { Box, Flex, Text, SimpleGrid, Icon, VStack, HStack, Link as ChakraLink, Heading } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaMicrochip, FaTools } from "react-icons/fa";
import { BiCodeAlt, BiChip, BiTimeFive } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import {
  SiC, SiCplusplus, SiArduino, SiArm, SiRaspberrypi, SiUbuntu,
  SiAltiumdesigner, SiKicad, SiXilinx
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

const Hardware = () => {
  const skillCategories = [
    { title: "Languages & Hardware Description", icon: BiCodeAlt, delay: 0.05, skills: [
      { icon: SiC, name: "C" }, { icon: SiCplusplus, name: "C++" }, { icon: FaTools, name: "Verilog" }] },
    { title: "Systems & Embedded", icon: FaMicrochip, delay: 0.1, skills: [
      { icon: FaMicrochip, name: "STM32" }, { icon: SiArm, name: "Arm Cortex" },
      { icon: SiArduino, name: "Arduino" }, { icon: SiRaspberrypi, name: "Raspberry Pi" }, { icon: SiUbuntu, name: "Linux" }] },
    { title: "EDA & PCB Design", icon: FaTools, delay: 0.15, skills: [
      { icon: SiAltiumdesigner, name: "Altium Designer" }, { icon: SiKicad, name: "KiCAD" },
      { icon: SiXilinx, name: "Xilinx Vivado" }, { icon: FaTools, name: "UVM / SystemVerilog" }] },
  ];

  const projects = [
    {
      name: "SolarMobil EV Electronics Architecture",
      kicker: "SOLARMOBIL · ELECTRONICS HEAD",
      description: "Engineered safety-critical automotive electronics and deterministic FreeRTOS firmware on STM32H7 for a high-performance solar racing EV. Developed TouchGFX HMI driver interfaces, a sub-1GHz 1Hz RF telemetry engine, and cloud-based predictive telemetry databases with GIS and Solcast weather data fusion.",
      tags: ["FreeRTOS", "STM32H7", "TouchGFX", "Control Systems", "C++", "Telemetry"],
      link: "https://www.solarmobilmanipal.org",
      wide: true
    },
    {
      name: "CoreEL RTL2GDSII Silicon Flow",
      kicker: "COREEL · ASIC & FPGA DESIGN",
      description: "Implemented high-speed CAN-bus and I2C controllers from RTL to GDSII. Designed logic in Verilog, built testbenches and ran verification using UVM (Universal Verification Methodology), performed Static Timing Analysis (STA), and completed timing closure and floorplanning on Xilinx Virtex-7 FPGAs using Vivado.",
      tags: ["Verilog", "UVM", "Vivado", "FPGA", "ASIC Flow", "STA"],
      link: "https://coreel.com/"
    },
    {
      name: "Krop AI Carrier Board & CV",
      kicker: "KROP AI · HARDWARE DESIGN",
      description: "Designed custom multi-layer carrier boards utilizing Nvidia Jetson Nano and ESP32 microcontrollers. Developed custom device drivers for camera sensors and sensory peripherals, implementing real-time low-latency computer vision classification models directly on edge hardware.",
      tags: ["PCB Design", "ESP32", "Jetson", "Peripherals", "Computer Vision", "Hardware"],
      link: "https://kropai.com"
    },
    {
      name: "Symbionic Physiological DAQ",
      kicker: "SYMBIONIC · BIOMEDICAL INSTRUMENTATION",
      description: "Created a high-fidelity data acquisition system (DAQ) for capturing and pre-processing analog EMG and EEG physiological signals. Designed analog front-ends (AFEs), filters, and ADC interfaces, combining them with lightweight on-device machine learning classifiers for gesture control.",
      tags: ["DAQ", "EEG/EMG", "Signal Processing", "Edge AI", "Schematic Design"],
      link: "https://www.symbionic.co"
    },
    {
      name: "SP Robotics Works Autonomous Logistics",
      kicker: "SP ROBOTICS · LOGISTICS & IOT",
      description: "Developed hardware configurations, motor drivers, and deterministic control code for autonomous warehouse logistics robots and search-and-rescue utility vehicles. Formulated low-power wireless sensor networks for smart residential and industrial IoT frameworks.",
      tags: ["Robotics", "IoT", "Motor Drivers", "Wireless Networks", "Firmware"],
      link: "https://sprw.in/"
    }
  ];

  return (
    <Box pb={20}>
      {/* HERO */}
      <Box position="relative" minH={{ base: "58vh", md: "66vh" }} display="flex" flexDirection="column" justifyContent="flex-end" pb={{ base: 8, md: 12 }} overflow="hidden">
        <Box className="blob blob-alt" top="0%" left="-6%" w={{ base: "50vw", md: "34vw" }} h={{ base: "50vw", md: "34vw" }} bg="radial-gradient(circle, var(--c-coral) 0%, transparent 68%)" opacity="0.16" />
        <Box className="blob" bottom="-5%" right="-6%" w={{ base: "45vw", md: "30vw" }} h={{ base: "45vw", md: "30vw" }} bg="radial-gradient(circle, var(--c-indigo) 0%, transparent 68%)" opacity="0.18" style={{ animationDelay: "5s" }} />
        <Box position="relative" zIndex="1">
          <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb={{ base: 4, md: 6 }}>02 — DETERMINISTIC CONTROL & SILICON FLOWS</Text>
          <Text as="h1" className="editorial" fontSize={{ base: "17vw", md: "13vw", lg: "11vw" }} fontWeight="600" lineHeight="0.85" letterSpacing="-0.03em">
            <Box as="span" color="var(--synced-text)">Hard</Box><Box as="span" className="tiedye-text">ware</Box>
          </Text>
          <Text mt={{ base: 6, md: 8 }} maxW="660px" fontSize={{ base: "md", md: "lg" }} color="var(--synced-muted)" lineHeight="relaxed">
            I design automotive-grade PCB architectures, write bare-metal driver code, and tape out digital controllers. Bringing determinism to safety-critical systems.
          </Text>
        </Box>
      </Box>

      {/* SELECTED SYSTEMS */}
      <Box pt={{ base: 16, md: 24 }}>
        <SectionHead kicker="THE PHYSICAL SYSTEMS" title="Featured hardware work" />
        <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="4">
          {projects.map((p, idx) => (
            <WorkCard key={p.name} index={idx} name={p.name} kicker={p.kicker} description={p.description} tags={p.tags} link={p.link} wide={p.wide} />
          ))}
        </Box>
      </Box>

      {/* CAPABILITIES */}
      <Box pt={{ base: 24, md: 36 }}>
        <SectionHead kicker="THE HARDWARE TOOLKIT" title="What I build with" />
        <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} gap={6}>
          {skillCategories.map((c) => <SkillCategory key={c.title} {...c} />)}
        </SimpleGrid>
      </Box>

      {/* WHAT I'M GOOD AT */}
      <Box pt={{ base: 24, md: 36 }}>
        <SectionHead kicker="THE CORE FOCUS" title="What I'm good at" />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          <ExpertiseCard
            title="HPC & Low-Latency"
            description="Architecting high-frequency, real-time systems using FreeRTOS, STM32, and Arm Cortex architectures for HFT and racing."
            icon={BiChip}
            delay={0.1}
          />
          <ExpertiseCard
            title="SoC Design"
            description="Experience with RTL design (Verilog), UVM verification, and ASIC design flows (STA, PPA, floorplanning)."
            icon={BiCodeAlt}
            delay={0.2}
          />
          <ExpertiseCard
            title="Safety-Critical Systems"
            description="Designing deterministic task scheduling and high-performance sensor fusion for automotive applications."
            icon={BiTimeFive}
            delay={0.3}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Hardware;
