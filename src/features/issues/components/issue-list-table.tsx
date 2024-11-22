import { IssueBadge } from '@/components/issue-badge';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import prisma from '@/lib/db';
import { delay } from '@/lib/utils';

export const IssueListTable = async () => {
  await delay(5000);

  const issues = await prisma.issue.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <Table className='border'>
      <TableHeader>
        <TableRow className='bg-gray-200 hover:bg-gray-200'>
          <TableHead className='font-bold text-black'>Issue</TableHead>
          <TableHead className='font-bold text-black hidden md:table-cell'>
            Status
          </TableHead>
          <TableHead className='font-bold text-black hidden md:table-cell'>
            Created
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {issues.map((issue) => (
          <TableRow key={issue.id}>
            <TableHead>
              {issue.title}
              <div className='block md:hidden'>
                <IssueBadge status={issue.status} />
              </div>
            </TableHead>
            <TableHead className='hidden md:table-cell'>
              <IssueBadge status={issue.status} />
            </TableHead>
            <TableHead className='hidden md:table-cell'>
              {issue.createdAt.toDateString()}
            </TableHead>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};