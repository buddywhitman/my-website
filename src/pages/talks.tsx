/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Text, VStack, HStack, SimpleGrid, Icon, Link as ChakraLink, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight, BsFileEarmarkPdf, BsMic } from "react-icons/bs";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import SchemaMarkup from "components/SchemaMarkup";
import Image from "next/image";

const MotionBox = motion(Box) as any;
const EASE = [0.23, 1, 0.32, 1] as const;

interface TalkCardProps {
  title: string;
  event: string;
  organization: string;
  date: string;
  location: string;
  description: string;
  topics: string[];
  imageSrc: string;
  pdfUrl: string;
  index: number;
}

const TalkCard = ({
  title,
  event,
  organization,
  date,
  location,
  description,
  topics,
  imageSrc,
  pdfUrl,
  index,
}: TalkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionBox
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.07 }}
      className="lift-card"
      position="relative"
      overflow="hidden"
      p={{ base: 6, md: 8 }}
      borderRadius="2xl"
      border="1px solid"
      borderColor="var(--synced-border)"
      bg="var(--synced-surface)"
      style={{ backdropFilter: "blur(10px)" }}
      _hover={{ borderColor: "var(--accent)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Gradient Background */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="300px"
        h="300px"
        bg={`radial-gradient(circle, var(--c-indigo) 0%, transparent 70%)`}
        opacity="0.08"
        filter="blur(50px)"
        pointerEvents="none"
      />

      <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 6, lg: 8 }} align="stretch">
        {/* Landscape Image Column */}
        <Box
          flex="1.2"
          position="relative"
          borderRadius="xl"
          overflow="hidden"
          border="1px solid"
          borderColor="var(--synced-border)"
          minH={{ base: "220px", sm: "300px", lg: "auto" }}
          className="image-container"
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 992px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              transform: isHovered ? "scale(1.03)" : "scale(1)",
              transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          />
        </Box>

        {/* Info Column */}
        <Flex flex="1.8" direction="column" justify="space-between">
          <Box>
            {/* Meta Tags */}
            <Flex gap="3" flexWrap="wrap" mb="4" align="center">
              <Badge colorPalette="purple" fontSize="9px" px="2.5" py="1" borderRadius="md" textTransform="uppercase">
                {event}
              </Badge>
              <HStack gap={1} color="var(--synced-muted)" fontSize="xs" className="mono-label">
                <Icon as={FaCalendarAlt} boxSize={3} />
                <Text>{date}</Text>
              </HStack>
              <HStack gap={1} color="var(--synced-muted)" fontSize="xs" className="mono-label">
                <Icon as={FaMapMarkerAlt} boxSize={3} />
                <Text>{location}</Text>
              </HStack>
            </Flex>

            {/* Title */}
            <Text
              className="editorial"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="600"
              color="var(--synced-text)"
              lineHeight="1.15"
              mb="4"
            >
              {title}
            </Text>

            {/* Host Organization */}
            <HStack gap={2} mb="4" color="var(--accent)" className="mono-label" fontSize="xs">
              <Icon as={FaUsers} boxSize={4} />
              <Text>{organization}</Text>
            </HStack>

            {/* Description */}
            <Text fontSize="sm" color="var(--synced-muted)" lineHeight="relaxed" mb="6" maxW="68ch">
              {description}
            </Text>

            {/* Key Topics List */}
            <Text className="mono-label" fontSize="9px" color="var(--synced-muted)" mb="3">
              Covered Subjects:
            </Text>
            <Flex gap="2" flexWrap="wrap" mb="6">
              {topics.map((topic) => (
                <Text
                  key={topic}
                  className="mono-label"
                  fontSize="9px"
                  px="2.5"
                  py="1"
                  border="1px solid"
                  borderColor="var(--synced-border)"
                  borderRadius="full"
                  color="var(--synced-text)"
                  bg="rgba(255,255,255,0.02)"
                >
                  {topic}
                </Text>
              ))}
            </Flex>
          </Box>

          {/* Action Link to Slides */}
          <Box>
            <ChakraLink
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              display="inline-flex"
              alignItems="center"
              gap="2"
              color="var(--accent)"
              fontWeight="700"
              fontSize="sm"
              className="mono-label"
              _hover={{ color: "brand.600", textDecoration: "underline" }}
            >
              <Icon as={BsFileEarmarkPdf} /> View Presentation Slides (PDF)
            </ChakraLink>
          </Box>
        </Flex>
      </Flex>
    </MotionBox>
  );
};

const Talks = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pulkit Kumar",
    jobTitle: "Embedded Software Engineer & Researcher",
    knowsAbout: ["Open Source Hardware", "Embedded Systems", "VLSI", "ASIC", "ArduPilot", "Skywalker"],
  };

  const talksList: TalkCardProps[] = [
    {
      title: "Open Source Hardware",
      event: "Manipal Open Source Week",
      organization: "Manipal Open Source Society (MOSS)",
      date: "13th Apr, 2024",
      location: "MIT Manipal",
      description: "A comprehensive guide on the evolution, impact, and engineering pathways of Open Source Hardware. Walked through the structures of OSH (schematics, BoM, Gerbers, and firmware), CERN open hardware licensing models, and practical upstream contribution workflows (overloading Arduino libraries like LiquidCrystal for 5x10 displays). Outlined maps for students to transition from high-level Arduino code to bare-metal STM32 blue-pill coding, custom multi-layer PCB design (KiCad/Altium), embedded Linux (Yocto/Buildroot), RISC-V architectures, and the open-source ASIC/VLSI synthesis flow using Yosys and OpenLANE.",
      topics: [
        "OpenLANE",
        "Skywalker",
        "ArduPilot",
        "Arduino",
        "Embedded Systems",
        "Hardware Design",
        "VLSI",
        "ASIC Design Flow",
        "Yosys",
        "Yocto",
        "Buildroot",
        "RISC-V",
        "CERN OHR License"
      ],
      imageSrc: "/16.webp",
      pdfUrl: "/docs/Open-Source-Hardware.pdf",
      index: 0,
    },
  ];

  return (
    <Box pb={20}>
      <SchemaMarkup data={schema} />

      {/* HERO */}
      <Box
        position="relative"
        minH={{ base: "62vh", md: "70vh" }}
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        pb={{ base: 8, md: 12 }}
        overflow="hidden"
      >
        <Box
          className="blob blob-alt"
          top="0%"
          right="-5%"
          w={{ base: "55vw", md: "38vw" }}
          h={{ base: "55vw", md: "38vw" }}
          bg="radial-gradient(circle, var(--c-indigo) 0%, transparent 68%)"
          opacity="0.16"
        />
        <Box
          className="blob"
          bottom="0%"
          left="-8%"
          w={{ base: "45vw", md: "28vw" }}
          h={{ base: "45vw", md: "28vw" }}
          bg="radial-gradient(circle, var(--c-violet) 0%, transparent 68%)"
          opacity="0.16"
          style={{ animationDelay: "5s" }}
        />
        <Box position="relative" zIndex="1">
          <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb={{ base: 4, md: 6 }}>
            02 — SPEAKING ENGAGEMENTS & WORKSHOPS
          </Text>
          <Text
            as="h1"
            className="editorial"
            fontSize={{ base: "20vw", md: "16vw", lg: "13vw" }}
            fontWeight="600"
            lineHeight="0.85"
            letterSpacing="-0.03em"
          >
            <Box as="span" color="var(--synced-text)">Ta</Box>
            <Box as="span" className="tiedye-text">lks</Box>
          </Text>
          <Text
            mt={{ base: 6, md: 8 }}
            maxW="640px"
            fontSize={{ base: "md", md: "lg" }}
            color="var(--synced-muted)"
            lineHeight="relaxed"
          >
            I speak about the architecture of physical compute — teaching open-source chip design workflows, 
            embedded systems firmware, custom PCBs, and real-time safety-critical control paradigms.
          </Text>
        </Box>
      </Box>

      {/* PHILOSOPHY / INTRO */}
      <Box py={{ base: 16, md: 24 }}>
        <Text
          className="editorial"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="500"
          color="var(--synced-text)"
          lineHeight="1.25"
          letterSpacing="-0.01em"
          maxW="100%"
        >
          Sharing design patterns and open schematics is the <Box as="span" className="tiedye-text">most direct path</Box> to collaborative engineering breakthroughs.
        </Text>
      </Box>

      {/* LIST OF TALKS */}
      <Box>
        <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb={{ base: 8, md: 12 }}>
          SELECTED ENGAGEMENTS
        </Text>
        <VStack gap={8} align="stretch">
          {talksList.map((talk) => (
            <TalkCard key={talk.title} {...talk} />
          ))}
        </VStack>
      </Box>

      {/* CTA */}
      <Box className="full-bleed tiedye-bg" position="relative" overflow="hidden" mt={{ base: 16, md: 24 }}>
        <Box position="absolute" inset="0" bg="rgba(0,0,0,0.12)" pointerEvents="none" />
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap="8"
          maxW="1280px"
          mx="auto"
          px={{ base: 8, md: 20 }}
          py={{ base: 14, md: 18 }}
          position="relative"
          zIndex="1"
        >
          <Text
            className="editorial"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="600"
            color="#fff"
            lineHeight="1.05"
            letterSpacing="-0.02em"
            maxW="18ch"
          >
            Organizing an event or want to collaborate on a hardware workshop?
          </Text>
          <Link
            href="/contact"
            className="press-btn"
            style={{
              fontFamily: "'Space Grotesk','Inter',sans-serif",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
              background: "var(--void)",
              color: "var(--synced-text)",
              padding: "16px 36px",
              borderRadius: "9999px",
              cursor: "pointer",
            }}
          >
            Let's talk <BsArrowRight />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Talks;
