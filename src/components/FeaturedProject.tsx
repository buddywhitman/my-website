import {
  Box,
  Heading,
  Flex,
  HStack,
  Text,
  Badge,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IconType } from "react-icons";

import IconLink from "components/IconLink";
import ImageBox from "components/ImageBox";

interface IconLinkProps {
  icon: IconType;
  url: string;
  id: number;
}

interface FeaturedProjectProps {
  name: string;
  description: string;
  textc: string;
  reversed: boolean;
  images: string[];
  alt: string;
  tags: string[];
  link_icons: IconLinkProps[];
  height: number;
  width: number;
}

const MotionFlex = motion(Flex) as any;
const MotionBox = motion(Box) as any;

const FeaturedProject = (props: FeaturedProjectProps) => {
  const {
    reversed,
    name,
    description,
    images,
    tags,
    alt,
    link_icons,
    height,
    width,
  } = props;

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isMobile = useBreakpointValue({ base: true, md: false });
  const image = images[1] || images[0];

  if (isMobile) {
    return (
      <Box mb={10} ref={targetRef}>
        <ImageBox height={height} width={width} image={image} alt={alt} />
        <Box mt={6}>
          <Heading size="xl" mb={4} fontWeight="800">
            {name}
          </Heading>
          <Text color="fg.muted" fontSize="lg" mb={6}>
            {description}
          </Text>
          <HStack gap={2} flexWrap="wrap" mb={6}>
            {tags.map((tag) => (
              <Badge key={tag} variant="subtle" colorPalette="brand" px={3} py={1} borderRadius="full">
                {tag}
              </Badge>
            ))}
          </HStack>
          <HStack gap={4}>
            {link_icons.map((link) => (
              <IconLink key={link.id} url={link.url} icon={link.icon} />
            ))}
          </HStack>
        </Box>
      </Box>
    );
  }

  return (
    <MotionFlex
      ref={targetRef}
      style={{ opacity } as any}
      direction={reversed ? "row-reverse" : "row"}
      align="center"
      gap={24}
      py={32}
    >
      <MotionBox flex="1.5" style={{ y } as any}>
        <Box position="relative">
          <Box
            position="absolute"
            inset="-10px"
            bg="brand.500/10"
            filter="blur(30px)"
            borderRadius="3xl"
            zIndex="-1"
          />
          <ImageBox height={height} width={width} image={image} alt={alt} />
        </Box>
      </MotionBox>
      <Box flex="1">
        <Text 
          fontFamily="display" 
          fontSize="sm" 
          fontWeight="900" 
          color="brand.400" 
          letterSpacing="0.2em" 
          mb={6}
          textTransform="uppercase"
        >
          Project // 2026
        </Text>
        <Heading size="5xl" mb={10} fontWeight="900" letterSpacing="tight" color="white">
          {name}
        </Heading>
        <Box
          bg="whiteAlpha.50"
          backdropFilter="blur(10px)"
          p={12}
          borderRadius="4xl"
          borderWidth="1px"
          borderColor="whiteAlpha.100"
          mb={12}
          position="relative"
          boxShadow="2xl"
          _before={{
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "4px",
            height: "100%",
            bg: "brand.500",
            borderTopLeftRadius: "full",
            borderBottomLeftRadius: "full",
          }}
        >
          <Text color="whiteAlpha.900" fontSize="2xl" lineHeight="relaxed" fontWeight="medium">
            {description}
          </Text>
        </Box>
        <HStack gap={6} flexWrap="wrap" mb={12}>
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              colorPalette="brand"
              px={6}
              py={2}
              borderRadius="full"
              fontSize="xs"
              fontWeight="900"
              letterSpacing="widest"
              borderColor="whiteAlpha.300"
              color="white"
            >
              {tag}
            </Badge>
          ))}
        </HStack>
        <HStack gap={10}>
          {link_icons.map((link) => (
            <IconLink key={link.id} url={link.url} icon={link.icon} />
          ))}
        </HStack>
      </Box>
    </MotionFlex>
  );
};

export default FeaturedProject;
