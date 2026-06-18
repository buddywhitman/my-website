/* eslint-disable react/no-unescaped-entities */
import { Box, Text, SimpleGrid, VStack, HStack, Link as ChakraLink } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import NextLink from "next/link";
import { motion } from "framer-motion";

import { getAllPosts } from "lib/mdx";
import type { PostFrontmatter } from "types/blog";

const MotionBox = motion(Box) as any;
const EASE = [0.23, 1, 0.32, 1] as const;

interface BlogProps {
  posts: (PostFrontmatter & { slug: string })[];
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <Box pb={20}>
      {/* HERO */}
      <Box position="relative" pt={{ base: 8, md: 14 }} pb={{ base: 10, md: 16 }} overflow="hidden">
        <Box className="blob blob-alt" top="-30%" left="-4%" w={{ base: "50vw", md: "30vw" }} h={{ base: "50vw", md: "30vw" }} bg="radial-gradient(circle, var(--c-saffron) 0%, transparent 68%)" opacity="0.14" />
        <Box position="relative" zIndex="1">
          <Text className="mono-label" color="var(--synced-muted)" fontSize="10px" mb={{ base: 4, md: 6 }}>NOTES IN THE MARGIN</Text>
          <Text as="h1" className="editorial" fontSize={{ base: "18vw", md: "13vw", lg: "11vw" }} fontWeight="600" lineHeight="0.85" letterSpacing="-0.03em">
            <Box as="span" color="var(--synced-text)">Wri</Box><Box as="span" className="tiedye-text">ting</Box>
          </Text>
          <Text mt={{ base: 6, md: 8 }} maxW="600px" fontSize={{ base: "md", md: "lg" }} color="var(--synced-muted)" lineHeight="relaxed">
            Half-formed thoughts on software, hardware, and what the machines are doing to us. For the
            sharper political stuff, that lives at{" "}
            <a href="https://desihippe.substack.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>desihippe</a>.
          </Text>
        </Box>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} w="full">
        {posts.map((post, i) => (
          <MotionBox
            key={post.slug}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, ease: EASE, delay: i * 0.06 }}
          >
            <ChakraLink asChild _hover={{ textDecoration: "none" }} display="block" h="full">
              <NextLink href={`/blog/${post.slug}`}>
                <Box className="lift-card" p={8} h="full" bg="var(--synced-surface)" borderRadius="2xl" borderWidth="1px" borderColor="var(--synced-border)"
                  _hover={{ borderColor: "var(--accent)" }} style={{ backdropFilter: "blur(10px)" }}>
                  <VStack align="start" gap={4} h="full">
                    <HStack gap={2} flexWrap="wrap">
                      {post.tags.map((tag) => (
                        <Text key={tag} className="mono-label" fontSize="9px" px="2.5" py="1" border="1px solid" borderColor="var(--synced-border)" borderRadius="full" color="var(--accent)">
                          {tag}
                        </Text>
                      ))}
                    </HStack>
                    <Text className="editorial" fontSize="2xl" fontWeight="600" color="var(--synced-text)" lineHeight="1.2">
                      {post.title}
                    </Text>
                    <Text className="mono-label" color="var(--synced-muted)" fontSize="9px">
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </Text>
                    <Text color="var(--synced-muted)" fontSize="sm" lineHeight="relaxed" flex="1">{post.description}</Text>
                  </VStack>
                </Box>
              </NextLink>
            </ChakraLink>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

export default Blog;
