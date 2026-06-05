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

const MotionFlex = motion(Flex);

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
  const image = images[1]; // Using dark mode image by default for immersive feel

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
      gap={12}
      py={10}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", duration: 0.8, bounce: 0.2 }}
    >
      <Box flex="1.2">
        <ImageBox height={height} width={width} image={image} alt={alt} />
      </Box>
      <Box flex="1">
        <Heading size="2xl" mb={6} fontWeight="800" letterSpacing="tight">
          {name}
        </Heading>
        <Box
          bg="bg.subtle"
          p={8}
          borderRadius="2xl"
          borderWidth="1px"
          borderColor="border.subtle"
          mb={8}
          position="relative"
          zIndex={1}
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: "brand.500",
            opacity: 0.02,
            borderRadius: "2xl",
            zIndex: -1,
          }}
        >
          <Text color="fg.default" fontSize="lg" lineHeight="relaxed">
            {description}
          </Text>
        </Box>
        <HStack gap={3} flexWrap="wrap" mb={8}>
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="surface"
              colorPalette="gray"
              px={4}
              py={1.5}
              borderRadius="full"
              fontSize="xs"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              {tag}
            </Badge>
          ))}
        </HStack>
        <HStack gap={6}>
          {link_icons.map((link) => (
            <IconLink key={link.id} url={link.url} icon={link.icon} />
          ))}
        </HStack>
      </Box>
    </MotionFlex>
  );
};

export default FeaturedProject;
