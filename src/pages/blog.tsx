/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const Blog = () => {
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
          Blog
        </Text>
      </Heading>
    </Box>
  );
};

export default Blog;
