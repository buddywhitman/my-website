import {
  Box,
  Heading,
  Flex,
  HStack,
  Text,
  Badge,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
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

  const isMobile = useBreakpointValue({ base: true, md: false });
  const image = images[1] || images[0];

  if (isMobile) {
    return (
      <Box mb={10}>
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
      direction={reversed ? "row-reverse" : "row"}
      align="center"
      gap={24}
      py={32}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <MotionBox flex="1.5">
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
        <Heading size="5xl" mb={10} fontWeight="900" letterSpacing="tight" color="fg.default">
          {name}
        </Heading>
        <Box
          bg="bg.subtle"
          p={12}
          borderRadius="4xl"
          borderWidth="1px"
          borderColor="border.subtle"
          mb={12}
          position="relative"
          boxShadow="xl"
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
          <Text color="fg.default" fontSize="2xl" lineHeight="relaxed" fontWeight="medium">
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
              borderColor="border.default"
              color="fg.default"
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
