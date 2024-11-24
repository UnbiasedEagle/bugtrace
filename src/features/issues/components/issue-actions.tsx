import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IssueStatusFilter } from './issue-status-filter';

export const IssueActions = () => {
  return (
    <div className='mb-5 flex items-center justify-between'>
      <IssueStatusFilter />
      <Button variant='default'>
        <Link href='/issues/new'>New Issue</Link>
      </Button>
    </div>
  );
};
