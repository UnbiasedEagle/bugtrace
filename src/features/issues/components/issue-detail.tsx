import { IssueBadge } from '@/components/issue-badge';
import { Card, CardContent } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getIssue } from '../db';
import { EditIssueBtn } from './edit-issue-btn';

interface Props {
  issueId: string;
}

export const IssueDetail = async ({ issueId }: Props) => {
  if (Number.isNaN(+issueId)) {
    notFound();
  }

  const issue = await getIssue(+issueId);

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
        <EditIssueBtn issueId={issue.id} />
      </div>
    </div>
  );
};
