import { IssueBadge } from '@/components/issue-badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { Issue, Status } from '@prisma/client';
import { ArrowUpIcon } from 'lucide-react';
import Link from 'next/link';

interface Props {
  issues: Issue[];
  searchParams: {
    status: Status;
    orderBy: keyof Issue;
  };
}

export const IssueListTable = ({ issues, searchParams }: Props) => {
  const columns: { label: string; value: keyof Issue; className?: string }[] = [
    {
      label: 'Issue',
      value: 'title',
    },
    {
      label: 'Status',
      value: 'status',
      className: 'hidden md:table-cell',
    },
    {
      label: 'Created',
      value: 'createdAt',
      className: 'hidden md:table-cell',
    },
  ];

  return (
    <Table className='border'>
      <TableHeader>
        <TableRow className='bg-gray-200 hover:bg-gray-200'>
          {columns.map((column) => (
            <TableHead
              key={column.value}
              className={cn('font-bold text-black', column.className)}
            >
              <div className='flex items-center text-black space-x-0.5'>
                <Link
                  href={{
                    query: {
                      ...searchParams,
                      orderBy: column.value,
                    },
                  }}
                >
                  {column.label}
                </Link>
                {column.value === searchParams.orderBy && (
                  <ArrowUpIcon size={20} />
                )}
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {issues.map((issue) => (
          <TableRow key={issue.id}>
            <TableCell>
              <Button variant='link' asChild>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              </Button>
              <div className='block mt-2 md:hidden'>
                <IssueBadge status={issue.status} />
              </div>
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <IssueBadge status={issue.status} />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              {issue.createdAt.toDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
