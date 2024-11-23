'use client';

import { LoadingButton } from '@/components/loading-button';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { TrashIcon } from 'lucide-react';
import { useActionState, useEffect } from 'react';
import { deleteIssueAction } from '../actions';
import { toast } from 'sonner';

interface Props {
  issueId: number;
}

export const DeleteIssueDialog = ({ issueId }: Props) => {
  const [state, deleteIssue, isPending] = useActionState(
    deleteIssueAction.bind(null, issueId),
    null
  );

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-full' variant='destructive'>
          <TrashIcon /> Delete Issue
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action is permanent and cannot be undone. Are you sure you want
            to delete this issue?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='secondary'>Cancel</Button>
          </DialogClose>
          <form action={deleteIssue}>
            {isPending ? (
              <LoadingButton variant='destructive' />
            ) : (
              <Button type='submit' variant='destructive'>
                Delete
              </Button>
            )}
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
