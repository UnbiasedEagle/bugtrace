import { EditIssueForm } from '@/features/issues/components/edit-issue-form';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const EditIssuePage = async ({ params }: Props) => {
  const id = (await params).id;
  return <EditIssueForm issueId={id} />;
};

export default EditIssuePage;
