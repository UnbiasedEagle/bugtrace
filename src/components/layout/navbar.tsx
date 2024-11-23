'use client';

import { cn } from '@/lib/utils';
import { useAuth, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';
import { Skeleton } from '../ui/skeleton';

const links = [
  { href: '/', label: 'Dashboard' },
  { href: '/issues', label: 'Issues' },
];

export const Navbar = () => {
  const { isLoaded } = useAuth();
  const pathName = usePathname();

  return (
    <nav className='border-b mb-5 h-14 items-center'>
      <div className='container mx-auto flex h-full items-center'>
        <Link className='mr-6' href='/'>
          <AiFillBug />
        </Link>
        <ul className='flex space-x-6'>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className={cn(
                  'text-zinc-500 hover:text-zinc-800 transition-colors',
                  pathName === link.href && 'text-zinc-900'
                )}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex items-center ml-auto'>
          {!isLoaded && <Skeleton className='h-8 w-8 rounded-full' />}
          {isLoaded && <UserButton />}
        </div>
      </div>
    </nav>
  );
};
