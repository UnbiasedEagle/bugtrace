import { PaginationWithLinks } from '@/components/ui/pagination-with-links';
import { IssueActions } from '@/features/issues/components/issue-actions';
import { IssueListTable } from '@/features/issues/components/issue-list-table';
import { getIssues } from '@/features/issues/db';
import { PAGE_SIZE } from '@/lib/constants';
import { Issue, Status } from '@prisma/client';
import { Metadata } from 'next';

interface Props {
  searchParams: Promise<{
    status: Status;
    orderBy: keyof Issue;
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: 'TrackNest | Issues',
  description: 'List of issues',
};

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);

  const params = await searchParams;
  const status = statuses.includes(params.status) ? params.status : undefined;

  const validOrderByColumns: (keyof Issue)[] = ['title', 'status', 'createdAt'];

  const orderBy = validOrderByColumns.includes(params.orderBy)
    ? params.orderBy
    : 'createdAt';

  let page = params.page ? Number(params.page) : 1;

  if (isNaN(page) || page < 1) {
    page = 1;
  }

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
        <PaginationWithLinks
          page={+page}
          pageSize={PAGE_SIZE}
          totalCount={count}
        />
      </div>
    </div>
  );
};

export default IssuesPage;
