import {
  Box,
  Heading,
  Text,
  VisuallyHidden,
  Icon,
  Input,
  Field,
  Textarea,
  Flex,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaKeybase } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdEmail } from "react-icons/md";
import { SiDiscord } from "react-icons/si";

import ThemedButton from "components/ThemedButton";
import { Tooltip } from "components/ui/tooltip";

interface IconWrapProps {
  icon: IconType;
  color: string;
  text: string;
  url: string;
}

const IconWrap = ({ icon, color, url, text }: IconWrapProps) => {
  return (
    <Link href={url} passHref legacyBehavior>
      <Flex as="a" my={3} textAlign="left" alignItems="center" justifyContent="left" _hover={{ color: "brand.400" }}>
        <Tooltip content={url} showArrow>
          <Box
            aria-label={text}
            display="inline-block"
            marginRight="1em"
            tabIndex={0}
          >
            <VisuallyHidden>{text}</VisuallyHidden>
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
            bg: "brand.500",
            zIndex: -1,
          }}
        >
          Contact
        </Text>
      </Heading>
      <Flex direction={{ base: "column", md: "row" }} p={{ base: 1, md: 8 }} gap={8}>
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
            color="white"
            url="mailto:pulkit.talks@gmail.com"
          />
        </Flex>
        <Flex
          color="#fff"
          p={8}
          paddingY={16}
          w={{ base: "100%", md: "50%" }}
          rounded="3xl"
          bg="brand.500"
          direction="column"
        >
          <form action="https://api.web3forms.com/submit" method="POST">
            <VStack align="stretch" gap={6}>
              <Heading size="lg">Contact Form</Heading>
              <Input
                type="hidden"
                name="access_key"
                value="ffedddbb-9617-479e-9e67-7cdf2d662ad9"
              />
              <Field.Root>
                <Field.Label color="white">Email address</Field.Label>
                <Input 
                  type="email" 
                  name="email" 
                  bg="whiteAlpha.200" 
                  border="none" 
                  _focus={{ bg: "whiteAlpha.300" }}
                />
              </Field.Root>
              <Field.Root>
                <Field.Label color="white">Message</Field.Label>
                <Textarea 
                  name="message" 
                  bg="whiteAlpha.200" 
                  border="none" 
                  _focus={{ bg: "whiteAlpha.300" }}
                  rows={5}
                />
              </Field.Root>
              <ThemedButton type="submit" bg="#ffffff" color="brand.500" _hover={{ bg: "gray.100" }}>
                Submit
              </ThemedButton>
            </VStack>
          </form>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
