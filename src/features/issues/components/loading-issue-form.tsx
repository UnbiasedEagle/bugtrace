import { Skeleton } from '@/components/ui/skeleton';

export const LoadingIssueForm = () => {
  return (
    <div className='space-y-3 max-w-xl'>
      <Skeleton className='h-8' />
      <Skeleton className='h-[400px]' />
      <Skeleton className='h-10 w-28' />
    </div>
  );
};
