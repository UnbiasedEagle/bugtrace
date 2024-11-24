import { IssueSummary } from '@/features/issues/components/issue-summary';
import { LatestIssues } from '@/features/issues/components/latest-issues';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-8'>
      <IssueSummary />
      <LatestIssues />
    </div>
  );
};

export default HomePage;
