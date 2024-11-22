import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import prisma from '@/lib/db';

export const IssueList = async () => {
  const issues = await prisma.issue.findMany();

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
              <div className='block md:hidden'>{issue.status}</div>
            </TableHead>
            <TableHead className='hidden md:table-cell'>
              {issue.status}
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
