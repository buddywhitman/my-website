/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Text, VStack, HStack, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsArrowRight, BsFilm, BsSoundwave } from "react-icons/bs";
import { FaMusic, FaWaveSquare, FaSlidersH, FaBrain, FaVideo, FaDrum } from "react-icons/fa";
import {
  SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd,
  SiAdobeaftereffects, SiAdobepremierepro, SiSketch, SiFramer,
  SiAbletonlive
} from "react-icons/si";
import SchemaMarkup from "components/SchemaMarkup";

const MotionBox = motion(Box) as any;
const EASE = [0.23, 1, 0.32, 1] as const;

interface DesignCaseProps {
  kicker: string;
  title: string;
  result: string;
  body: string;
  tools: string[];
  index: number;
  wide?: boolean;
}
const DesignCase = ({ kicker, title, result, body, tools, index, wide }: DesignCaseProps) => (
  <MotionBox
    initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: EASE, delay: index * 0.07 }}
    className="lift-card" position="relative" overflow="hidden"
    p={{ base: 7, md: 9 }} borderRadius="2xl" border="1px solid" borderColor="var(--synced-border)"
    bg="var(--synced-surface)" style={{ backdropFilter: "blur(10px)" }}
    gridColumn={wide ? { base: "span 1", md: "span 2" } : "span 1"}
    _hover={{ borderColor: "var(--accent)" }}
  >
    <Box position="absolute" top="-40%" right="-15%" w="240px" h="240px"
      bg={`radial-gradient(circle, var(--c-${["coral", "violet", "teal", "saffron", "magenta"][index % 5]}) 0%, transparent 70%)`}
      opacity="0.1" filter="blur(45px)" pointerEvents="none" />
    <Flex justify="space-between" align="flex-start" position="relative" zIndex="1" mb="5">
      <Text className="mono-label" color="var(--accent)" fontSize="9px">{kicker}</Text>
      <Text className="editorial" fontSize={{ base: "xl", md: "2xl" }} fontWeight="600" color="var(--synced-text)" lineHeight="1" textAlign="right" maxW="48%">
        {result}
      </Text>
    </Flex>
    <Text className="editorial" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="600" color="var(--synced-text)" lineHeight="1.15" mb="4" position="relative" zIndex="1">
      {title}
    </Text>
    <Text fontSize="sm" color="var(--synced-muted)" lineHeight="relaxed" mb="6" maxW="60ch" position="relative" zIndex="1">{body}</Text>
    <Flex gap="2" flexWrap="wrap" position="relative" zIndex="1">
      {tools.map((t) => (
        <Text key={t} className="mono-label" fontSize="9px" px="2.5" py="1" border="1px solid" borderColor="var(--synced-border)" borderRadius="full" color="var(--synced-muted)">{t}</Text>
      ))}
    </Flex>
  </MotionBox>
);

const ToolPill = ({ icon: Icon, name }: { icon: any; name: string }) => {
  const [h, setH] = useState(false);
  return (
    <Flex onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      align="center" gap="3" px="5" py="3" borderRadius="full" border="1px solid"
      borderColor={h ? "var(--accent)" : "var(--synced-border)"} bg="var(--synced-surface)"
      style={{ backdropFilter: "blur(8px)", transform: h ? "translateY(-3px)" : "none", transition: "all 220ms cubic-bezier(0.23,1,0.32,1)" }}>
      <Icon size={18} style={{ color: h ? "var(--accent)" : "var(--synced-muted)", transition: "color 200ms ease" }} />
      <Text className="mono-label" fontSize="9px" color="var(--synced-text)">{name}</Text>
    </Flex>
  );
};

const Design = () => {
  const schema = {
    "@context": "https://schema.org", "@type": "Person", name: "Pulkit Kumar",
    jobTitle: "Designer", knowsAbout: ["UI/UX Design", "Brand Design", "Interaction Design", "Design Research"],
  };
  return (
    <Box pb={20}>
      <SchemaMarkup data={schema} />

      {/* HERO */}
      <Box position="relative" minH={{ base: "62vh", md: "70vh" }} display="flex" flexDirection="column" justifyContent="flex-end" pb={{ base: 8, md: 12 }} overflow="hidden">
        <Box className="blob blob-alt" top="0%" right="-5%" w={{ base: "55vw", md: "38vw" }} h={{ base: "55vw", md: "38vw" }}
          bg="radial-gradient(circle, var(--c-coral) 0%, transparent 68%)" opacity="0.16" />
        <Box className="blob" bottom="0%" left="-8%" w={{ base: "45vw", md: "28vw" }} h={{ base: "45vw", md: "28vw" }}
          bg="radial-gradient(circle, var(--c-violet) 0%, transparent 68%)" opacity="0.16" style={{ animationDelay: "5s" }} />
        <Box position="relative" zIndex="1">
          <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb={{ base: 4, md: 6 }}>02 — INTERACTION · BRAND · RESEARCH</Text>
          <Text as="h1" className="editorial" fontSize={{ base: "20vw", md: "16vw", lg: "13vw" }} fontWeight="600" lineHeight="0.85" letterSpacing="-0.03em">
            <Box as="span" color="var(--synced-text)">De</Box><Box as="span" className="tiedye-text">sign</Box>
          </Text>
          <Text mt={{ base: 6, md: 8 }} maxW="640px" fontSize={{ base: "md", md: "lg" }} color="var(--synced-muted)" lineHeight="relaxed">
            Before I shipped silicon I shipped interfaces. I design the way I engineer — with a thesis. Every
            screen is an argument about how a person should feel, and every brand is a promise you can measure.
          </Text>
        </Box>
      </Box>

      {/* PHILOSOPHY */}
      <Box py={{ base: 16, md: 24 }}>
        <Text className="editorial" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="500" color="var(--synced-text)" lineHeight="1.25" letterSpacing="-0.01em" maxW="100%">
          Good design isn&apos;t decoration. It&apos;s the <Box as="span" className="tiedye-text">shortest distance</Box> between a person and what they came for.
        </Text>
      </Box>

      {/* CASES */}
      <Box>
        <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb={{ base: 8, md: 12 }}>SELECTED — WORK WITH RECEIPTS</Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
          <DesignCase index={0} wide kicker="GRAMHEALTH · UI/UX DESIGNER" title="Medical records that don't cost lives" result="SUS 85 · +35% retention"
            body="A platform syncing patient histories across partnered hospitals via unique health IDs. I designed and prototyped the web and mobile apps against Google's HEART framework — lifting user satisfaction by 20 points and retention by 35%, and killing the redundant paperwork that slows down emergencies."
            tools={["Figma", "Sketch", "Adobe XD", "HEART", "Prototyping"]} />
          <DesignCase index={1} kicker="KRAFTR · BRANDING LEAD" title="A brand worth a term sheet" result="$100K secured"
            body="Built the full brand identity and guidelines for a sustainable-fashion startup, then turned the visual language into investor decks that helped close a $100K term sheet across 10+ VCs."
            tools={["Illustrator", "Figma", "Brand Systems"]} />
          <DesignCase index={2} kicker="GUZZLER'S INN · SOCIAL & BRAND" title="Design that filled the room" result="+78% footfall"
            body="A brand kit and campaign engine tuned for a college-town restaurant. Color, kinetic type, and hierarchy aimed at one audience — a 78% jump in footfall and 55% more revenue while I ran it."
            tools={["Figma", "Canva", "Motion"]} />
          <DesignCase index={3} kicker="THE TEEN BUSINESS PODCAST" title="A voice gets a face" result="30K+ views"
            body="Brand identity, motion graphics, and audio post for 30+ episodes — shot selection, color grade, and mix tuned per platform. Built the look that carried it past 30,000 views."
            tools={["After Effects", "Premiere", "DaVinci", "Photoshop"]} />
          <DesignCase index={4} wide kicker="MYCAPTAIN · PRODUCT" title="Interaction design, shipped to production" result="React · live"
            body="Designed and built a responsive web app with interaction-design principles front of mind — wired up to S3, Sentry, Cloudflare, Intercom, and Analytics. Where the design discipline meets the build discipline, which is exactly where I like to work."
            tools={["React", "Next.js", "Apollo GraphQL", "Figma"]} />
        </SimpleGrid>
      </Box>

      {/* TOOLSET */}
      <Box py={{ base: 20, md: 28 }}>
        <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb="3">THE KIT</Text>
        <Text className="editorial" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="600" color="var(--synced-text)" letterSpacing="-0.02em" mb={{ base: 8, md: 10 }}>
          Tools I'm fluent in
        </Text>
        <Flex gap="3" flexWrap="wrap">
          <ToolPill icon={SiFigma} name="Figma" />
          <ToolPill icon={SiSketch} name="Sketch" />
          <ToolPill icon={SiAdobexd} name="Adobe XD" />
          <ToolPill icon={SiAdobephotoshop} name="Photoshop" />
          <ToolPill icon={SiAdobeillustrator} name="Illustrator" />
          <ToolPill icon={SiAdobeaftereffects} name="After Effects" />
          <ToolPill icon={SiAdobepremierepro} name="Premiere Pro" />
          <ToolPill icon={BsFilm} name="DaVinci Resolve" />
          <ToolPill icon={SiFramer} name="Framer / Motion" />
          <ToolPill icon={SiAbletonlive} name="Ableton Live" />
          <ToolPill icon={FaMusic} name="FL Studio" />
          <ToolPill icon={FaWaveSquare} name="Serum" />
          <ToolPill icon={BsSoundwave} name="Sylenth" />
          <ToolPill icon={FaSlidersH} name="Ozone" />
          <ToolPill icon={FaBrain} name="Higgsfield" />
          <ToolPill icon={FaVideo} name="RunwayML" />
          <ToolPill icon={FaDrum} name="Rekordbox" />
        </Flex>
      </Box>

      {/* CTA */}
      <Box className="full-bleed tiedye-bg" position="relative" overflow="hidden" mt={{ base: 8, md: 12 }}>
        <Box position="absolute" inset="0" bg="rgba(0,0,0,0.12)" pointerEvents="none" />
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap="8" maxW="1280px" mx="auto" px={{ base: 8, md: 20 }} py={{ base: 14, md: 18 }} position="relative" zIndex="1">
          <Text className="editorial" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="600" color="#fff" lineHeight="1.05" letterSpacing="-0.02em" maxW="16ch">
            Have something that deserves to be designed properly?
          </Text>
          <Link href="/contact" className="press-btn"
            style={{ fontFamily: "'Space Grotesk','Inter',sans-serif", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", flexShrink: 0, background: "var(--void)", color: "var(--synced-text)", padding: "16px 36px", borderRadius: "9999px", cursor: "pointer" }}>
            Let's talk <BsArrowRight />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Design;
