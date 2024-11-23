import { PropsWithChildren } from 'react';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      {children}
    </div>
  );
};

export default AuthLayout;