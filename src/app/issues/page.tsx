import { Button } from '@/components/ui/button';
import { IssueList } from '@/features/issues/components/issue-list';
import Link from 'next/link';

const IssuesPage = () => {
  return (
    <div>
      <div className='mb-5'>
        <Button variant='default'>
          <Link href='/issues/new'>New Issue</Link>
        </Button>
      </div>
      <IssueList />
    </div>
  );
};

export default IssuesPage;
