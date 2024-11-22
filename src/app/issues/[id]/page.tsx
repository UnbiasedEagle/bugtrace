import { IssueDetail } from '@/features/issues/components/issue-detail';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const IssueDetailPage = async ({ params }: Props) => {
  const id = (await params).id;
  return <IssueDetail issueId={id} />;
};

export default IssueDetailPage;
