import { Box, Heading, Text, VStack, HStack, Flex, Separator, Button } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { NextSeo } from "next-seo";

const Resume = () => {
  return (
    <>
      <NextSeo
        title="Resume - Pulkit Kumar"
        description="Comprehensive overview of internships, projects, research, and skills."
      />
      <Box 
        maxW="container.lg" 
        mx="auto" 
        py={16} 
        px={8}
        fontFamily='"Computer Modern Serif", "Times New Roman", Times, serif'
      >
        <Flex justify="space-between" align="center" mb={12} wrap="wrap" gap={6}>
          <Heading as="h1" size="4xl" fontWeight="normal" letterSpacing="tight">
            Pulkit Kumar
          </Heading>
          <HStack gap={4}>
            <Link href="https://github.com/buddywhitman/my-website/blob/main/docs/software-resume.pdf" target="_blank">
              <Button variant="outline" size="sm" fontFamily="sans-serif">
                Software Resume
              </Button>
            </Link>
            <Link href="https://github.com/buddywhitman/my-website/blob/main/docs/hardware-resume.pdf" target="_blank">
              <Button variant="outline" size="sm" fontFamily="sans-serif">
                Hardware Resume
              </Button>
            </Link>
          </HStack>
        </Flex>

        <VStack align="stretch" gap={12}>
          {/* Education */}
          <Box>
            <Heading as="h2" size="xl" borderBottom="1px solid" borderColor="border.default" pb={2} mb={6} fontWeight="bold">
              Education
            </Heading>
            <Box mb={4}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">Manipal Institute of Technology</Text>
                <Text>2023 - 2027</Text>
              </Flex>
              <Text fontStyle="italic">B.Tech in Electrical and Electronics Engineering</Text>
            </Box>
          </Box>

          {/* Experience */}
          <Box>
            <Heading as="h2" size="xl" borderBottom="1px solid" borderColor="border.default" pb={2} mb={6} fontWeight="bold">
              Experience
            </Heading>
            
            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">Founding Engineer @ Fettle</Text>
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
                <Text fontWeight="bold" fontSize="lg">System Engineer @ SolarMobil</Text>
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
                <Text fontWeight="bold" fontSize="lg">Founder @ Guaq AI</Text>
                <Text>2024 - Present</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Built agentic solutions for hospitality, real estate, and finance, scaling to 6+ clients with ~$8K MRR in 6 months.</Text>
                <Text as="li">Automated lead generation, content creation, and compliance workflows utilizing large language models.</Text>
              </Box>
            </Box>
          </Box>

          {/* Research & Publications */}
          <Box>
            <Heading as="h2" size="xl" borderBottom="1px solid" borderColor="border.default" pb={2} mb={6} fontWeight="bold">
              Research & Publications
            </Heading>
            <Box as="ul" pl={6} mt={2}>
              <Text as="li" mb={4}>
                <strong>Technical validation of a multimodal emotion-adaptive biofeedback system for autonomic regulation</strong><br/>
                <em>Scientific Reports (Springer Nature, Q1)</em> — Deployed multimodal edge AI pipeline using LSTM + transformer encoders on Jetson/ESP32 platforms.
              </Text>
              <Text as="li" mb={4}>
                <strong>Physics-Informed Stochastic Receding Horizon Control for Autonomous Energy Management in Solar Racing</strong><br/>
                <em>IEEE VTC (A*)</em> — Leveraged stochastic receding horizon control for SoC optimization.
              </Text>
              <Text as="li" mb={4}>
                <strong>Patents Filed</strong><br/>
                Adaptive EV Interface, Long-Range Telemetry for Solar EVs, and Automated Robotic Solar Cleaning (2025).
              </Text>
            </Box>
          </Box>

          {/* Skills */}
          <Box>
            <Heading as="h2" size="xl" borderBottom="1px solid" borderColor="border.default" pb={2} mb={6} fontWeight="bold">
              Technical Skills
            </Heading>
            <Box as="ul" pl={6} mt={2}>
              <Text as="li" mb={2}><strong>Languages:</strong> C/C++, Python, TypeScript, Verilog, Java</Text>
              <Text as="li" mb={2}><strong>Embedded & Hardware:</strong> STM32, FreeRTOS, Arm Cortex, FPGA (Vivado), ASIC Flow, UVM</Text>
              <Text as="li" mb={2}><strong>AI & Inference:</strong> PyTorch, Agentic AI, DSP, LiveKit, Edge AI</Text>
              <Text as="li"><strong>Cloud & DevOps:</strong> Kubernetes, Docker, FastAPI, AWS, InfluxDB</Text>
            </Box>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Resume;
