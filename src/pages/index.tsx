/* eslint-disable prettier/prettier */
import {
  Box,
  Heading,
  Flex,
  Spacer,
  Text,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import FeaturedProject from "components/FeaturedProject";
import ImageBox from "components/ImageBox";
import SomeText from "components/SomeText";
import ThemedButton from "components/ThemedButton";
import FeaturedProjectList from "data/featured_projects";

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
            I love crafting delightful products & experiences for my fellow
            humans.
          </Text>
          <Text marginTop={{ base: 1, md: 3 }} fontSize="xl">
            I do this by employing adaptive design and interaction principles in
            my webapps and high-performance RESTful web services.
          </Text>
          <Text marginTop={{ base: 1, md: 3 }} fontSize="xl">
            While I deeply empathize with my users, I&apos;m also mindful of
            business goals, keeping products scalable, highly optimized, easily
            deployable and practising an agile workflow during development, all
            in sync with latest lint and documentation conventions.
          </Text>
          {/*
          <Text marginTop={{ base: 1, md: 3 }} fontSize="xl">
            A decade or two down the line, I would love to launch a consumer-facing
            hard tech venture. I am also into music production, socio-poitical activism, 
            military stuff and comparitive religion. My belief in absolute equality,
            world peace, love and internationalism stems from an avid interest in the
            Vedanta philosophy.
          </Text>
          */}
          <Stack
            marginTop={{ base: 1, md: 1 }}
            direction="row"
            spacing={4}
            align="center"
          >
            <Link href="/about" passHref>
              <ThemedButton top={3}>Read More</ThemedButton>
            </Link>
            <Link href="/tech" passHref>
              <ThemedButton rightIcon={<BsArrowRight />} top={3}>
                Tech Stack
              </ThemedButton>
            </Link>
            {/*
            <Link href="/design" passHref>
              <ThemedButton rightIcon={<BsArrowRight />} top={3}>
                Portfolio
              </ThemedButton>
            </Link>
            */}
          </Stack>
        </Box>
        <Spacer />
        <Box pt={10} lg={500} alignContent={{ base: "center", md: "left" }}>
          <ImageBox
            image="/daggy_big.webp"
            height={500}
            width={800}
            alt="image of pulkit working on pc"
          />
        </Box>
      </Flex>
      <Flex direction="column" p={{ base: 1, md: 8, xl: 20 }} marginTop={10}>
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
            Featured Work
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
      <Flex justify="center" w="full">
        <Box
          w={{ base: "full", md: "100%", lg: "50%" }}
          px={4}
          pb={10}
          textAlign={{ base: "left", md: "center" }}
        >
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
      </Flex>
    </Box>
  );
};

export default Home;
