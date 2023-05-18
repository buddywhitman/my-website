import {
  Box,
  Tooltip,
  Flex,
  VisuallyHidden,
  Heading,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextRouter, useRouter } from "next/router";
import { IconType } from "react-icons";
import { BsBehance, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiResearchgate } from "react-icons/si";

interface IconWrapProps {
  router: NextRouter;
  icon: IconType;
  color: string;
  url: string;
}

const IconWrap = ({ icon, color, router, url }: IconWrapProps) => {
  return (
    <Tooltip style={{ cursor: "progress" }} label={url}>
      <Box
        aria-label={icon.toString()}
        fontSize="2em"
        display="inline-block"
        marginRight="1em"
      >
        <VisuallyHidden>{url}</VisuallyHidden>
        <Icon onClick={() => router.push(url)} as={icon} color={color} />
      </Box>
    </Tooltip>
  );
};

const SomeText = () => {
  const router = useRouter();

  return (
    <Box
      position={{ base: "relative", md: "absolute" }}
      bottom={0}
      left={0}
      textAlign={{ base: "center", md: "left" }}
      alignContent={{ base: "center", md: "left" }}
      borderTopRightRadius="5%"
      p={{ base: 0, md: 6, lg: 10 }}
      width={{ base: "100%", md: "50%", lg: "45%", xl: "35%" }}
      backgroundColor={useColorModeValue("bgwhite.100", "bgblack.100")}
      experimental_spaceY={3}
    >
      <Heading fontWeight="800" as="h2" fontSize={{ base: "5xl", md: "6xl" }}>
        Pulkit Kumar
      </Heading>
      <Heading opacity="0.7" as="h3" fontSize={{ base: "xl", md: "3xl" }}>
        Freelance Developer & Designer
      </Heading>
      <Flex marginX={{ base: "10%", sm: "30%", md: 0 }}>
        <IconWrap
          router={router}
          url="https://www.linkedin.com/in/buddywhitman/"
          color="#0e76a8"
          icon={BsLinkedin}
        />
        <IconWrap
          router={router}
          url="https://github.com/buddywhitman"
          color={useColorModeValue("black", "white")}
          icon={BsGithub}
        />
        <IconWrap
          router={router}
          url="https://behance.com/buddywhitman"
          color="#053eff"
          icon={BsBehance}
        />
        <IconWrap
          router={router}
          url="https://www.researchgate.net/profile/Pulkit-Kumar-7"
          color="#00ccbb"
          icon={SiResearchgate}
        />
      </Flex>
    </Box>
  );
};

export default SomeText;
