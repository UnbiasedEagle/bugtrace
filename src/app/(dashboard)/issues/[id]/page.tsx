import { IssueDetail } from '@/features/issues/components/issue-detail';
import { getIssue } from '@/features/issues/db';
import { Metadata } from 'next';

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
  return <IssueDetail issueId={id} />;
};

export default IssueDetailPage;
