import { IssueBadge } from '@/components/issue-badge';
import { Card, CardContent } from '@/components/ui/card';
import prisma from '@/lib/db';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface Props {
  issueId: string;
}

export const IssueDetail = async ({ issueId }: Props) => {
  if (Number.isNaN(+issueId)) {
    notFound();
  }

  const issue = await prisma.issue.findUnique({
    where: {
      id: +issueId,
    },
  });

  if (!issue) {
    notFound();
  }

  return (
    <div>
      <h1 className='text-2xl font-bold'>{issue.title}</h1>
      <div className='flex space-x-3 my-2'>
        <IssueBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <Card className='mt-4'>
        <CardContent className='p-4 prose'>
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </CardContent>
      </Card>
    </div>
  );
};
