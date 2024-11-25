import { Card, CardContent } from '@/components/ui/card';
import { Status } from '@prisma/client';
import Link from 'next/link';
import { getIssueCountByStatus } from '../db';

export const IssueSummary = async () => {
  const issuesCountByStatus = await getIssueCountByStatus();

  const issueStatuses: { label: string; value: number; status: Status }[] = [
    {
      label: 'Open Issues',
      value: issuesCountByStatus.OPEN,
      status: 'OPEN',
    },
    {
      label: 'In Progress Issues',
      value: issuesCountByStatus.IN_PROGRESS,
      status: 'IN_PROGRESS',
    },
    {
      label: 'Closed Issues',
      value: issuesCountByStatus.CLOSED,
      status: 'CLOSED',
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {issueStatuses.map((issueStatus) => (
        <Card key={issueStatus.label}>
          <CardContent className='p-4'>
            <Link href={`/issues/list?status=${issueStatus.status}`}>
              <p className='text-sm mb-2 font-medium text-neutral-500'>
                {issueStatus.label}
              </p>
              <p className='text-2xl font-bold'>{issueStatus.value}</p>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
