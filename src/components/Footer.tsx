import Link from 'next/link';

import { InnerContainer, OuterContainer } from '@/components/Container';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className='transition hover:text-teal-500 dark:hover:text-teal-400'>
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className='mt-32'>
      <OuterContainer>
        <div className='border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40'>
          <InnerContainer>
            <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
              <div className='flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200'>
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/blog'>Blog</NavLink>
                <NavLink href='/docs'>Docs</NavLink>
                <NavLink href='/about'>About</NavLink>
              </div>
              <p className='text-sm text-zinc-400 dark:text-zinc-500'>
                &copy; {new Date().getFullYear()} yoonjinho. All rights reserved.
              </p>
            </div>
          </InnerContainer>
        </div>
      </OuterContainer>
    </footer>
  );
}
