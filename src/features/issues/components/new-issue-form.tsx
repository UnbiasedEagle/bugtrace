'use client';

import { Button } from '@/components/ui/button';
import { ErrorMessage } from '@/components/error-message';
import { Input } from '@/components/ui/input';
import { LoadingButton } from '@/components/loading-button';
import { zodResolver } from '@hookform/resolvers/zod';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';
import { startTransition, useActionState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import SimpleMDE from 'react-simplemde-editor';
import { toast } from 'sonner';
import { z } from 'zod';
import { createIssue } from '../actions/create-issue';
import { CreateIssueSchema } from '../schemas/CreateIssue';

type IssueForm = z.infer<typeof CreateIssueSchema>;

export const NewIssueForm = () => {
  const router = useRouter();
  const [state, action, isPending] = useActionState(createIssue, undefined);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(CreateIssueSchema),
  });

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
      {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
      <Controller
        name='description'
        control={control}
        render={({ field }) => (
          <>
            <SimpleMDE placeholder='Description' {...field} />
            {errors.description && (
              <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}
          </>
        )}
      />
      {isPending ? (
        <LoadingButton />
      ) : (
        <Button type='submit'>Submit New Issue</Button>
      )}
    </form>
  );
};
