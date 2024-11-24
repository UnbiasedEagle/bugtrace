import { Navbar } from '@/components/layout/navbar';
import { PropsWithChildren } from 'react';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto py-5 px-4'>{children}</div>
    </>
  );
};

export default DashboardLayout;
