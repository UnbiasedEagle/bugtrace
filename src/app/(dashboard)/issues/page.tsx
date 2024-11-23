import { Button } from '@/components/ui/button';
import { IssueListTable } from '@/features/issues/components/issue-list-table';
import { LoadingIssueListTable } from '@/features/issues/components/loading-issue-list-table';
import Link from 'next/link';
import { Suspense } from 'react';

const IssuesPage = () => {
  return (
    <div>
      <div className='mb-5'>
        <Button variant='default'>
          <Link href='/issues/new'>New Issue</Link>
        </Button>
      </div>
      <Suspense fallback={<LoadingIssueListTable />}>
        <IssueListTable />
      </Suspense>
    </div>
  );
};

export default IssuesPage;
