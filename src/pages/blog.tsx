import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  Link as ChakraLink,
} from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import NextLink from "next/link";

import MotionBox from "components/motion/Box";
import { getAllPosts } from "lib/mdx";
import type { PostFrontmatter } from "types/blog";

interface BlogProps {
  posts: (PostFrontmatter & { slug: string })[];
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <Box p={{ base: 4, md: 8 }}>
      <VStack align="start" gap={12}>
        <Box>
          <Heading
            as="h1"
            size="4xl"
            mb={4}
            fontWeight="800"
            letterSpacing="tight"
          >
            Blog
          </Heading>
          <Text fontSize="xl" color="fg.muted" maxW="2xl">
            Thoughts on software engineering, AI, and building products in 2026.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="full">
          {posts.map((post) => (
            <MotionBox
              key={post.slug}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <NextLink href={`/blog/${post.slug}`} passHref legacyBehavior>
                <ChakraLink
                  _hover={{ textDecoration: "none" }}
                  display="block"
                  h="full"
                >
                  <Box
                    p={8}
                    h="full"
                    bg="bg.subtle"
                    borderRadius="2xl"
                    borderWidth="1px"
                    borderColor="border.subtle"
                    transition="all 0.2s"
                    _hover={{
                      borderColor: "brand.500",
                      boxShadow: "xl",
                    }}
                  >
                    <VStack align="start" gap={4} h="full">
                      <HStack gap={2}>
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="surface"
                            colorPalette="brand"
                            fontSize="xs"
                            borderRadius="full"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </HStack>
                      <Heading size="xl" fontWeight="700">
                        {post.title}
                      </Heading>
                      <Text color="fg.muted" fontSize="sm">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Text>
                      <Text color="fg.default" flex="1">
                        {post.description}
                      </Text>
                    </VStack>
                  </Box>
                </ChakraLink>
              </NextLink>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
