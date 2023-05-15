/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Alert,
  AlertIcon,
  Box,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Spinner,
  Tooltip,
  Flex,
  Table,
  Tr,
  Thead,
  Th,
  Tbody,
  Td,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaPython, FaJava } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import {
  SiJavascript,
  SiTypescript,
  SiRust,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiTravisci,
  SiDatadog,
  SiStripe,
  SiCloudflare,
  SiGnubash,
  SiGrafana,
  SiLinux,
  SiNetlify,
  SiPaypal,
  SiPostgresql,
  SiPrometheus,
  SiRedis,
  SiVercel,
  SiMongodb,
  SiGooglecloud,
  SiFirebase,
  SiGit,
  SiKotlin,
  SiPerl,
  SiLua,
} from "react-icons/si";
import { TbBrandCpp, TbBrandGolang } from "react-icons/tb";
import Slider from "react-slick";

import EnhancedProject from "components/EnhancedProject";
import GithubProject from "components/GithubProject";
import MoreProjectList from "data/more_projects";

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

const Tech = () => {
  const bl = useColorModeValue("brand.400", "brand.600");
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

  return (
    <Box>
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
                    <IconWrapper icon={TbBrandCpp} text="C++" />
                    <IconWrapper icon={FaJava} text="Java" />
                    <IconWrapper icon={SiJavascript} text="Javascript" />
                    <IconWrapper icon={SiTypescript} text="Typescript" />
                    <IconWrapper icon={TbBrandGolang} text="Go" />
                    <IconWrapper icon={SiKotlin} text="Kotlin" />
                    <IconWrapper icon={SiRust} text="Rust" />
                    <IconWrapper icon={SiPerl} text="Perl" />
                    <IconWrapper icon={SiLua} text="Lua" />
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
                    <IconWrapper icon={SiGnubash} text="Bash" />
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
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>

      <Box p={{ base: 1, md: 8 }}>
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
            More Projects
          </Text>
        </Heading>
        <Box marginTop={5}>
          <Alert variant="left-accent" status="info">
            <AlertIcon />
            View Featured Projects on the Home Page!
          </Alert>
        </Box>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 3 }}
          spacing={10}
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
        <Heading as="h2" size="xl">
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
            Other Projects
          </Text>
        </Heading>
        <Box my={3}>
          {data === null ? (
            <Spinner />
          ) : (
            <Slider
              infinite
              centerMode
              className="center"
              pauseOnHover={false}
              slidesToShow={SlidShow}
              slidesToScroll={1}
              autoplay
              autoplaySpeed={2000}
            >
              {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                data.data.repositories.nodes.map((value) => (
                  <GithubProject data={value} />
                ))
              }
            </Slider>
          )}
        </Box>
        <Heading as="h2" size="xl">
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
            Contributions
          </Text>
        </Heading>
        <Box my={3}>
          {data === null ? (
            <Spinner />
          ) : (
            <Slider
              infinite
              centerMode
              className="center"
              pauseOnHover={false}
              slidesToShow={SlidShow}
              slidesToScroll={1}
              autoplay
              autoplaySpeed={2000}
            >
              {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                data.data.repositoriesContributedTo.nodes.map((value) => (
                  <GithubProject data={value} />
                ))
              }
            </Slider>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Tech;
