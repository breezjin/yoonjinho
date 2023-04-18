import dayjs from 'dayjs';
import Link from 'next/link';
import { NotionToMarkdown } from 'notion-to-md';
import ReactMarkdown from 'react-markdown';

import clientGetPageProperties from '@/app/api/notion/clientGetPageProperties';
import getPage from '@/app/api/notion/getPage';
import { Container } from '@/components/Container';
import { PostLayout } from '@/components/PostLayout';
import { Prose } from '@/components/Prose';
import { formatDate } from '@/lib/formatDate';
import notion from '@/sdk/notion';
import { PostLayoutProps } from '@/types/contentType';
import { IconProps } from '@/types/uiTypes';

const n2m = new NotionToMarkdown({ notionClient: notion });

function ArrowLeftIcon(props: IconProps) {
  return (
    <svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
      <path
        d='M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default async function Post({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const mdblocks = await n2m.pageToMarkdown(params.id);
  const mdString = n2m.toMarkdownString(mdblocks);
  // const post = await getPage(params.id);
  const post: any = await clientGetPageProperties(params.id);
  // console.log('post >>>', post);
  console.log('mdblocks >>>', mdblocks);
  // console.log('mdString >>>', mdString);

  return (
    <>
      <Container className='mt-16 lg:mt-32'>
        <div className='xl:relative'>
          <div className='mx-auto max-w-2xl'>
            <Link href={'/blog'}>
              <button
                type='button'
                aria-label='Go back to articles'
                className='group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0'
              >
                <ArrowLeftIcon className='h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400' />
              </button>
            </Link>
            <article>
              <header className='flex flex-col'>
                <h1 className='mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                  {post?.properties?.Title.title[0].plain_text}
                </h1>
                <time
                  dateTime={post?.created_time}
                  className='order-first flex items-center text-base text-zinc-400 dark:text-zinc-500'
                >
                  <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                  <span className='ml-3'>{dayjs(post?.created_time).format('YYYY-MM-DD')}</span>
                </time>
              </header>
              <Prose className='mt-8'>
                <ReactMarkdown>{mdString}</ReactMarkdown>
              </Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
}
