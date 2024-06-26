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
import ThemedMainButton from "components/ThemedMainButton";
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
            Hey, There! I&apos;m Pulkit, an electrical engineering sophomore at
            MIT, Manipal. I love crafting delightful products & experiences for
            my fellow humans.
          </Text>
          <Text marginTop={{ base: 1, md: 3 }} fontSize="xl">
            I do this by building thoughtful hardware and software products:
            from RESTful web services and responsive web & native apps to
            interactive holograms and solar cars.
          </Text>
          <Text marginTop={{ base: 1, md: 3 }} fontSize="xl">
            Reach out to work with me for all your software, hardware and
            branding needs.
          </Text>
          <Stack
            marginTop={{ base: 1, md: 1 }}
            direction="row"
            spacing={4}
            align="center"
          >
            <Link href="/tech" passHref>
              <ThemedMainButton top={3}>Tech Stack</ThemedMainButton>
            </Link>
            <Link href="/about" passHref>
              <ThemedButton rightIcon={<BsArrowRight />} top={3}>
                Read More
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
            image={useColorModeValue("/home_b.webp", "/home_w.webp")}
            height={450}
            width={730}
            alt="pulkit smiling"
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
