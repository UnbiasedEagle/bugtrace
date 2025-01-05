'use client';

import { cn } from '@/lib/utils';
import { useAuth, useClerk } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';
import { Skeleton } from '../ui/skeleton';
import { LogOut } from 'lucide-react';
import { Button } from '../ui/button';

const links = [
  { href: '/', label: 'Dashboard' },
  { href: '/issues/list', label: 'Issues' },
];

export const Navbar = () => {
  const { isLoaded } = useAuth();
  const pathName = usePathname();

  return (
    <nav className='border-b px-4 mb-5 h-14 items-center'>
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
          {isLoaded && <SignOutBtn />}
        </div>
      </div>
    </nav>
  );
};

export const SignOutBtn = () => {
  const router = useRouter();
  const { signOut } = useClerk();
  return (
    <Button
      onClick={() => {
        signOut();
        router.push('/');
      }}
      asChild
      variant='ghost'
      className='w-full cursor-pointer justify-start text-muted-foreground hover:text-foreground'
    >
      <div className='flex items-center gap-3'>
        <LogOut size={16} />
        Sign out
      </div>
    </Button>
  );
};
