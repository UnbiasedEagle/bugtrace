import { IssueBadge } from '@/components/issue-badge';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import prisma from '@/lib/db';
import Link from 'next/link';

export const IssueListTable = async () => {
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
              <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
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
