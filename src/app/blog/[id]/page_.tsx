import { NotionToMarkdown } from 'notion-to-md';
import ReactMarkdown from 'react-markdown';

import notion from '@/sdk/notion';

const n2m = new NotionToMarkdown({ notionClient: notion });

export default async function Post({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const mdblocks = await n2m.pageToMarkdown(params.id);
  const mdString = n2m.toMarkdownString(mdblocks);
  // const postProperties = await clientGetPageProperties(params.id);
  // console.log('post >>>', postProperties);
  console.log('mdblocks >>>', mdblocks);
  console.log('mdString >>>', mdString);

  return <ReactMarkdown className='prose dark:prose-invert'>{mdString}</ReactMarkdown>;
}
