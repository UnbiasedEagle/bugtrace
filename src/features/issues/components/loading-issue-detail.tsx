import { Skeleton } from '@/components/ui/skeleton';

export const LoadingIssueDetail = () => {
  return (
    <div className='grid gap-5 grid-cols-1 sm:grid-cols-2'>
      <div>
        <Skeleton className='h-10 max-w-2xl' />
        <div className='flex items-center space-x-3 my-2'>
          <Skeleton className='px-2.5 py-0.5 h-5 w-16 rounded-full' />
          <Skeleton className='h-8 w-32' />
        </div>
        <Skeleton className='h-80' />
      </div>
      <div>
        <Skeleton className='h-10 w-[120px]' />
      </div>
    </div>
  );
};
