import { ErrorMessage } from '@/components/error-message';
import { LoadingButton } from '@/components/loading-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Issue } from '@prisma/client';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';
import { startTransition, useActionState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import SimpleMDE from 'react-simplemde-editor';
import { toast } from 'sonner';
import { z } from 'zod';
import { createIssueAction, updateIssueAction } from '../actions';
import { IssueSchema } from '../schemas';

type IssueFormData = z.infer<typeof IssueSchema>;

interface Props {
  issue?: Issue;
}

const IssueForm = ({ issue }: Props) => {
  const router = useRouter();
  const [state, action, isPending] = useActionState(
    issue ? updateIssueAction.bind(null, issue.id) : createIssueAction,
    undefined
  );

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(IssueSchema),
    defaultValues: {
      title: issue?.title ?? '',
      description: issue?.description ?? '',
    },
  });

  const onSubmit = (data: IssueFormData) => {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);

    startTransition(() => {
      action(formData);
    });
  };

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    } else if (state?.success) {
      router.push('/issues');
      toast.success(state.message);
    }
  }, [state?.error, state?.success, router, state?.message]);

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
        <Button type='submit'>{issue ? 'Update Issue' : 'Create Issue'}</Button>
      )}
    </form>
  );
};

export default IssueForm;
