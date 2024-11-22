import { IssueDetail } from '@/features/issues/components/issue-detail';

interface Props {
  params: {
    id: string;
  };
}

const IssueDetailPage = async ({ params }: Props) => {
  return <IssueDetail issueId={params.id} />;
};

export default IssueDetailPage;
