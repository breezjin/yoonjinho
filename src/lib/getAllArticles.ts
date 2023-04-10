import glob from 'fast-glob';
import * as path from 'path';

export interface Article {
  slug: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  component: any;
}

async function importArticle(articleFilename: string): Promise<Article> {
  const { meta, default: component } = await import(`../pages/articles/${articleFilename}`);
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  } as Article;
}

export async function getAllArticles(): Promise<Article[]> {
  const articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  });

  const articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort((a, z) => new Date(z.date).getTime() - new Date(a.date).getTime());
}
