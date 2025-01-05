import { Navbar } from '@/components/layout/navbar';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

const DashboardLayout = async ({ children }: PropsWithChildren) => {
  const user = await currentUser();

  if (!user) {
    return redirect('/sign-in');
  }

  return (
    <>
      <Navbar />
      <div className='container mx-auto py-5 px-4'>{children}</div>
    </>
  );
};

export default DashboardLayout;
