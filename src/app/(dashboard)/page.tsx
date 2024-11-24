import { IssueSummary } from '@/features/issues/components/issue-summary';
import { LatestIssues } from '@/features/issues/components/latest-issues';
import { LoadingIssueSummary } from '@/features/issues/components/loading-issue-summary';
import { LoadingLatestIssues } from '@/features/issues/components/loading-latest-issues';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Suspense fallback={<LoadingIssueSummary />}>
        <IssueSummary />
      </Suspense>
      <Suspense fallback={<LoadingLatestIssues />}>
        <LatestIssues />
      </Suspense>
    </div>
  );
};

export default HomePage;
