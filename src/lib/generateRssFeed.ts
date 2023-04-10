import { Feed } from 'feed';
import { mkdir, writeFile } from 'fs/promises';
import { useRouter } from 'next/navigation';
import { withRouter } from 'next/router';
import ReactDOMServer from 'react-dom/server';

import { Article, getAllArticles } from '@/lib/getAllArticles';
import { ArticleLayoutProps } from '@/types/contentType';

export async function generateRssFeed(): Promise<void> {
  const articles: Article[] = await getAllArticles();
  // const siteUrl: string = process.env.NEXT_PUBLIC_SITE_URL;
  const siteUrl = 'https://yoonjinho.com';
  const author = {
    name: 'Yoon Jinho',
    email: 'breezjin@gmail.com',
  };

  const feed = new Feed({
    id: siteUrl,
    title: author.name,
    description: '윤진호의 블로그 입니다.',
    author,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  });

  for (let article of articles) {
    const url = `${siteUrl}/articles/${article.slug}`;
    const html = ReactDOMServer.renderToStaticMarkup(<article.component isRssFeed />);

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    });
  }

  await mkdir('./public/rss', { recursive: true });
  await Promise.all([
    writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
    writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
  ]);
}
