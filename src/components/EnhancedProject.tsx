import {
  Box,
  Heading,
  Flex,
  Icon,
  Spacer,
  Text,
  Tooltip,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";

interface IconWrapProps {
  icon: IconType;
  color: string;
  url: string;
}

const IconWrap = ({ icon, color, url }: IconWrapProps) => {
  return (
    <Link href={url} passHref>
      <Flex textAlign="left" alignItems="center" justifyContent="left">
        <Tooltip style={{ cursor: "progress" }} label={url}>
          <Box
            aria-label={icon.toString()}
            display="inline-block"
            marginLeft="1em"
          >
            <VisuallyHidden>{url}</VisuallyHidden>
            <Icon
              h={{ base: 6, md: 6 }}
              w={{ base: 6, md: 6 }}
              as={icon}
              color={color}
            />
          </Box>
        </Tooltip>
      </Flex>
    </Link>
  );
};

interface IconLinkProps {
  icon: IconType;
  url: string;
  id: number;
}

interface EnhancedProjectProps {
  title: string;
  description: string;
  tags: string[];
  icons: IconLinkProps[];
}

export default function EnhancedProject(props: EnhancedProjectProps) {
  const { title, description, tags, icons } = props;
  const blackc = useColorModeValue("#000", "#fff");

  return (
    <Flex
      direction="column"
      maxW="md"
      position="relative"
      rounded="md"
      bg={useColorModeValue("gray.100", "#212930")}
      p={6}
    >
      <Flex textAlign="left" my={3} alignItems="center">
        <Heading alignSelf="left" fontSize={{ base: "xl", md: "2xl" }}>
          {title}
        </Heading>
        <Spacer />
        <Flex alignItems="center" alignSelf="flex-end">
          {icons.map((index) => (
            <IconWrap
              key={index.id}
              icon={index.icon}
              color={blackc}
              url={index.url}
            />
          ))}
        </Flex>
      </Flex>
      <Text marginBottom={6} fontSize="xs">
        {description}
      </Text>
      <Box my={1} bottom={1} position="absolute">
        {tags.map((value, index) => (
          <Text
            p={1}
            display="inline-block"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            opacity="0.7"
            fontSize="xs"
          >
            {value}
          </Text>
        ))}
      </Box>
    </Flex>
  );
}
