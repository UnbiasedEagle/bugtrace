import { IssueDetail } from '@/features/issues/components/issue-detail';
import { LoadingIssueDetail } from '@/features/issues/components/loading-issue-detail';
import { getIssue } from '@/features/issues/db';
import { Metadata } from 'next';
import { Suspense } from 'react';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).id;

  const issue = await getIssue(+id);

  return {
    title: issue.title,
    description: `Details of issue: ${issue.id}`,
  };
};

const IssueDetailPage = async ({ params }: Props) => {
  const id = (await params).id;
  return (
    <Suspense fallback={<LoadingIssueDetail />}>
      <IssueDetail issueId={id} />
    </Suspense>
  );
};

export default IssueDetailPage;
