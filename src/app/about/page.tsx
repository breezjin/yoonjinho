import clsx from 'clsx';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/Container';
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons';
import portraitImage from '@/images/portrait.jpg';
import { IconProps, SocialLinkProps } from '@/types/uiTypes';

function SocialLink({ className, href, children, icon: Icon }: React.PropsWithChildren<SocialLinkProps>) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href ?? '#'}
        className='group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
      >
        <Icon className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500' />
        <span className='ml-4'>{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: IconProps) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        fillRule='evenodd'
        d='M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z'
      />
    </svg>
  );
}

export const metadata = {
  title: 'About - Yoonjinho',
  description: '저는 이런 사람 입니다. 🤗',
};

export default function About() {
  return (
    <>
      <Container className='mt-16 sm:mt-32'>
        <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
          <div className='lg:pl-20'>
            <div className='max-w-xs px-2.5 lg:max-w-none'>
              <Image
                src={portraitImage}
                alt=''
                sizes='(min-width: 1024px) 32rem, 20rem'
                className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'
              />
            </div>
          </div>
          <div className='lg:order-first lg:row-span-2'>
            <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
              안녕하세요 🤗 반가워요.
            </h1>
            <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
              <p>
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 백두산 삼천리 화려강산 대한사람
                대한으로 길이 보전하세.
              </p>
              <p>
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 백두산 삼천리 화려강산 대한사람
                대한으로 길이 보전하세.
              </p>
              <p>
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 백두산 삼천리 화려강산 대한사람
                대한으로 길이 보전하세.
              </p>
              <p>
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 백두산 삼천리 화려강산 대한사람
                대한으로 길이 보전하세.
              </p>
            </div>
          </div>
          <div className='lg:pl-20'>
            <ul role='list'>
              <SocialLink
                href='mailto:breezjin@gmail.com'
                icon={MailIcon}
                className='mb-8 border-b border-zinc-100 pb-8 dark:border-zinc-700/40'
              >
                breezjin@gmail.com
              </SocialLink>
              <SocialLink href='#' icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href='#' icon={InstagramIcon} className='mt-4'>
                Follow on Instagram
              </SocialLink>
              <SocialLink href='#' icon={GitHubIcon} className='mt-4'>
                Follow on GitHub
              </SocialLink>
              <SocialLink href='#' icon={LinkedInIcon} className='mt-4'>
                Follow on LinkedIn
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
