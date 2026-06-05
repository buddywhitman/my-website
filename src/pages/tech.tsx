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
import { BiCodeAlt } from "react-icons/bi";
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
    p={6}
    bg="bg.surface"
    borderRadius="2xl"
    borderWidth="1px"
    borderColor="border.default"
    _hover={{ borderColor: "brand.500" }}
  >
    <HStack mb={6} gap={3}>
      <Icon as={icon} w={6} h={6} color="brand.400" aria-label={title} />
      <Heading size="md">{title}</Heading>
    </HStack>
    <Flex gap={4} wrap="wrap">
      {skills.map((skill) => (
        <SkillPill key={skill.name} icon={skill.icon} name={skill.name} />
      ))}
    </Flex>
  </MotionBox>
);

const Tech = () => {
  const [data, SetData] = useState(null);
  const SlidShow = useBreakpointValue({ base: 1, lg: 2 });
  useEffect(() => {
    const json = async () => {
      const repos = await fetch("/api/get-repos");
      const toks = await repos.json();
      SetData(toks);
    };
    json();
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
      <Box textAlign="center" p={{ base: 4, md: 10 }} mt={10}>
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading marginBottom={5} as="h2" size="2xl">
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: "full",
                height: "25%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "brand.500",
                zIndex: -1,
              }}
            >
              Technology Stack
            </Text>
          </Heading>
          <Text fontSize="xl" color="fg.muted" mb={12}>
            A curated list of technologies I use to build high-impact solutions.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} gap={8} px={{ base: 0, md: 4 }}>
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

      <Box p={{ base: 4, md: 8 }} mt={10}>
        <Heading as="h2" size="2xl" mb={8}>
          <Text
            as="span"
            position="relative"
            _after={{
              content: "''",
              width: "full",
              height: "25%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "brand.500",
              zIndex: -1,
            }}
          >
            More Projects
          </Text>
        </Heading>
        <Box marginBottom={10}>
          <Alert variant="subtle" status="info" borderRadius="md" borderStartWidth="4px" borderStartColor="blue.500">
            View Featured Projects on the Home Page!
          </Alert>
        </Box>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={10}
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

        <VStack gap={16} align="stretch" mt={20}>
          <Box>
            <Heading as="h2" size="xl" mb={8}>
              <Text
                as="span"
                position="relative"
                _after={{
                  content: "''",
                  width: "full",
                  height: "25%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "brand.500",
                  zIndex: -1,
                }}
              >
                Open Source Repositories
              </Text>
            </Heading>
            <Box my={3} minH="220px">
              {data === null ? (
                <Flex justify="center" align="center" minH="220px">
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
                  {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    data.data.repositories.nodes.map((value) => (
                      <GithubProject key={value.id} data={value} />
                    ))
                  }
                </Slider>
              )}
            </Box>
          </Box>

          <Box>
            <Heading as="h2" size="xl" mb={8}>
              <Text
                as="span"
                position="relative"
                _after={{
                  content: "''",
                  width: "full",
                  height: "25%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "brand.500",
                  zIndex: -1,
                }}
              >
                Contributions
              </Text>
            </Heading>
            <Box my={3} minH="220px">
              {data === null ? (
                <Flex justify="center" align="center" minH="220px">
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
                  {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    data.data.repositoriesContributedTo.nodes.map((value) => (
                      <GithubProject key={value.id} data={value} />
                    ))
                  }
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
