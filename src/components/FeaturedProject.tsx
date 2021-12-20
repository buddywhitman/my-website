/* eslint-disable @typescript-eslint/naming-convention */
import {
  Box,
  Heading,
  Flex,
  Image,
  HStack,
  Text,
  TypographyProps,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

import IconLink from "components/IconLink";
import ImageBox from "components/ImageBox";

interface ImageBoxMarginedProps {
  margin: string;
  image: string;
  alt: string;
  height: number;
  width: number;
}

interface IconLinkProps {
  icon: IconType;
  url: string;
  id: number;
}

const ImageBoxMargined = ({
  margin,
  image,
  alt,
  height,
  width,
}: ImageBoxMarginedProps) => {
  return (
    <Box marginRight={margin}>
      <ImageBox height={height} width={width} image={image} alt={alt} />
    </Box>
  );
};

interface ContentBoxProps {
  name: string;
  description: string;
  textc: string;
  align: TypographyProps["textAlign"];
  ml: string;
  mr: string;
  tags: string[];
  fa: string;
  link_icons: IconLinkProps[];
}

const ContentBox = ({
  name,
  description,
  textc,
  align,
  ml,
  mr,
  fa,
  tags,
  link_icons,
}: ContentBoxProps) => {
  return (
    <Flex
      zIndex={1000}
      textAlign={align}
      direction="column"
      maxW="80%"
      marginRight={mr}
      marginLeft={ml}
      justifyContent="center"
    >
      <Heading opacity={0.7} size="sm" color={textc} alignSelf={align}>
        Featured Project
      </Heading>
      <Heading marginBottom={3} color={textc} alignSelf={align}>
        {name}
      </Heading>
      <Flex
        bg={useColorModeValue("gray.100", "#212930")}
        width="100%"
        p={8}
        direction="column"
        borderRadius="0.5em"
      >
        {description}
      </Flex>
      <Box
        columns={5}
        mt={6}
        fontWeight="600"
        opacity="0.7"
        spacing={1}
        fontSize="lg"
        maxW={{ base: "sm", lg: "sm" }}
        alignItems={align}
        textAlign={align}
        alignSelf={fa}
      >
        {tags.map((value) => (
          <Text px={2} display="inline-block" isTruncated>
            {value}
          </Text>
        ))}
      </Box>
      <HStack
        fontWeight="600"
        opacity="0.7"
        mt={6}
        alignItems={align}
        textAlign={align}
        alignSelf={fa}
      >
        {link_icons.map((value) => (
          <IconLink key={value.id} url={value.url} icon={value.icon} />
        ))}
      </HStack>
    </Flex>
  );
};

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

function FeaturedProject(props: FeaturedProjectProps) {
  const {
    reversed,
    name,
    description,
    textc,
    images,
    tags,
    alt,
    link_icons,
    height,
    width,
  } = props;
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
  });
  const align = reversed ? "flex-end" : "flex-start";
  const image = useColorModeValue(images[0], images[1]);
  if (isMobile) {
    return (
      <Flex
        marginY="10%"
        pos="relative"
        height="600px"
        textAlign={reversed ? "right" : "left"}
        alignItems={reversed ? "right" : "left"}
      >
        <Image
          opacity={0.7}
          height="100%"
          width="100%"
          objectFit="cover"
          pos="absolute"
          src={image}
          alt={alt}
        />
        <Flex
          height="100%"
          width="100%"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex={1000}
          paddingY={10}
          paddingX={4}
          direction="column"
        >
          <Heading size="sm" color="brand.50" alignSelf="left">
            Featured Project
          </Heading>
          <Heading color="white" marginBottom={6} alignSelf="left">
            {name}
          </Heading>
          <Text textColor="white">{description}</Text>
          <Box
            mt={6}
            alignSelf={align}
            color="white"
            alignItems="center"
            justifyContent="center"
          >
            {tags.map((value, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Text key={index} px={2} display="inline-block" isTruncated>
                {value}
              </Text>
            ))}
          </Box>
          <Flex
            mt={6}
            alignSelf={align}
            color="white"
            alignItems="center"
            justifyContent="center"
          >
            {link_icons.map((value) => (
              <IconLink key={value.id} url={value.url} icon={value.icon} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    );
  }
  return (
    <Flex
      marginY={{ base: 0, md: "2%" }}
      paddingX={{ base: 0, md: 4, xl: 10 }}
      marginX={{ base: 0, xl: "5%" }}
    >
      {!reversed ? (
        <ImageBoxMargined
          height={height}
          width={width}
          image={image}
          alt={alt}
          margin="0%"
        />
      ) : (
        <br />
      )}
      <ContentBox
        name={name}
        fa={reversed ? "flex-start" : "flex-end"}
        description={description}
        textc={textc}
        align={reversed ? "left" : "right"}
        ml={reversed ? "0%" : "-20%"}
        mr={reversed ? "-20%" : "0%"}
        tags={tags}
        link_icons={link_icons}
      />
      {reversed ? (
        <ImageBoxMargined
          height={height}
          width={width}
          image={image}
          alt={alt}
          margin="0%"
        />
      ) : (
        <br />
      )}
    </Flex>
  );
}

export default FeaturedProject;
