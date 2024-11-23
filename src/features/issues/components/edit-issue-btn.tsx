import { Button } from '@/components/ui/button';
import { EditIcon } from 'lucide-react';
import Link from 'next/link';

interface Props {
  issueId: number;
}

export const EditIssueBtn = ({ issueId }: Props) => {
  return (
    <Button className='w-full' asChild>
      <Link href={`/issues/${issueId}/edit`}>
        <EditIcon /> Edit Issue
      </Link>
    </Button>
  );
};
