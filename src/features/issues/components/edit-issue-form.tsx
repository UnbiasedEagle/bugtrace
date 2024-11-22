import { notFound } from 'next/navigation';
import { getIssue } from '../db';
import { IssueForm } from './issue-form';

interface Props {
  issueId: string;
}

export const EditIssueForm = async ({ issueId }: Props) => {
  const issue = await getIssue(+issueId);

  if (!issue) {
    notFound();
  }

  return <IssueForm issue={issue} />;
};
