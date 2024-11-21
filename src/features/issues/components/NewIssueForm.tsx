'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

export const NewIssueForm = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <Input placeholder='Title' />
      <SimpleMDE placeholder='Description' />
      <Button>Submit New Issue</Button>
    </div>
  );
};
