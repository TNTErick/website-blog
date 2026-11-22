export interface PostFrontmatter {
  title: string;
  date: string;
  slug: string;
  summary: string;
  tags?: string[];
  draft?: boolean;
}

export interface Post extends PostFrontmatter {
  content: string;
}
