import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const menus = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/letter', label: 'Letter' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  return (
    <nav className={clsx('b-8 flex h-24 w-screen flex-col')}>
      {menus.map(menu => (
        <Link key={menu.href} href={menu.href}>
          {menu.label}
        </Link>
      ))}
      <Link href={'/'}>Home</Link>
    </nav>
  );
}
