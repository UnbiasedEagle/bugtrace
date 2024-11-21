import { Button } from '@/components/ui/button';
import Link from 'next/link';

const IssuesPage = () => {
  return (
    <div>
      <Button variant='default'>
        <Link href='/issues/new'>New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
