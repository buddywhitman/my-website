import { useColorModeValue, Box, Text, Heading, Flex, Link } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const ResumePage = () => {
  const bg = useColorModeValue("white", "#0a0a0a");
  const textColor = useColorModeValue("gray.900", "gray.100");
  const headingColor = useColorModeValue("gray.800", "gray.200");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <>
      <NextSeo
        title="Resume"
        description="Pulkit Kumar's technical resume: Embedded Systems, AI Inference, and high-performance software engineering."
      />
      <Box minH="100vh" bg={bg} py={{ base: 12, md: 20 }}>
        <Box maxW="4xl" mx="auto" px={{ base: 6, md: 10 }}>
          <Heading mb={2} color={headingColor}>
            Pulkit Kumar
          </Heading>
          <Text color={textColor} mb={8} fontSize="lg">
            Embedded Systems Engineer · Inference Architect · Agentic AI Builder
          </Text>

          <Box borderTop="1px solid" borderColor={borderColor} pt={8}>
            <Heading size="md" mb={6} color={headingColor}>
              Experience
            </Heading>
            
            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">Founding Engineer @ <Link href="https://www.letsfettle.com" isExternal>Fettle</Link></Text>
                <Text>2025 - Present</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Architected distributed voice AI agents for high-concurrency hospital customer experience.</Text>
                <Text as="li" mb={2}>Implemented SIP trunking with LiveKit and optimized real-time inference using PyTorch & TorchRec.</Text>
                <Text as="li">Owned the entire DevOps lifecycle, deploying scalable backends with FastAPI and Kubernetes.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">Founder @ <Link href="https://guaqai.me" isExternal>Guaq AI</Link></Text>
                <Text>Dec 2025 - Present</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Built agentic solutions for hospitality, real estate, and finance, scaling to 6+ clients with ~$8K MRR in 6 months.</Text>
                <Text as="li">Automated lead generation, content creation, and compliance workflows utilizing large language models.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">AI Engineer @ <Link href="https://teachafy.com" isExternal>Teachafy Labs</Link></Text>
                <Text>Aug 2025 - Nov 2025</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Developed Google ADK-based agentic orchestration and WhatsApp business chatbots to inject natural language workflows into ERP platforms, saving 5000+ hrs/week across 17+ clients.</Text>
                <Text as="li">Deployed RAG workflows for compliance intelligence using Pinecone + OpenAI Assistant API with semantic Redis caching.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">System Engineer @ <Link href="https://www.solarmobilmanipal.org" isExternal>SolarMobil</Link></Text>
                <Text>2024 - Present</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Engineered a high-performance race strategy engine for solar EVs.</Text>
                <Text as="li" mb={2}>Developed low-level drivers for Arm Cortex M7-based ECUs and implemented FreeRTOS for deterministic scheduling.</Text>
                <Text as="li">Built a real-time digital twin integrating weather APIs and GIS elevation data using InfluxDB and Grafana.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">Embedded Software Engineer @ <Link href="https://www.symbionic.co" isExternal>Symbionic</Link></Text>
                <Text>May 2025 - Jul 2025</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Built edge-AI pipelines for signal acquisition and processing from multi-channel EMG/EEG streams.</Text>
                <Text as="li" mb={2}>Developed robust firmware and communication layers for ESP32-based neurotech hardware prototypes.</Text>
                <Text as="li">Collaborated with cross-functional teams to improve reliability and latency in real-time sensing systems.</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ResumePage;
