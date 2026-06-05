export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}
