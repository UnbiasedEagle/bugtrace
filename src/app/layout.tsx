import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Toaster } from '@/components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bug Trace',
  description:
    'Simplify project management with fast, efficient issue tracking and team collaboration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} antialiased`}>
          <Navbar />
          <main className='container mx-auto p-5'>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
