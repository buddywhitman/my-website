import { Box, Heading, Text, VStack, HStack, Flex, Separator, Button, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { NextSeo } from "next-seo";

const Resume = () => {
  return (
    <Box bg="bg.surface" minH="100vh">
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
                <Text fontWeight="bold" fontSize="lg">
                  <ChakraLink href="https://www.manipal.edu/mit.html" target="_blank" color="var(--accent)">Manipal Institute of Technology</ChakraLink>
                </Text>
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
                <Text fontWeight="bold" fontSize="lg">
                  Founding Engineer @ <ChakraLink href="https://www.letsfettle.com" target="_blank" color="var(--accent)">Fettle</ChakraLink>
                </Text>
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
                <Text fontWeight="bold" fontSize="lg">
                  Founder @ <ChakraLink href="https://guaqai.me" target="_blank" color="var(--accent)">Guaq AI</ChakraLink>
                </Text>
                <Text>Dec 2025 - Present</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Built agentic solutions for hospitality, real estate, and finance, scaling to 6+ clients with ~$8K MRR in 6 months.</Text>
                <Text as="li">Automated lead generation, content creation, and compliance workflows utilizing large language models.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">
                  AI Engineer @ <ChakraLink href="https://teachafy.com" target="_blank" color="var(--accent)">Teachafy Labs</ChakraLink>
                </Text>
                <Text>Aug 2025 - Nov 2025</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Developed Google ADK-based agentic orchestration and WhatsApp business chatbots to inject natural language workflows into ERP platforms, saving 5000+ hrs/week across 17+ clients.</Text>
                <Text as="li">Deployed RAG workflows for compliance intelligence using Pinecone + OpenAI Assistant API with semantic Redis caching.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">
                  System Engineer @ <ChakraLink href="https://www.solarmobilmanipal.org" target="_blank" color="var(--accent)">SolarMobil</ChakraLink>
                </Text>
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
                <Text fontWeight="bold" fontSize="lg">
                  Embedded Software Engineer @ <ChakraLink href="https://www.symbionic.co" target="_blank" color="var(--accent)">Symbionic</ChakraLink>
                </Text>
                <Text>May 2025 - Jul 2025</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Developed drivers for ESP32 cores and designed a signal acquisition pipeline for multi-channel EMG/EEG sensing.</Text>
                <Text as="li">Deployed a multimodal edge AI pipeline using LSTM + transformer encoders on the Jetson platform.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">Co-Founder @ FoodSwipe</Text>
                <Text>Jan 2025 - Jun 2025</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Outsourced food choices to content-based & collaborative recommender systems.</Text>
                <Text as="li">A/B testing rated positive customer experience at 85%+.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">
                  Machine Learning Engineer @ <ChakraLink href="https://dcprai.com" target="_blank" color="var(--accent)">DCPR AI</ChakraLink>
                </Text>
                <Text>Jul 2024 - Dec 2024</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Leveraged n8n to build agentic RAG-based LLM workflows around Urban Planning regulation utilizing Redis, Cohere, LiteLLM, OpenAI, Twilio & FireStore.</Text>
                <Text as="li">Automated data ingestion pipelines, reducing TTM by 81% and leading to 45%+ MoM growth.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">
                  Embedded Engineer @ <ChakraLink href="https://kropai.com" target="_blank" color="var(--accent)">Krop AI</ChakraLink>
                </Text>
                <Text>Sep 2024 - Nov 2024</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Designed hardware systems, wrote DMA drivers for AtlasScientific precision sensing probes, and automated initialization subroutines for ESP32-based autonomous agritech modules.</Text>
                <Text as="li">Built the computer vision pipeline for a Jetson Nano, training a crop health monitoring model to 93.47% accuracy.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">Software Engineer @ MTTN</Text>
                <Text>Sep 2024 - Nov 2024</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Developed web & native applications utilizing AWS ELB, NextJS, Spring Boot, and Kubernetes.</Text>
                <Text as="li">Supported 260K+ MAU by reducing downtime and streamlining content workflows.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">SoC Design Intern @ CoreEL Technologies</Text>
                <Text>May 2024 - Jul 2024</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Developed RTL2GDSII design of high-speed CAN bus & I2C controllers using Verilog.</Text>
                <Text as="li">Simulated on a Virtex 7 FPGA and gained hands-on experience with ASIC design flows (STA, PPA, floorplanning).</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">Community Engagement Intern @ Open Horizon Robotics</Text>
                <Text>Aug 2023 - Jan 2024</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Generated over $35k+ in sponsorships and onboarded 18+ collaborators.</Text>
                <Text as="li">Drove 52% YoY growth by showcasing the value proposition of the robotics open-source community.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">UI/UX Designer @ GramHealth</Text>
                <Text>Sep 2023 - Nov 2023</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Designed high-fidelity wireframes for healthcare apps, increasing user satisfaction by 20 points.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">Freelance Web Developer @ GigsWall</Text>
                <Text>Jun 2025 - Present</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Provided web design & UX research for European and US clients, helping scale online presence and customer engagement.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">UI/UX & Branding Lead @ Kraftr</Text>
                <Text>Jul 2023 - Dec 2023</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Created brand guidelines, visual communication, and social media content using Adobe Creative Suite and Figma.</Text>
                <Text as="li">Secured a term sheet worth $100k by developing investor decks and communicating with VCs.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">
                  Social Media Manager @ <ChakraLink href="https://www.manipal.edu/mit.html" target="_blank" color="var(--accent)">Manipal Updates</ChakraLink>
                </Text>
                <Text>Aug 2023 - Oct 2023</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Designed social media marketing content, resulting in a 78% increase in footfall and a 55% rise in revenue for client restaurants.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">Hardware Lead (Volunteer) @ MOSS</Text>
                <Text>2023 - Present</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Led community building around the OpenLane and SkyWater130 stack, hosting 4+ workshops.</Text>
                <Text as="li">Contributed to Arduino's LiquidCrystal library for unconventional 5x10 character displays.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">
                  Core Committee (Volunteer) @ <ChakraLink href="https://www.manipal.edu/mit.html" target="_blank" color="var(--accent)">Manipal Hackathon</ChakraLink>
                </Text>
                <Text>2024</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Developed full-stack developer management portals scaling to 35k+ DAU.</Text>
                <Text as="li">Led performance optimization efforts, optimizing FCP by over 68%.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">Web Developer Intern @ MyCaptain</Text>
                <Text>Aug 2021</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Designed and built a responsive webapp using React, Apollo GraphQL, and Next.js.</Text>
              </Box>
            </Box>

            <Box mb={8}>
              <Flex justify="space-between" align="baseline" wrap="wrap">
                <Text fontWeight="bold" fontSize="lg">Branding & Audio Editor @ The Teen Business Podcast</Text>
                <Text>Aug 2020</Text>
              </Flex>
              <Box as="ul" pl={6} mt={2}>
                <Text as="li" mb={2}>Edited over 30 episodes reaching 30,000+ views using Adobe Premiere Pro, After Effects, and DaVinci Resolve.</Text>
              </Box>
            </Box>
          </Box>

          {/* Certifications */}
          <Box>
            <Heading as="h2" size="xl" borderBottom="1px solid" borderColor="border.default" pb={2} mb={6} fontWeight="bold">
              Certifications
            </Heading>
            <Box as="ul" pl={6} mt={2}>
              <Text as="li" mb={2}><strong>AWS Certified Solutions Architect</strong></Text>
              <Text as="li" mb={2}><strong>IC2 SSCP</strong></Text>
              <Text as="li" mb={2}>Graphic Design Specialization — <em>California Institute of Arts</em></Text>
              <Text as="li" mb={2}>Deep Learning Specialization — <em>Stanford / DeepLearning.AI</em></Text>
              <Text as="li" mb={2}>UI/UX Design Specialization — <em>California Institute of Arts</em></Text>
              <Text as="li" mb={2}>Frontend Developer Specialization — <em>Meta</em></Text>
              <Text as="li">IT Automation Using Python — <em>Google</em></Text>
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
    </Box>
  );
};

export default Resume;
