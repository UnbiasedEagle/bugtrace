import { IssueActions } from '@/features/issues/components/issue-actions';
import { IssueListTable } from '@/features/issues/components/issue-list-table';
import { LoadingIssueListTable } from '@/features/issues/components/loading-issue-list-table';
import { Suspense } from 'react';

const IssuesPage = () => {
  return (
    <div>
      <IssueActions />
      <Suspense fallback={<LoadingIssueListTable />}>
        <IssueListTable />
      </Suspense>
    </div>
  );
};

export default IssuesPage;
