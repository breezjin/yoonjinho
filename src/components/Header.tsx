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
    <nav className={clsx('flex h-12 w-screen items-center gap-4 bg-black p-4 text-white')}>
      {menus.map(menu => (
        <Link key={menu.href} href={menu.href}>
          {menu.label}
        </Link>
      ))}
    </nav>
  );
}
