import { Toaster } from '@/components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BugTrace',
  description:
    'BugTrace is a simple and intuitive issue-tracking web app that allows you to create, manage, and resolve issues efficiently. Assign tasks to users, update statuses, and stay organized with seamless CRUD operations. Simplify your workflow with BugTrace.',
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
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
