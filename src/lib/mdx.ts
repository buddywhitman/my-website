import fs from "fs";
import path from "path";
import matter from "gray-matter";

import type { PostFrontmatter } from "../types/blog";

const BLOG_PATH = path.join(process.cwd(), "content/blog");

export const getSlugs = (): string[] => {
  if (!fs.existsSync(BLOG_PATH)) {
    return [];
  }
  return fs.readdirSync(BLOG_PATH).filter((file) => /\.mdx?$/.test(file));
};

export const getPostBySlug = (slug: string) => {
  const postPath = path.join(BLOG_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath, "utf8");
  const { content, data } = matter(source);

  return {
    content,
    frontmatter: data as PostFrontmatter,
  };
};

export const getAllPosts = () => {
  const posts = getSlugs().map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, "");
    const { frontmatter } = getPostBySlug(slug);

    return {
      slug,
      ...frontmatter,
    };
  });

  return posts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
};
