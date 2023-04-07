import '@/styles/globals.css';

import Header from '@/components/Header';

export const metadata = {
  title: 'Yoonjinho',
  description: 'NEXT.js와 Notion 기반의 블로그 사이트 입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
