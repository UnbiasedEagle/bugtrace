import { Navbar } from '@/components/layout/navbar';
import { PropsWithChildren } from 'react';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto p-5'>{children}</div>
    </>
  );
};

export default DashboardLayout;
