// 'use client';

import '@/styles/tailwind.css';
import 'focus-visible';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export const metadata = {
  title: 'Yoonjinho',
  description: 'NEXT.js와 Notion 기반의 블로그 사이트 입니다.',
};

// function usePrevious(value) {
//   let ref = useRef();

//   useEffect(() => {
//     ref.current = value;
//   }, [value]);

//   return ref.current;
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <div className='fixed inset-0 flex justify-center sm:px-8'>
          <div className='flex w-full max-w-7xl lg:px-8'>
            <div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20' />
          </div>
        </div>
        <div className='relative'>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
