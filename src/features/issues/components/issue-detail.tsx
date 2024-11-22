import { IssueBadge } from '@/components/issue-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import prisma from '@/lib/db';
import { delay } from '@/lib/utils';
import { EditIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface Props {
  issueId: string;
}

export const IssueDetail = async ({ issueId }: Props) => {
  if (Number.isNaN(+issueId)) {
    notFound();
  }

  await delay(1000);

  const issue = await prisma.issue.findUnique({
    where: {
      id: +issueId,
    },
  });

  if (!issue) {
    notFound();
  }

  return (
    <div className='grid gap-5 grid-cols-1 sm:grid-cols-2'>
      <div>
        <h1 className='text-2xl font-bold'>{issue.title}</h1>
        <div className='flex items-center space-x-3 my-2'>
          <IssueBadge status={issue.status} />
          <p>{issue.createdAt.toDateString()}</p>
        </div>
        <Card className='mt-4'>
          <CardContent className='p-4 prose'>
            <ReactMarkdown>{issue.description}</ReactMarkdown>
          </CardContent>
        </Card>
      </div>
      <div>
        <Button asChild>
          <Link href={`/issues/${issue.id}/edit`}>
            <EditIcon /> Edit Issue
          </Link>
        </Button>
      </div>
    </div>
  );
};
