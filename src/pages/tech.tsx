/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
  Spinner,
  Flex,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiCodeAlt, BiGitRepoForked, BiStar, BiCheckCircle } from "react-icons/bi";
import { FaPython, FaJava, FaRobot, FaMicrochip, FaServer, FaCloud, FaPalette, FaTools } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import {
  SiJavascript,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiVercel,
  SiGooglecloud,
  SiGit,
  SiCplusplus,
  SiC,
  SiReact,
  SiRedux,
  SiAngular,
  SiNextdotjs,
  SiSpring,
  SiChakraui,
  SiNumpy,
  SiPandas,
  SiMysql,
  SiAmazonec2,
  SiGooglechrome,
  SiArduino,
  SiArm,
  SiRaspberrypi,
  SiUbuntu,
  SiFigma,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiFastapi,
  SiOpenai,
  SiNodered,
  SiAdobecreativecloud,
} from "react-icons/si";
import Slider from "react-slick";

import EnhancedProject from "components/EnhancedProject";
import GithubProject from "components/GithubProject";
import MoreProjectList from "data/more_projects";
import MotionBox from "components/motion/Box";
import { Tooltip } from "components/ui/tooltip";
import { Alert } from "components/ui/alert";

interface SkillPillProps {
  icon: IconType;
  name: string;
}

const SkillPill = ({ icon, name }: SkillPillProps) => {
  return (
    <Tooltip content={name} showArrow positioning={{ placement: "top" }}>
      <MotionBox
        whileHover={{ 
          scale: 1.1, 
          y: -5,
          boxShadow: "0 0 15px var(--chakra-colors-brand-500)",
          borderColor: "brand.500"
        }}
        transition={{ type: "spring", stiffness: 300 } as any}
        p={3}
        bg="bg.surface"
        borderRadius="full"
        borderWidth="1px"
        borderColor="border.default"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="default"
        tabIndex={0}
        role="img"
        aria-label={name}
      >
        <Icon as={icon} h={6} w={6} color="brand.300" />
      </MotionBox>
    </Tooltip>
  );
};

interface SkillCategoryProps {
  title: string;
  icon: IconType;
  skills: { icon: IconType; name: string }[];
  delay: number;
}

const SkillCategory = ({ title, icon, skills, delay }: SkillCategoryProps) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    p={8}
    bg="bg.surface"
    borderRadius="3xl"
    borderWidth="1px"
    borderColor="border.default"
    _hover={{ borderColor: "brand.500" }}
    boxShadow="sm"
  >
    <HStack mb={8} gap={4}>
      <Icon as={icon} w={8} h={8} color="brand.400" aria-label={title} />
      <Heading size="lg" fontWeight="800" letterSpacing="tight">{title}</Heading>
    </HStack>
    <Flex gap={4} wrap="wrap">
      {skills.map((skill) => (
        <SkillPill key={skill.name} icon={skill.icon} name={skill.name} />
      ))}
    </Flex>
  </MotionBox>
);

const Tech = () => {
  const [data, SetData] = useState<any>(null);
  const SlidShow = useBreakpointValue({ base: 1, lg: 2 });
  
  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const repos = await fetch("/api/get-repos");
        const toks = await repos.json();
        if (toks.status) SetData(toks.data);
      } catch (e) {
        console.error("GitHub fetch failed", e);
      }
    };
    fetchGitHub();
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      icon: BiCodeAlt,
      delay: 0.1,
      skills: [
        { icon: FaJava, name: "Java" },
        { icon: FaPython, name: "Python" },
        { icon: SiC, name: "C" },
        { icon: SiCplusplus, name: "C++" },
        { icon: SiJavascript, name: "Javascript" },
        { icon: SiTypescript, name: "Typescript" },
      ],
    },
    {
      title: "Systems & Embedded",
      icon: FaMicrochip,
      delay: 0.2,
      skills: [
        { icon: SiArduino, name: "Arduino" },
        { icon: SiArm, name: "Arm" },
        { icon: SiRaspberrypi, name: "Raspberry Pi" },
        { icon: SiUbuntu, name: "Ubuntu" },
        { icon: FaMicrochip, name: "STM32" },
        { icon: FaTools, name: "Verilog" },
      ],
    },
    {
      title: "ML & AI",
      icon: FaRobot,
      delay: 0.3,
      skills: [
        { icon: SiPytorch, name: "PyTorch" },
        { icon: SiTensorflow, name: "TensorFlow" },
        { icon: SiKeras, name: "Keras" },
        { icon: SiOpenai, name: "OpenAI" },
        { icon: SiNodered, name: "Automation" },
        { icon: SiNumpy, name: "NumPy" },
      ],
    },
    {
      title: "Web & Full-Stack",
      icon: FaServer,
      delay: 0.4,
      skills: [
        { icon: SiReact, name: "React" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiAngular, name: "Angular" },
        { icon: SiSpring, name: "Spring Boot" },
        { icon: SiFastapi, name: "FastAPI" },
        { icon: SiChakraui, name: "Chakra UI" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud,
      delay: 0.5,
      skills: [
        { icon: SiAmazonec2, name: "AWS" },
        { icon: SiGooglecloud, name: "Google Cloud" },
        { icon: SiDocker, name: "Docker" },
        { icon: SiKubernetes, name: "Kubernetes" },
        { icon: SiVercel, name: "Vercel" },
        { icon: SiGit, name: "Git" },
      ],
    },
    {
      title: "Design",
      icon: FaPalette,
      delay: 0.6,
      skills: [
        { icon: SiFigma, name: "Figma" },
        { icon: SiAdobecreativecloud, name: "Adobe Creative Cloud" },
        { icon: SiGooglechrome, name: "UI/UX Research" },
        { icon: FaPalette, name: "Branding" },
      ],
    },
  ];

  return (
    <Box pb={20}>
      <Box textAlign="left" p={{ base: 4, md: 10 }} mt={10}>
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Text
            fontFamily="display"
            fontSize="sm"
            fontWeight="bold"
            color="brand.500"
            letterSpacing="widest"
            mb={4}
            textTransform="uppercase"
          >
            Capabilities
          </Text>
          <Heading marginBottom={8} as="h2" size="4xl" fontWeight="900" letterSpacing="tighter" fontFamily="display" fontStyle="italic">
            Tech<br/>Stack.
          </Heading>
          <Text fontSize="xl" color="whiteAlpha.700" mb={12} maxW="2xl">
            A curated intersection of safety-critical embedded systems, 
            high-performance computing, and production-grade AI infrastructure.
          </Text>
        </MotionBox>

        {/* Live GitHub Stats */}
        {data && (
           <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            mb={20}
            p={8}
            bg="bg.subtle"
            borderRadius="3xl"
            borderWidth="1px"
            borderColor="border.subtle"
           >
              <Heading size="md" mb={8} color="whiteAlpha.700" textTransform="uppercase" letterSpacing="widest">Live Activity</Heading>
              <Flex justify="space-between" wrap="wrap" gap={8}>
                <VStack align="start" gap={1}>
                  <Text color="whiteAlpha.700" fontWeight="bold" fontSize="sm" textTransform="uppercase">Total Contributions</Text>
                  <Text fontSize="4xl" fontWeight="900" color="brand.500">
                    {data.contributionsCollection.contributionCalendar.totalContributions}
                  </Text>
                </VStack>
                <VStack align="start" gap={1}>
                  <Text color="whiteAlpha.700" fontWeight="bold" fontSize="sm" textTransform="uppercase">Commits</Text>
                  <Text fontSize="4xl" fontWeight="900">
                    {data.contributionsCollection.totalCommitContributions}
                  </Text>
                </VStack>
                <VStack align="start" gap={1}>
                  <Text color="whiteAlpha.700" fontWeight="bold" fontSize="sm" textTransform="uppercase">Pull Requests</Text>
                  <Text fontSize="4xl" fontWeight="900">
                    {data.contributionsCollection.totalPullRequestContributions}
                  </Text>
                </VStack>
                <VStack align="start" gap={1}>
                  <Text color="whiteAlpha.700" fontWeight="bold" fontSize="sm" textTransform="uppercase">Organizations</Text>
                  <Text fontSize="4xl" fontWeight="900">
                    {data.repositoriesContributedTo.nodes.length}+
                  </Text>
                </VStack>
              </Flex>
           </MotionBox>
        )}

        <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} gap={10} px={{ base: 0, md: 4 }}>
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={category.delay}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box p={{ base: 4, md: 10 }} mt={20}>
        <Heading as="h2" size="4xl" fontWeight="900" letterSpacing="tighter" fontFamily="display" fontStyle="italic" mb={12}>
          Engineering<br/>Journal.
        </Heading>
        <Box marginBottom={10}>
          <Alert variant="subtle" status="info" borderRadius="md" borderStartWidth="4px" borderStartColor="brand.500">
            Showcasing a mix of specialized embedded work and open-source contributions.
          </Alert>
        </Box>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={8}
          marginY={10}
        >
          {MoreProjectList.map((value) => (
            <EnhancedProject
              key={value.id}
              icons={value.icons}
              title={value.title}
              description={value.description}
              tags={value.tags}
            />
          ))}
        </SimpleGrid>

        <VStack gap={24} align="stretch" mt={32}>
          <Box>
            <Flex justify="space-between" align="center" mb={10}>
              <Heading as="h2" size="2xl" fontWeight="800" letterSpacing="tight">
                Open Source
              </Heading>
              <HStack gap={4} color="whiteAlpha.700">
                 <Icon as={BiGitRepoForked} />
                 <Text fontWeight="bold">Pinned Repositories</Text>
              </HStack>
            </Flex>
            <Box my={3} minH="250px">
              {!data ? (
                <Flex justify="center" align="center" minH="250px">
                  <Spinner color="brand.500" size="xl" />
                </Flex>
              ) : (
                <Slider
                  infinite
                  centerMode
                  className="center"
                  pauseOnHover={false}
                  slidesToShow={SlidShow}
                  slidesToScroll={1}
                  autoplay
                  autoplaySpeed={3000}
                >
                  {data.repositories.nodes.map((value: any) => (
                    <GithubProject key={value.id} data={value} />
                  ))}
                </Slider>
              )}
            </Box>
          </Box>

          <Box>
            <Flex justify="space-between" align="center" mb={10}>
              <Heading as="h2" size="2xl" fontWeight="800" letterSpacing="tight">
                Impact
              </Heading>
              <HStack gap={4} color="brand.500">
                 <Icon as={BiCheckCircle} />
                 <Text fontWeight="bold">Organization Contributions</Text>
              </HStack>
            </Flex>
            <Box my={3} minH="250px">
              {!data ? (
                <Flex justify="center" align="center" minH="250px">
                  <Spinner color="brand.500" size="xl" />
                </Flex>
              ) : (
                <Slider
                  infinite
                  centerMode
                  className="center"
                  pauseOnHover={false}
                  slidesToShow={SlidShow}
                  slidesToScroll={1}
                  autoplay
                  autoplaySpeed={3000}
                >
                  {data.repositoriesContributedTo.nodes.map((value: any) => (
                    <GithubProject key={value.id} data={value} />
                  ))}
                </Slider>
              )}
            </Box>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Tech;
