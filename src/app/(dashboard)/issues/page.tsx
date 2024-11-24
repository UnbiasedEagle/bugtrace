import { IssueActions } from '@/features/issues/components/issue-actions';
import { IssueListTable } from '@/features/issues/components/issue-list-table';
import { getIssues } from '@/features/issues/db';
import { Issue, Status } from '@prisma/client';

interface Props {
  searchParams: Promise<{
    status: Status;
    orderBy: keyof Issue;
  }>;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);

  const params = await searchParams;
  const status = statuses.includes(params.status) ? params.status : undefined;

  const validOrderByColumns: (keyof Issue)[] = ['title', 'status', 'createdAt'];

  const orderBy = validOrderByColumns.includes(params.orderBy)
    ? params.orderBy
    : 'createdAt';

  const issues = await getIssues({
    status,
    orderBy,
  });

  return (
    <div>
      <IssueActions />
      <IssueListTable searchParams={params} issues={issues} />
    </div>
  );
};

export default IssuesPage;
