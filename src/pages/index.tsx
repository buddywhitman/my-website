/* eslint-disable prettier/prettier */
import {
  Box,
  Heading,
  Tooltip,
  Flex,
  Spacer,
  Text,
  useBreakpointValue,
  Table,
  Tr,
  Thead,
  Th,
  Tbody,
  Td,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  SiPypi,
  SiJavascript,
  SiTypescript,
  SiRust,
  SiAmazonaws,
  SiDeno,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiTravisci,
  SiDatadog,
  SiSolidity,
  SiStripe,
  SiCloudflare,
  SiGnubash,
  SiGrafana,
  SiLinux,
  SiNetlify,
  SiPaypal,
  SiPostgresql,
  SiPrometheus,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  SiPypy,
  SiRedis,
  SiVercel,
  SiMongodb,
  SiIbmwatson,
  SiGooglecloud,
  SiFirebase,
  SiGit,
} from "react-icons/si";

import FeaturedProject from "components/FeaturedProject";
import ImageBox from "components/ImageBox";
import SomeText from "components/SomeText";
import ThemedButton from "components/ThemedButton";
import FeaturedProjectList from "data/featured_projects";

interface IconWrapperProps {
  icon: IconType;
  text: string;
}

const IconWrapper = ({ icon, text }: IconWrapperProps) => {
  return (
    <Tooltip label={text}>
      <Box margin={1}>
        <Icon as={icon} h={{ base: 7, md: 10 }} w={{ base: 7, md: 10 }} />
      </Box>
    </Tooltip>
  );
};

const Home = () => {
  const isSmall = useBreakpointValue({ base: true, md: false });
  const bl = useColorModeValue("brand.400", "brand.600");
  const textc = useColorModeValue("brand.800", "brand.200");

  const paatern = useColorModeValue("/Clarence.svg", "/Taieri.svg");
  return (
    <Box>
      <Box
        height={{ base: "auto", md: "500px" }}
        position="relative"
        backgroundImage={isSmall ? "" : paatern}
        marginY={8}
      >
        <Box
          backgroundColor={useColorModeValue("bgwhite.100", "bgblack.100")}
          height={{ base: "auto", md: "100%" }}
          borderTopRightRadius={{ base: 0, md: "100%" }}
          width={{ base: "100%", md: "75%", lg: "65%", xl: "50%" }}
        >
          <SomeText />
        </Box>
      </Box>
      <Flex
        p={{ base: 5, xl: 20 }}
        marginY={10}
        flexDirection={{ base: "column", md: "row-reverse" }}
      >
        <Box
          width={{ base: "100%", xl: "70%" }}
          p={{ base: 0, md: 8 }}
          textAlign={{ base: "left", md: "left" }}
        >
          <Heading as="h2" size="2xl">
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
                bg: bl,
                zIndex: -1,
              }}
            >
              About Me
            </Text>
          </Heading>
          <Text marginTop={{ base: 3, md: 5 }} fontSize="xl">
            Hi I&apos;m Pulkit! 
          </Text>
          <Text marginTop={{ base: 3, md: 5 }} fontSize="xl">
            I build webapps, design campaigns & narrate stories (digitally).
          </Text>
          <Text marginTop={{ base: 1, md: 3 }} fontSize="xl">
            Jumping straight into the tech scene in eigth grade, I started with web development,
            progressing to embedded systems, dabbling with linux and some cybersec, finally coming full circle
            by engaging with the internet at a whole new level this year.
          </Text>
          <Text marginTop={{ base: 1, md: 3 }} fontSize="xl">
            On the tech side, I&apos;m passionate about Embedded Systems, Neurological Interfaces, Web Development and
            adding meaning to my users&apos; lives (:
          </Text>
          <Text marginTop={{ base: 1, md: 3 }} fontSize="xl">
            btw that --is just the beginning. I am also into hip hop production, socio-poitical activism,
            automobiles, military stuff and comparitive religion.
          </Text>
          <Link href="/about" passHref>
            <ThemedButton top={3}>Read More</ThemedButton>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <ImageBox
            image="/daggy_big.png"
            height={512}
            width={512}
            alt="Vercel Logo"
          />
        </Box>
      </Flex>
      <Flex direction="column" p={{ base: 1, md: 10, xl: 20 }} marginTop={10}>
        <Heading as="h2" size="2xl">
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
              bg: bl,
              zIndex: -1,
            }}
          >
            Featured Projects
          </Text>
        </Heading>
        {FeaturedProjectList.map((value) => (
          <FeaturedProject
            name={value.name}
            description={value.description}
            textc={textc}
            images={[value.images[0], value.images[1]]}
            key={value.id}
            tags={value.tags}
            link_icons={value.icons}
            height={value.height}
            width={value.width}
            alt={value.alt}
            reversed={value.reversed}
          />
        ))}
      </Flex>
      <Flex
        bg={bl}
        mb={5}
        p={{ base: 0, md: 10 }}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Flex justify="center" w="full">
          <Box
            w={{ base: "full", md: "100%", lg: "50%" }}
            px={4}
            py={10}
            textAlign={{ base: "left", md: "center" }}
          >
            <Box
              fontSize={{ base: "4xl", sm: "6xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              color="white"
              lineHeight="shorter"
              mb={{ base: 6, md: 3 }}
            >
              <Text display="block">Want to see more?</Text>
            </Box>{" "}
            <Link href="/tech" passHref>
              <ThemedButton
                bg="#ffffff"
                color="rgb(17, 17, 17)"
                marginX={5}
                paddingX={{ base: 5, md: 10 }}
              >
                View All Projects
              </ThemedButton>
            </Link>
          </Box>
        </Flex>
      </Flex>
      <Box textAlign="center" p={{ base: 0, md: 10 }} mt={10}>
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
              bg: bl,
              zIndex: -1,
            }}
          >
            Technology I Use
          </Text>
        </Heading>
        <Text fontSize="xl">
          A comprehensive list of tech I&apos;ve learnt to use and mastered!
        </Text>
        <Box overflowX="scroll" textAlign="center" fontSize="xl">
          <Table size="lg" variant="simple">
            <Thead>
              <Tr>
                <Th>Category</Th>
                <Th>Technologies</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Programming Languages </Td>
                {/* Programming Languages */}
                <Td flexDirection="row">
                  <Flex>
                    <IconWrapper icon={FaPython} text="Python" />
                    <IconWrapper icon={SiJavascript} text="Javascript" />
                    <IconWrapper icon={SiTypescript} text="Typescript" />
                    <IconWrapper icon={SiRust} text="Rust" />
                    <IconWrapper icon={SiDeno} text="Deno" />
                    <IconWrapper icon={SiSolidity} text="Solidity" />
                    <IconWrapper icon={SiGnubash} text="Bash" />
                  </Flex>
                </Td>
              </Tr>
              {/* Databases */}
              <Tr>
                <Td>Databases </Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiPostgresql} text="Postgresql" />
                    <IconWrapper icon={SiRedis} text="Redis" />
                    <IconWrapper icon={SiMongodb} text="MongoDB" />
                    <IconWrapper icon={SiFirebase} text="Firebase DB" />
                  </Flex>
                </Td>
              </Tr>
              {/* Devops */}
              <Tr>
                <Td>Ci/Deployment</Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiDocker} text="Docker" />
                    <IconWrapper icon={SiKubernetes} text="Kubernetes" />
                    <IconWrapper icon={SiGithubactions} text="Github Actions" />
                    <IconWrapper icon={SiTravisci} text="Travis CI" />
                    <IconWrapper icon={SiLinux} text="Linux" />
                    <IconWrapper icon={SiGit} text="Git" />
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Payments/Data Visualization</Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiStripe} text="Stripe" />
                    <IconWrapper icon={SiPaypal} text="Paypal" />
                    <IconWrapper icon={SiGrafana} text="Grafana" />
                    <IconWrapper icon={SiPrometheus} text="Prometheus" />
                    <IconWrapper icon={SiDatadog} text="Datadog" />
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Cloud</Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiAmazonaws} text="AWS" />
                    <IconWrapper icon={SiNetlify} text="Netlify" />
                    <IconWrapper icon={SiVercel} text="Vercel" />
                    <IconWrapper icon={SiGooglecloud} text="Google Cloud" />
                    <IconWrapper icon={SiCloudflare} text="Cloudflare" />
                    <IconWrapper icon={SiIbmwatson} text="IBM watson" />
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
      <Flex
        color="white"
        bg={bl}
        alignItems="center"
        textAlign={{ base: "center", md: "left" }}
        p={{ base: 2, md: 10 }}
        mt={10}
        rounded="lg"
      >
        <Flex direction="column">
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
                bg: bl,
                zIndex: -1,
              }}
            >
              Contact Me
            </Text>
            <Text mt={3} fontSize={{ base: "sm", md: "md" }}>
              View all contact options
            </Text>
          </Heading>
        </Flex>
        <Spacer />
        <Link href="/contact" passHref>
          <ThemedButton
            bg="#ffffff"
            color="rgb(17, 17, 17)"
            marginX={5}
            rightIcon={<BsArrowRight />}
            paddingX={{ base: 5, md: 10 }}
          >
            Contact
          </ThemedButton>
        </Link>
        {/* <Box justifyContent="center" textAlign="center" fontSize="xl">
          <Flex>
            <IconWrapper icon={SiSublimetext} text="Sublime Text" />
            <IconWrapper icon={SiMacos} text="macos" />
            <IconWrapper icon={BsGithub} text="github" />
          </Flex>
        </Box> */}
      </Flex>
    </Box>
  );
};

export default Home;
