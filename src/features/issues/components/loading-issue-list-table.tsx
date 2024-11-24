import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const LoadingIssueListTable = async () => {
  const issues = Array.from({ length: 5 }, (_, idx) => idx);

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
          <TableRow key={issue}>
            <TableCell>
              <Skeleton className='h-4 w-52' />
              <div className='block mt-2 md:hidden'>
                <Skeleton className='px-2.5 py-0.5 h-5 w-16 rounded-full' />
              </div>
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='px-2.5 py-0.5 h-5 w-16 rounded-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4' />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
