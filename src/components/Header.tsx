import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className={clsx('b-8 flex h-24 w-screen flex-col')}>
      <Link href={'/'}>Home</Link>
    </nav>
  );
}
