'use client';

import { LoadingIssueForm } from '@/features/issues/components/loading-issue-form';
import dynamic from 'next/dynamic';

const NewIssueForm = dynamic(
  () => import('@/features/issues/components/issue-form'),
  {
    ssr: false,
    loading: () => <LoadingIssueForm />,
  }
);

const NewIssuePage = () => {
  return <NewIssueForm />;
};

export default NewIssuePage;
