import { Box, Flex, Text, VStack, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { BsLinkedin, BsGithub, BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import { FaOrcid } from "react-icons/fa";
import { Magnetic } from "components/motion/Magnetic";
import SchemaMarkup from "components/SchemaMarkup";

const MotionBox = motion(Box) as any;
const EASE = [0.23, 1, 0.32, 1] as const;

/* ─── MARQUEE ─────────────────────────────────── */
const MARQUEE_TEXT =
  "AI INFRASTRUCTURE · SOLAR RACING · SPRINGER NATURE · OBSERVABILITY · 3 PATENTS · DISTRIBUTED SYSTEMS · VOICE AI · RTL TO LLM · INFERENCE OPTIMIZATION · EMBEDDED SYSTEMS · EDGE AI · DATA ENGINEERING · IEEE · DETERMINISIC · ACM · SAFETY-CRITICAL · ";

const Marquee = () => (
  <Box className="full-bleed tiedye-bg" overflow="hidden" py="3" cursor="default">
    <Box className="marquee-track">
      {[0, 1].map((i) => (
        <Text key={i} as="span" className="mono-label" fontSize={{ base: "10px", md: "11px" }} color="#fff" whiteSpace="nowrap" px="2">
          {MARQUEE_TEXT.repeat(4)}
        </Text>
      ))}
    </Box>
  </Box>
);

/* ─── HERO BLOBS ──────────────────────────────── */
const HeroBlobs = () => (
  <Box position="absolute" inset="0" zIndex="0" overflow="hidden" pointerEvents="none">
    <Box className="blob blob-alt" top="-15%" right="-5%" w={{ base: "55vw", md: "40vw" }} h={{ base: "55vw", md: "40vw" }}
      bg="radial-gradient(circle, var(--c-violet) 0%, transparent 68%)" opacity="0.22" style={{ animationDelay: "0s" }} />
    <Box className="blob" bottom="-12%" left="-8%" w={{ base: "45vw", md: "30vw" }} h={{ base: "45vw", md: "30vw" }}
      bg="radial-gradient(circle, var(--c-coral) 0%, transparent 68%)" opacity="0.18" style={{ animationDelay: "4s" }} />
    <Box className="blob blob-alt" top="35%" right="22%" w={{ base: "30vw", md: "20vw" }} h={{ base: "30vw", md: "20vw" }}
      bg="radial-gradient(circle, var(--c-teal) 0%, transparent 68%)" opacity="0.12" style={{ animationDelay: "8s" }} />
  </Box>
);

/* ─── WORLD ROW (the new IA centerpiece) ──────── */
interface WorldRowProps {
  num: string;
  label: string;
  blurb: string;
  href: string;
  external?: boolean;
  last?: boolean;
}
const WorldRow = ({ num, label, blurb, href, external, last }: WorldRowProps) => {
  const [hover, setHover] = useState(false);
  const inner = (
    <Box
      py={{ base: 6, md: 8 }}
      borderBottom={last ? "none" : "1px solid"}
      borderColor="var(--synced-border)"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        paddingLeft: hover ? "20px" : "0px",
        transition: "padding-left 320ms cubic-bezier(0.23,1,0.32,1)",
      }}
    >
      <Flex align="center" justify="space-between" gap="6">
        <HStack gap={{ base: 4, md: 8 }} align="baseline" minW="0">
          <Text className="mono-label" color="var(--synced-muted)" fontSize={{ base: "10px", md: "11px" }} flexShrink={0}>
            {num}
          </Text>
          <Text
            className={hover ? "editorial tiedye-text" : "editorial"}
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="600"
            lineHeight="1"
            letterSpacing="-0.02em"
            color={hover ? undefined : "var(--synced-text)"}
            style={{ transition: "color 200ms ease" }}
          >
            {label}
          </Text>
        </HStack>
        <Box
          flexShrink={0}
          color={hover ? "var(--accent)" : "var(--synced-muted)"}
          style={{
            transform: hover ? "translate(6px,-6px) rotate(0deg)" : "translate(0,0)",
            transition: "transform 280ms cubic-bezier(0.23,1,0.32,1), color 200ms ease",
          }}
        >
          <BsArrowUpRight size={26} />
        </Box>
      </Flex>
      <Text
        color="var(--synced-muted)"
        fontSize={{ base: "sm", md: "md" }}
        mt={{ base: 3, md: 4 }}
        maxW="100%"
        opacity={hover ? 1 : 0.72}
        style={{ transition: "opacity 200ms ease" }}
      >
        {blurb}
      </Text>
    </Box>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} style={{ textDecoration: "none", display: "block" }}>
      {inner}
    </Link>
  );
};

/* ─── STAT ────────────────────────────────────── */
const Stat = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <MotionBox initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: EASE, delay }}>
    <Text className="editorial" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="700" color="var(--accent)" lineHeight="1">
      {value}
    </Text>
    <Text className="mono-label" color="var(--synced-muted)" mt="1" fontSize="9px">{label}</Text>
  </MotionBox>
);

/* ─── WORK CARD ───────────────────────────────── */
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

/* ─── PAGE ────────────────────────────────────── */
const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pulkit Kumar",
    url: "https://buddywhitman.vercel.app",
    jobTitle: "Reliable AI Infrastructure & Safety-Critical Embedded Systems Engineer",
    alumniOf: { "@type": "CollegeOrUniversity", name: "Manipal Institute of Technology" },
    sameAs: ["https://github.com/buddywhitman", "https://www.linkedin.com/in/buddywhitman", "https://orcid.org/0000-0003-4078-1780"],
  };

  return (
    <Box position="relative">
      <SchemaMarkup data={personSchema} />

      {/* ── HERO ─────────────────────────── */}
      <MotionBox ref={heroRef} style={{ y: heroY, opacity: heroOpacity }}
        minH={{ base: "90vh", md: "94vh" }} display="flex" flexDirection="column" justifyContent="flex-end"
        pb={{ base: 12, md: 16 }} position="relative">
        <HeroBlobs />
        <Box position="relative" zIndex="1">
          <Box mb={{ base: 5, md: 8 }} className="hero-line" style={{ animationDelay: "0s" }}>
            <Text className="mono-label" color="var(--synced-muted)" fontSize="10px">PULKIT KUMAR — PORTFOLIO 2026</Text>
          </Box>

          <Box overflow="hidden">
            <Text as="h1" className="editorial hero-line" fontSize={{ base: "15vw", md: "11vw", lg: "9.5vw" }} fontWeight="600"
              lineHeight={{ base: "0.92", md: "0.88" }} color="var(--synced-text)" letterSpacing="-0.02em" style={{ animationDelay: "0.1s" }}>
              what makes
            </Text>
          </Box>
          <Box overflow="hidden">
            <Text className="editorial hero-line" fontSize={{ base: "15vw", md: "11vw", lg: "9.5vw" }} fontWeight="600"
              lineHeight={{ base: "0.92", md: "0.88" }} letterSpacing="-0.02em" display="block" style={{ animationDelay: "0.22s" }}>
              <Text as="span" color="var(--synced-text)">us </Text>
              <Text as="span" className="tiedye-text editorial">human?</Text>
            </Text>
          </Box>

          <Box className="hero-line" mt={{ base: 8, md: 10 }} mb={{ base: 6, md: 8 }} h="1px" bg="var(--synced-border)" style={{ animationDelay: "0.5s" }} />

          <Flex direction={{ base: "column", md: "row" }} align={{ base: "flex-start", md: "flex-end" }} justify="space-between"
            gap="6" className="hero-line" style={{ animationDelay: "0.6s" }}>
            <Box maxW="560px">
              <Text fontSize={{ base: "sm", md: "md" }} color="var(--synced-muted)" lineHeight="relaxed">
                Software Engineering Intern at <ChakraLink href="https://www.letsfettle.com" target="_blank" color="var(--accent)" fontWeight="600">Fettle</ChakraLink>, building
                voice AI & infrastructure for healthcare. Electronics Head at <ChakraLink href="https://www.solarmobilmanipal.org" target="_blank" color="var(--accent)" fontWeight="600">SolarMobil</ChakraLink>, delivering safety-critical embedded systems. Springer Nature author, three patents filed. I also make music as{" "}
                <a href="https://2wenzy.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>2wenzy</a> and
                write at <a href="https://desihippe.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>desihippe</a>.
              </Text>
            </Box>
            <HStack gap="5" flexShrink={0} pb="1">
              {[
                { icon: BsLinkedin, url: "https://www.linkedin.com/in/buddywhitman" },
                { icon: BsGithub, url: "https://github.com/buddywhitman" },
                { icon: FaOrcid, url: "https://orcid.org/0000-0003-4078-1780" },
              ].map(({ icon: Icon, url }, i) => (
                <Magnetic key={i}>
                  <ChakraLink href={url} target="_blank" color="var(--synced-muted)" _hover={{ color: "var(--accent)" }} transition="color 200ms ease">
                    <Icon size={20} />
                  </ChakraLink>
                </Magnetic>
              ))}
            </HStack>
          </Flex>
        </Box>
      </MotionBox>

      {/* ── MARQUEE ──────────────────────── */}
      <Marquee />

        {/* ── INDEX OF PRACTICES ───────────── */}
      <Box py={{ base: 20, md: 28 }}>
        <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }} mb={{ base: 8, md: 12 }}>
          <Flex align="baseline" justify="space-between" flexWrap="wrap" gap="3">
            <Text className="mono-label" color="var(--synced-muted)" fontSize="10px">THE INDEX — FIVE PRACTICES, ONE PERSON</Text>
            <Text className="mono-label" color="var(--synced-muted)" fontSize="10px">↓ PICK A THREAD</Text>
          </Flex>
        </MotionBox>

        <Box>
          <WorldRow num="01" label="Software" href="/software"
            blurb="Agentic voice AI, distributed systems, data engineering, and inference at scale. High-throughput serving and production-grade software." />
          <WorldRow num="02" label="Hardware" href="/hardware"
            blurb="Deterministic control systems, SoC design, and embedded architectures. FreeRTOS on Cortex-M7, Verilog/UVM, and edge AI hardware bring-up." />
          <WorldRow num="03" label="Research" href="/research"
            blurb="Physics-informed control, biofeedback telemetry, and quantitative finance. Multi-agent HFT, published papers, and automotive electronics patents." />
          <WorldRow num="04" label="Open Source" href="/open-source"
            blurb="LLM serving frameworks, developer tools, and kernel-level experimentation. Community building, self-hosting systems, and upstream contributions." />
          <WorldRow num="05" label="Talks" href="/talks" last
            blurb="Speaking engagements on open-source hardware, Skywalker, OpenLANE, ArduPilot, and embedded systems design at university and community events." />
        </Box>
      </Box>

      {/* ── MANIFESTO + STATS ────────────── */}
      <Box py={{ base: 16, md: 24 }} position="relative" overflow="hidden">
        <Box position="absolute" inset="0" zIndex="0" pointerEvents="none"
          bg="radial-gradient(ellipse at 15% 50%, color-mix(in srgb, var(--c-violet) 14%, transparent) 0%, transparent 55%), radial-gradient(ellipse at 85% 50%, color-mix(in srgb, var(--c-coral) 12%, transparent) 0%, transparent 60%)"
        />
        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 12, lg: 20 }} align={{ base: "flex-start", lg: "center" }} position="relative" zIndex="1">
          <Box flex="1.4">
            <MotionBox initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: EASE }}>
              <Text className="mono-label" color="var(--accent)" mb="5" fontSize="10px">✦ ON THE RECORD</Text>
              <Text className="editorial" fontSize={{ base: "2xl", md: "3xl", lg: "3.5xl" }} fontWeight="500" color="var(--synced-text)" lineHeight="1.3" letterSpacing="-0.01em">
                I found my first SQL injection at thirteen and didn't know what to do with the feeling.{" "}
                <Box as="span" className="tiedye-text">It never quite left.</Box>{" "}
                I build things that can't fail — ECUs in a race car, voice agents in a hospital — and I keep asking what
                they cost the people on the other side of the screen. The engineering is the easy part.
              </Text>
            </MotionBox>
          </Box>
          <Box flex="1">
            <MotionBox initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}>
              <Box display="grid" gridTemplateColumns="1fr 1fr" gap={{ base: 8, md: 10 }} p={{ base: 8, md: 10 }} border="1px solid"
                borderColor="var(--synced-border)" borderRadius="2xl" bg="var(--synced-surface)" position="relative" overflow="hidden" style={{ backdropFilter: "blur(10px)" }}>
                <Box position="absolute" top="-50%" right="-30%" w="200px" h="200px" bg="radial-gradient(circle, var(--c-violet) 0%, transparent 70%)" opacity="0.14" filter="blur(40px)" pointerEvents="none" />
                <Stat value="2" label="Published Papers" delay={0} />
                <Stat value="3" label="Patents Filed" delay={0.06} />
                <Stat value="10+" label="Roles & Internships" delay={0.12} />
                <Stat value="260K+" label="MAU Systems Built" delay={0.18} />
              </Box>
            </MotionBox>
          </Box>
        </Flex>
      </Box>

      {/* ── SELECTED WORK ────────────────── */}
      <Box py={{ base: 16, md: 20 }}>
        <MotionBox initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }} mb={{ base: 10, md: 14 }}>
          <Flex align="baseline" justify="space-between" flexWrap="wrap" gap="4">
            <Box>
              <Text className="mono-label" color="var(--synced-muted)" mb="3" fontSize="10px">SELECTED WORK</Text>
              <Text className="editorial" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="600" color="var(--synced-text)" letterSpacing="-0.02em" lineHeight="1">
                Things that shipped
              </Text>
            </Box>
            <HStack gap="2">
              <Link href="/software" className="mono-label press-btn" style={{ fontSize: "10px", color: "var(--synced-muted)", border: "1px solid var(--synced-border)", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", transition: "all 200ms ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--synced-muted)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--synced-border)"; }}>
                SOFTWARE →
              </Link>
              <Link href="/hardware" className="mono-label press-btn" style={{ fontSize: "10px", color: "var(--synced-muted)", border: "1px solid var(--synced-border)", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", transition: "all 200ms ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--synced-muted)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--synced-border)"; }}>
                HARDWARE →
              </Link>
              <Link href="/research" className="mono-label press-btn" style={{ fontSize: "10px", color: "var(--synced-muted)", border: "1px solid var(--synced-border)", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", transition: "all 200ms ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--synced-muted)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--synced-border)"; }}>
                RESEARCH →
              </Link>
            </HStack>
          </Flex>
        </MotionBox>

        <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="4">
          <WorkCard index={0} wide kicker="SOLARMOBIL · IEEE VTC 2026" name="Solar Racing EV"
            description="Engineered safety-critical automotive electronics and deterministic FreeRTOS firmware on STM32H7 for a high-performance solar racing EV. Developed TouchGFX HMI driver interfaces, a sub-1GHz 1Hz RF telemetry engine, and cloud-based predictive telemetry databases with GIS and Solcast weather data fusion. Two provisional patents filed."
            tags={["C/C++", "FreeRTOS", "STM32H7", "InfluxDB", "Control Theory"]} link="https://github.com/buddywhitman#pinned-items" />
          <WorkCard index={1} kicker="FETTLE · FOUNDING ENGINEER" name="Voice AI for Hospitals"
            description="Distributed voice agents for hospital workflows — SIP trunking over LiveKit, a cross-modal recommender, sub-second inference on Kubernetes. I own the backend and the DevOps."
            tags={["PyTorch", "LiveKit", "K8s", "FastAPI"]} link="https://letsfettle.com" />
          <WorkCard index={2} kicker="DCPR AI · PIP PACKAGE" name="multi-TB Document Processing at DCPR AI"
            description="Distributed multi-TB document ingestion pipeline using GCS and Gemini. Cut manual processing queues by 92% and storage costs by 74%."
            tags={["Kubernetes", "GCS", "Redis", "Distributed System"]} link="https://pypi.org/project/dist-gcs-pdf-processing/" />
          <WorkCard index={3} kicker="GUAQ AI · FOUNDER" name="Agentic Platform, 0→$8K MRR"
            description="Multi-vertical agentic solutions for hospitality, real estate, and finance. From zero to ~$8K MRR and 6+ clients in six months."
            tags={["Agentic AI", "RAG", "LangChain"]} link="https://guaqai.me" />
          <WorkCard index={4} kicker="COREEL · SoC DESIGN" name="RTL2GDSII Controllers"
            description="High-speed CAN-bus and I²C controllers from RTL to GDSII — UVM verification, STA, and floorplanning, brought up on a Virtex-7 FPGA."
            tags={["Verilog", "FPGA", "UVM", "Vivado"]} link="https://coreel.com/" />
        </Box>
      </Box>

      {/* ── RECOGNITION ──────────────────── */}
      <Box py={{ base: 12, md: 16 }}>
        <Box p={{ base: 8, md: 10 }} border="1px solid" borderColor="var(--synced-border)" borderRadius="2xl" bg="var(--synced-surface)" style={{ backdropFilter: "blur(10px)" }} position="relative" overflow="hidden">
          <Box position="absolute" bottom="-40%" left="-10%" w="300px" h="300px" bg="radial-gradient(circle, var(--c-teal) 0%, transparent 70%)" opacity="0.08" filter="blur(50px)" pointerEvents="none" />
          <Text className="mono-label" color="var(--accent)" mb="6" fontSize="10px">RECOGNITION & IP</Text>
          <VStack align="stretch" gap="0" position="relative" zIndex="1">
            {[
              { venue: "Springer Nature · Scientific Reports (Q1)", title: "Technical validation of a multimodal emotion-adaptive biofeedback system for autonomic regulation", year: "2026", url: "https://doi.org/10.1038/s41598-026-46105-9" },
              { venue: "IEEE Vehicular Technology Conference (A*)", title: "Physics-Informed Stochastic Receding Horizon Control for Autonomous Energy Management in Solar Racing", year: "2026", url: "https://vtc2026spring.trackchair.com/paper/47987" },
              { venue: "Intellectual Property · Filed under MAHE", title: "Three patents — Adaptive EV Interface · Long-Range Solar Telemetry · Robotic Panel Cleaning", year: "2025", url: "" },
            ].map((pub, i, arr) => (
              <MotionBox key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
                py="6" borderBottom={i < arr.length - 1 ? "1px solid" : "none"} borderColor="var(--synced-border)">
                <Flex justify="space-between" align="flex-start" gap="6" flexWrap="wrap">
                  <Box flex="1">
                    <Text className="mono-label" color="var(--synced-muted)" mb="2" fontSize="9px">{pub.venue} · {pub.year}</Text>
                    <Text className="editorial" fontSize={{ base: "lg", md: "xl" }} color="var(--synced-text)" lineHeight="1.3">{pub.title}</Text>
                  </Box>
                  {pub.url && (
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">
                      <BsArrowUpRight size={16} style={{ color: "var(--accent)", marginTop: "4px" }} />
                    </a>
                  )}
                </Flex>
              </MotionBox>
            ))}
          </VStack>
        </Box>
      </Box>

      {/* ── CTA ──────────────────────────── */}
      <MotionBox initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }} py={{ base: 16, md: 20 }} mb={{ base: 8, md: 12 }}>
        <Box className="full-bleed tiedye-bg" position="relative" overflow="hidden">
          <Box position="absolute" inset="0" bg="rgba(0,0,0,0.12)" pointerEvents="none" />
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap="8" maxW="1280px" mx="auto" px={{ base: 8, md: 20 }} py={{ base: 14, md: 20 }} position="relative" zIndex="1">
            <Box>
              <Text className="mono-label" fontSize="10px" color="#fff" opacity={0.75} mb="3">OPEN TO WORK</Text>
              <Text className="editorial" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="600" color="#fff" lineHeight="1.05" letterSpacing="-0.02em">
                Let's build the<br />things that can't fail.
              </Text>
              <Text mt="4" fontSize="sm" color="#fff" opacity={0.85} maxW="440px" lineHeight="relaxed">
                Open to roles involving serving inference at scale and developing safety-critical embedded systems
              </Text>
            </Box>
            <Link href="/contact" className="press-btn"
              style={{ fontFamily: "'Space Grotesk','Inter',sans-serif", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", padding: "12px 20px", border: "1.5px solid #fff", borderRadius: "6px", color: "#fff", transition: "all 200ms ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.color = "var(--void)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}>
              Start a conversation <BsArrowRight />
            </Link>
          </Flex>
        </Box>
      </MotionBox>
    </Box>
  );
};

export default Home;
