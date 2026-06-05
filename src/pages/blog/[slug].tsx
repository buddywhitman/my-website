import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Code,
  Divider,
  Link as ChakraLink,
} from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

import { getPostBySlug, getSlugs } from "lib/mdx";
import type { PostFrontmatter } from "types/blog";
import SchemaMarkup from "components/SchemaMarkup";
import Layout from "components/layout";

const components = {
  h1: (props: any) => <Heading as="h1" size="3xl" my={8} {...props} />,
  h2: (props: any) => <Heading as="h2" size="2xl" my={6} {...props} />,
  h3: (props: any) => <Heading as="h3" size="xl" my={4} {...props} />,
  p: (props: any) => <Text fontSize="lg" lineHeight="tall" my={4} {...props} />,
  ul: (props: any) => <Box as="ul" ml={8} my={4} {...props} />,
  ol: (props: any) => <Box as="ol" ml={8} my={4} {...props} />,
  li: (props: any) => <Box as="li" mb={2} {...props} />,
  a: (props: any) => <ChakraLink color="brand.500" {...props} />,
  code: (props: any) => (
    <Code colorPalette="brand" p={1} borderRadius="md" {...props} />
  ),
  pre: (props: any) => (
    <Box
      as="pre"
      p={6}
      bg="bg.subtle"
      borderRadius="xl"
      borderWidth="1px"
      borderColor="border.subtle"
      overflowX="auto"
      my={8}
      {...props}
    />
  ),
  hr: () => <Divider my={12} />,
};

interface PostPageProps {
  source: MDXRemoteSerializeResult;
  frontmatter: PostFrontmatter;
}

const PostPage: NextPage<PostPageProps> = ({ source, frontmatter }) => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    author: {
      "@type": "Person",
      name: "Pulkit Kumar",
    },
    keywords: frontmatter.tags.join(", "),
  };

  return (
    <Layout>
      <SchemaMarkup data={blogSchema} />
      <Box maxW="container.md" mx="auto" py={12} px={4}>
        <VStack align="start" gap={6} mb={12}>
          <HStack gap={2}>
            {frontmatter.tags.map((tag) => (
              <Badge
                key={tag}
                variant="surface"
                colorPalette="brand"
                borderRadius="full"
              >
                {tag}
              </Badge>
            ))}
          </HStack>
          <Heading as="h1" size="4xl" fontWeight="800" letterSpacing="tight">
            {frontmatter.title}
          </Heading>
          <Text color="fg.muted" fontSize="lg">
            {new Date(frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </VStack>

        <Box className="mdx-content">
          <MDXRemote {...source} components={components} />
        </Box>
      </Box>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug: slug.replace(/\.mdx?$/, "") },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, frontmatter } = getPostBySlug(params?.slug as string);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontmatter,
    },
  };
};

export default PostPage;
