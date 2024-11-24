import { Skeleton } from '@/components/ui/skeleton';
import { LoadingIssueListTable } from '@/features/issues/components/loading-issue-list-table';

const LoadingIssues = () => {
  return (
    <div>
      <div className='mb-5 flex items-center justify-between'>
        <Skeleton className='h-10 w-44' />
        <Skeleton className='h-10 w-24' />
      </div>
      <LoadingIssueListTable />
      <div className='mt-5 flex justify-end'>
        <Skeleton className='h-10 w-96' />
      </div>
    </div>
  );
};

export default LoadingIssues;
