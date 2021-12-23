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
const Design = () => {
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
          Design
        </Text>
      </Heading>
          </Box>
  );
};

export default Contact;
