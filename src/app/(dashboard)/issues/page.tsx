import { PaginationWithLinks } from '@/components/ui/pagination-with-links';
import { IssueActions } from '@/features/issues/components/issue-actions';
import { IssueListTable } from '@/features/issues/components/issue-list-table';
import { getIssues } from '@/features/issues/db';
import { Issue, Status } from '@prisma/client';

interface Props {
  searchParams: Promise<{
    status: Status;
    orderBy: keyof Issue;
    page?: string;
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

  const page = params.page ?? '1';

  const { issues, count } = await getIssues({
    status,
    orderBy,
    page: +page,
  });

  return (
    <div>
      <IssueActions />
      <IssueListTable searchParams={params} issues={issues} />
      <div className='mt-5'>
        <PaginationWithLinks page={+page} pageSize={10} totalCount={count} />
      </div>
    </div>
  );
};

export default IssuesPage;
