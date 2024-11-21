import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const NewIssueForm = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <Input placeholder='title' />
      <Textarea placeholder='description' />
      <Button>Submit New Issue</Button>
    </div>
  );
};
