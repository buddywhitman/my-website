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
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiTravisci,
  SiCloudflare,
  SiGnubash,
  SiPostgresql,
  SiRedis,
  SiMicrosoftsqlserver,
  SiVercel,
  SiMongodb,
  SiGooglecloud,
  SiFirebase,
  SiGit,
  SiKotlin,
  SiPerl,
  SiLua,
  SiCplusplus,
  SiC,
  SiGo,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiVuedotjs,
  SiThreedotjs,
  SiSpring,
  SiFlask,
  SiDjango,
  SiGatsby,
  SiFlutter,
  SiChakraui,
  SiNginx,
  SiApache,
  SiGraphql,
  SiJquery,
  SiTableau,
  SiPowerbi,
  SiQgis,
  SiR,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiPytorch,
  SiNumpy,
  SiScipy,
  SiPandas,
  SiApachespark,
  SiScala,
  SiApachehadoop,
  SiElasticsearch,
  SiKibana,
  SiGrafana,
  SiApachekafka,
  SiOpensearch,
  SiLogstash,
  SiMysql,
  SiJenkins,
  SiPerforce,
  SiGitlab,
  SiOracle,
  SiHeroku,
  SiRedhatopenshift,
  SiAmazondynamodb,
  SiAmazonec2,
  SiAmazonecs,
  SiAmazoneks,
  SiAmazonrds,
  SiAmazons3,
  SiAmazonsqs,
  SiMicrosoftazure,
  SiAuth0,
  SiOpenid,
  SiJsonwebtokens,
  SiJson,
  SiMqtt,
  SiIfttt,
  SiBabel,
  SiWebpack,
  SiYarn,
  SiChocolatey,
  SiNpm,
  SiJira,
  SiMarkdown,
  SiLatex,
  SiNotion,
  SiMicrosoftvisio,
  SiWikidotjs,
  SiWindows11,
  SiMacos,
  SiArduino,
  SiArm,
  SiTorproject,
  SiRaspberrypi,
  SiUbuntu,
  SiDebian,
  SiFreebsd,
  SiKalilinux,
  SiTails,
  SiCanva,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAbletonlive,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiObsstudio,
  SiAdobexd,
  SiInvision,
  SiFigma,
  SiSketch,
  SiLunacy,
  SiMiro,
  SiAndroidstudio,
  SiVisualstudio,
  SiUnity,
  SiApachenetbeanside,
  SiIntellijidea,
  SiEclipseide,
  SiXcode,
  SiWebstorm,
  SiPycharm,
  SiDatagrip,
  SiClion,
  SiJupyter,
} from "react-icons/si";
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
                <Td>Languages </Td>
                <Td flexDirection="row">
                  <Flex>
                    <IconWrapper icon={FaJava} text="Java" />
                    <IconWrapper icon={FaPython} text="Python" />
                    <IconWrapper icon={SiC} text="C" />
                    <IconWrapper icon={SiCplusplus} text="C++" />
                    <IconWrapper icon={SiJavascript} text="Javascript" />
                    <IconWrapper icon={SiTypescript} text="Typescript" />
                    <IconWrapper icon={SiGo} text="Go" />
                    <IconWrapper icon={SiKotlin} text="Kotlin" />
                    <IconWrapper icon={SiRust} text="Rust" />
                    <IconWrapper icon={SiPerl} text="Perl" />
                    <IconWrapper icon={SiLua} text="Lua" />
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Frameworks/libs </Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiReact} text="React" />
                    <IconWrapper icon={SiReactrouter} text="React Router" />
                    <IconWrapper icon={SiRedux} text="Redux" />
                    <IconWrapper icon={SiAngular} text="Angular" />
                    <IconWrapper icon={SiNodedotjs} text="Node.js" />
                    <IconWrapper icon={SiVuedotjs} text="Vue.js" />
                    <IconWrapper icon={SiSpring} text="Spring" />
                    <IconWrapper icon={SiFlask} text="Flask" />
                    <IconWrapper icon={SiDjango} text="Django" />
                    <IconWrapper icon={SiNextdotjs} text="Next.js" />
                    <IconWrapper icon={SiExpress} text="Express.js" />
                    <IconWrapper icon={SiThreedotjs} text="Three.js" />
                    <IconWrapper icon={SiGatsby} text="Gatsby" />
                    <IconWrapper icon={SiFlutter} text="Flutter" />
                    <IconWrapper icon={SiChakraui} text="Chakra UI" />
                  </Flex>
                </Td>
              </Tr>
              {/* Databases */}
              <Tr>
                <Td>Databases </Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiOracle} text="DBMS" />
                    <IconWrapper icon={SiPostgresql} text="Postgresql" />
                    <IconWrapper icon={SiMysql} text="MySQL" />
                    <IconWrapper icon={SiRedis} text="Redis" />
                    <IconWrapper icon={SiMongodb} text="MongoDB" />
                    <IconWrapper icon={SiMicrosoftsqlserver} text="MsSQL" />
                  </Flex>
                </Td>
              </Tr>
              {/* Devops */}
              <Tr>
                <Td>CI/Containerization</Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiTravisci} text="Travis CI" />
                    <IconWrapper icon={SiJenkins} text="Jenkins" />
                    <IconWrapper icon={SiVercel} text="Vercel" />
                    <IconWrapper icon={SiHeroku} text="Heroku" />
                    <IconWrapper icon={SiPerforce} text="Perforce" />
                    <IconWrapper icon={SiGit} text="Git" />
                    <IconWrapper icon={SiGithubactions} text="Github Actions" />
                    <IconWrapper icon={SiGitlab} text="GitLab" />
                    <IconWrapper icon={SiDocker} text="Docker" />
                    <IconWrapper icon={SiKubernetes} text="Kubernetes" />
                    <IconWrapper icon={SiRedhatopenshift} text="OpenShift" />
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Visualization/ML</Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiTableau} text="Tableau" />
                    <IconWrapper icon={SiPowerbi} text="Power BI" />
                    <IconWrapper icon={SiQgis} text="QGIS" />
                    <IconWrapper icon={SiR} text="R" />
                    <IconWrapper icon={SiTensorflow} text="TensorFlow" />
                    <IconWrapper icon={SiKeras} text="Keras" />
                    <IconWrapper icon={SiOpencv} text="OpenCV" />
                    <IconWrapper icon={SiPytorch} text="PyTorch" />
                    <IconWrapper icon={SiNumpy} text="NumPy" />
                    <IconWrapper icon={SiScipy} text="SciPy" />
                    <IconWrapper icon={SiPandas} text="Pandas" />
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Build Tools</Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiGnubash} text="bash" />
                    <IconWrapper icon={SiBabel} text="babel" />
                    <IconWrapper icon={SiWebpack} text="webpack" />
                    <IconWrapper icon={SiYarn} text="yarn" />
                    <IconWrapper icon={SiChocolatey} text="chocolatey" />
                    <IconWrapper icon={SiNpm} text="npm" />
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Cloud</Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiAmazondynamodb} text="Dyanmo DB" />
                    <IconWrapper icon={SiAmazonec2} text="EC2" />
                    <IconWrapper icon={SiAmazonecs} text="ECS" />
                    <IconWrapper icon={SiAmazoneks} text="EKS" />
                    <IconWrapper icon={SiAmazonrds} text="RDS" />
                    <IconWrapper icon={SiAmazons3} text="S3" />
                    <IconWrapper icon={SiAmazonsqs} text="SQS" />
                    <IconWrapper icon={SiMicrosoftazure} text="Azure" />
                    <IconWrapper icon={SiGooglecloud} text="Google Cloud" />
                    <IconWrapper icon={SiCloudflare} text="Cloudflare" />
                    <IconWrapper icon={SiFirebase} text="Firebase" />
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Caching/Data Processing</Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiNginx} text="Nginx" />
                    <IconWrapper icon={SiApache} text="Apache Web Server" />
                    <IconWrapper icon={SiGraphql} text="GraphQL" />
                    <IconWrapper icon={SiJquery} text="jQuery" />
                    <IconWrapper icon={SiApachespark} text="Spark" />
                    <IconWrapper icon={SiScala} text="Scala" />
                    <IconWrapper icon={SiApachehadoop} text="Hadoop" />
                    <IconWrapper icon={SiElasticsearch} text="Elasticsearch" />
                    <IconWrapper icon={SiKibana} text="Kibana" />
                    <IconWrapper icon={SiGrafana} text="Grafana" />
                    <IconWrapper icon={SiApachekafka} text="Kafka" />
                    <IconWrapper icon={SiOpensearch} text="Opensearch" />
                    <IconWrapper icon={SiLogstash} text="Logstash" />
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Auth/Telemetry</Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiAuth0} text="Auth0" />
                    <IconWrapper icon={SiOpenid} text="OpenID" />
                    <IconWrapper icon={SiJsonwebtokens} text="JWT" />
                    <IconWrapper icon={SiJson} text="JSON" />
                    <IconWrapper icon={SiMqtt} text="MQTT" />
                    <IconWrapper icon={SiIfttt} text="IFTTT" />
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Ecosystems</Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiWindows11} text="Windows" />
                    <IconWrapper icon={SiMacos} text="MacOS" />
                    <IconWrapper icon={SiUbuntu} text="Ubuntu" />
                    <IconWrapper icon={SiDebian} text="Debian" />
                    <IconWrapper icon={SiFreebsd} text="FreeBSD" />
                    <IconWrapper icon={SiArduino} text="Arduino" />
                    <IconWrapper icon={SiArm} text="Arm" />
                    <IconWrapper icon={SiRaspberrypi} text="Raspberry Pi" />
                    <IconWrapper icon={SiKalilinux} text="Kali" />
                    <IconWrapper icon={SiTails} text="Tails" />
                    <IconWrapper icon={SiTorproject} text="Tor" />
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>Design</Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiAdobeillustrator} text="Illustrator" />
                    <IconWrapper icon={SiAdobephotoshop} text="Photoshop" />
                    <IconWrapper icon={SiAdobexd} text="Xd" />
                    <IconWrapper icon={SiInvision} text="InVision" />
                    <IconWrapper icon={SiFigma} text="Figma" />
                    <IconWrapper icon={SiSketch} text="Sketch" />
                    <IconWrapper icon={SiAdobepremierepro} text="Premier Pro" />
                    <IconWrapper
                      icon={SiAdobeaftereffects}
                      text="After Effects"
                    />
                    <IconWrapper icon={SiObsstudio} text="OBS Studio" />
                    <IconWrapper icon={SiAdobeaudition} text="Audition" />
                    <IconWrapper icon={SiAbletonlive} text="Ableton" />
                    <IconWrapper icon={SiCanva} text="Canva" />
                    <IconWrapper icon={SiAdobeindesign} text="InDesign" />
                    <IconWrapper icon={SiMiro} text="Miro" />
                    <IconWrapper icon={SiLunacy} text="Lunacy" />
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>PM/Docs</Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiJira} text="Jira" />
                    <IconWrapper icon={SiMarkdown} text="Md" />
                    <IconWrapper icon={SiLatex} text="LaTex" />
                    <IconWrapper icon={SiNotion} text="Notion" />
                    <IconWrapper icon={SiMicrosoftvisio} text="Visio" />
                    <IconWrapper icon={SiWikidotjs} text="Wiki.js" />
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td>IDEs</Td>
                <Td>
                  <Flex>
                    <IconWrapper icon={SiVisualstudio} text="VS" />
                    <IconWrapper icon={SiIntellijidea} text="IDEA" />
                    <IconWrapper icon={SiEclipseide} text="Eclipse" />
                    <IconWrapper icon={SiWebstorm} text="WebStorm" />
                    <IconWrapper icon={SiPycharm} text="PyCharm" />
                    <IconWrapper icon={SiDatagrip} text="DataGrip" />
                    <IconWrapper icon={SiClion} text="CLion" />
                    <IconWrapper icon={SiJupyter} text="Jupyter" />
                    <IconWrapper icon={SiAndroidstudio} text="Android Studio" />
                    <IconWrapper icon={SiXcode} text="Xcode" />
                    <IconWrapper icon={SiUnity} text="Unity" />
                    <IconWrapper icon={SiApachenetbeanside} text="NetBeans" />
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
