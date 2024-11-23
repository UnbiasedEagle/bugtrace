import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { TrashIcon } from 'lucide-react';

interface Props {
  issueId: number;
}

export const DeleteIssueDialog = ({ issueId }: Props) => {
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
          <form>
            <Button variant='destructive'>Delete</Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
