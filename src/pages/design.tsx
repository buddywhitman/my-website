/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

const Design = () => {
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
          Design
        </Text>
      </Heading>
    </Box>
  );
};

export default Design;
