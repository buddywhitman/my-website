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
import { SiDiscord } from "react-icons/si";

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
    async function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);

      formData.append("access_key", "ffedddbb-9617-479e-9e67-7cdf2d662ad9");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
    }
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
            url="https://discord.com/users/732152359882457138"
          />
          <IconWrap
            text="Keybase"
            icon={FaKeybase}
            color="#ff6f21"
            url="https://keybase.io/buddywhitman"
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
          <form onSubmit={handleSubmit}>
            <Heading size="lg">Contact Form</Heading>
            <FormControl mb={3} id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" />
            </FormControl>
            <FormControl mb={3} id="message">
              <FormLabel>Message</FormLabel>
              <Textarea name="message" />
            </FormControl>
            <ThemedButton type="submit" bg="#ffffff" color="rgb(17, 17, 17)">
              Submit
            </ThemedButton>
          </form>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
