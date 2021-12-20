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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import EnhancedProject from "components/EnhancedProject";
import GithubProject from "components/GithubProject";
import MoreProjectList from "data/more_projects";

const Projects = () => {
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
  );
};

export default Projects;
