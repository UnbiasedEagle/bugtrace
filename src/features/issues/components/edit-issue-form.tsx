'use client';

import { Issue } from '@prisma/client';
import dynamic from 'next/dynamic';
import { LoadingIssueForm } from './loading-issue-form';

const IssueForm = dynamic(
  () => import('@/features/issues/components/issue-form'),
  {
    ssr: false,
    loading: () => <LoadingIssueForm />,
  }
);

interface Props {
  issue: Issue;
}

export const EditIssueForm = ({ issue }: Props) => {
  return <IssueForm issue={issue} />;
};
