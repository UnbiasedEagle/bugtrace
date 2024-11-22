import { Skeleton } from '@/components/ui/skeleton';

export const LoadingNewIssue = () => {
  return (
    <div className='space-y-3 max-w-xl'>
      <Skeleton className='h-8' />
      <Skeleton className='h-80' />
    </div>
  );
};
