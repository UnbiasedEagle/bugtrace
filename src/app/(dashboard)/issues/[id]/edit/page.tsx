import { EditIssueForm } from '@/features/issues/components/edit-issue-form';
import { getIssue } from '@/features/issues/db';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const EditIssuePage = async ({ params }: Props) => {
  const id = (await params).id;

  const issue = await getIssue(+id);

  if (!issue) {
    notFound();
  }

  return <EditIssueForm issue={issue} />;
};

export default EditIssuePage;
