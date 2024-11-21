'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import 'easymde/dist/easymde.min.css';
import { useActionState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import SimpleMDE from 'react-simplemde-editor';
import { createIssue } from '../actions/create-issue';
import { startTransition } from 'react';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}

export const NewIssueForm = () => {
  const router = useRouter();
  const [state, action, isPending] = useActionState(createIssue, undefined);

  const { register, control, handleSubmit } = useForm<IssueForm>();

  const onSubmit = (data: IssueForm) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description ?? '');

    startTransition(() => {
      action(formData);
    });
  };

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    } else if (state?.success) {
      router.push('/issues');
      toast.success('Issue created successfully');
    }
  }, [state?.error, state?.success, router]);

  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder='Title' {...register('title')} />
      <Controller
        name='description'
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder='Description' {...field} />
        )}
      />
      <Button disabled={isPending}>
        {isPending && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
        Submit New Issue
      </Button>
    </form>
  );
};
