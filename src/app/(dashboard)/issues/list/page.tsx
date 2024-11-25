import { IssueActions } from '@/features/issues/components/issue-actions';
import { IssueListTable } from '@/features/issues/components/issue-list-table';
import { LoadingIssueListTable } from '@/features/issues/components/loading-issue-list-table';
import { Issue, Status } from '@prisma/client';
import { Metadata } from 'next';
import { Suspense } from 'react';

interface Props {
  searchParams: Promise<{
    status: Status;
    orderBy: keyof Issue;
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: 'BugTrace | Issues',
  description: 'List of issues',
};

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);

  const params = await searchParams;
  const status = statuses.includes(params.status) ? params.status : undefined;

  const validOrderByColumns: (keyof Issue)[] = ['title', 'status', 'createdAt'];

  const orderBy = validOrderByColumns.includes(params.orderBy)
    ? params.orderBy
    : undefined;

  let page = params.page ? Number(params.page) : 1;

  if (isNaN(page) || page < 1) {
    page = 1;
  }

  return (
    <div>
      <IssueActions />
      <Suspense fallback={<LoadingIssueListTable />}>
        <IssueListTable status={status} orderBy={orderBy} page={page} />
      </Suspense>
    </div>
  );
};

export default IssuesPage;
