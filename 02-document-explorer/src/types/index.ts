export interface CodeSnippet {
  title: string;
  language: string;
  code: string;
}

export interface TableOfContentItem {
  id: string;
  title: string;
}

export interface DocArticle {
  slug: string[]; // e.g. ["routing", "catch-all-routes"]
  title: string;
  section: string;
  sectionSlug: string;
  summary: string;
  overview: string;
  content: string[];
  codeSnippets?: CodeSnippet[];
  tableOfContents: TableOfContentItem[];
  previous?: { title: string; slug: string[] };
  next?: { title: string; slug: string[] };
}

export interface DocNavSection {
  title: string;
  slug: string;
  items: {
    title: string;
    slug: string[];
    badge?: string;
  }[];
}
