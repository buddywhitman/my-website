import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Icon,
  Tooltip,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaKeybase } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdEmail } from "react-icons/md";
import { SiDiscord, SiTwitter } from "react-icons/si";

import ThemedButton from "components/ThemedButton";

interface IconWrapProps {
  icon: IconType;
  color: string;
  text: string;
  url: string;
}

const IconWrap = ({ icon, color, url, text }: IconWrapProps) => {
  return (
    <Link href={url} passHref>
      <Flex my={3} textAlign="left" alignItems="center" justifyContent="left">
        <Tooltip style={{ cursor: "progress" }} label={url}>
          <Box
            aria-label={icon.toString()}
            display="inline-block"
            marginRight="1em"
          >
            <VisuallyHidden>{url}</VisuallyHidden>
            <Icon
              h={{ base: 8, md: 12 }}
              w={{ base: 8, md: 12 }}
              as={icon}
              color={color}
            />
          </Box>
        </Tooltip>
        <Heading ml={3} size="sm">
          {" "}
          | {text}
        </Heading>
      </Flex>
    </Link>
  );
};

const Contact = () => {
  const bl = useColorModeValue("brand.400", "brand.600");
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
          Contact
        </Text>
      </Heading>
      <Flex direction={{ base: "column", md: "row" }} p={{ base: 1, md: 8 }}>
        <Flex w={{ base: "100%", md: "50%" }} direction="column">
          <IconWrap
            text="Discord"
            icon={SiDiscord}
            color="#5865F2"
            url="https://discord.gg/MZM9Ctkrcb"
          />
          <IconWrap
            text="Keybase"
            icon={FaKeybase}
            color="#ff6f21"
            url="https://keybase.io/buddywhitman"
          />
          <IconWrap
            text="Twitter"
            icon={SiTwitter}
            color="#1DA1F2"
            url="https://twitter.com/desihippe/"
          />
          <IconWrap
            text="Mail"
            icon={MdEmail}
            color={useColorModeValue("#000", "#fff")}
            url="mailto:pulkit.talks@gmail.com"
          />
        </Flex>
        <Flex
          alignSelf="right"
          color="#fff"
          p={8}
          paddingY={16}
          w={{ base: "100%", md: "50%" }}
          rounded="lg"
          bg={bl}
          direction="column"
        >
          <Heading size="lg">Contact Form</Heading>
          <FormControl mb={3} id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl mb={3} id="message">
            <FormLabel>Message</FormLabel>
            <Textarea />
          </FormControl>
          <ThemedButton bg="#ffffff" color="rgb(17, 17, 17)">
            Submit
          </ThemedButton>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
