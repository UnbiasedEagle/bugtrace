'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { assignUserToIssueAction } from '../actions';
import { toast } from 'sonner';

interface Props {
  users: {
    id: string;
    emailAddresses: string;
  }[];
  issue: {
    id: number;
    assigneeId: string | null;
  };
}

export const AssigneeSelect = ({ users, issue }: Props) => {
  const onValueChange = async (userId: string) => {
    try {
      const result = await assignUserToIssueAction(
        issue.id,
        userId === 'unassigned' ? null : userId
      );
      if (result.success) {
        toast.success(result.message);
      } else if (result.error) {
        toast.error(result.error);
      }
    } catch {
      toast.error('An error occurred while assigning the user');
    }
  };

  return (
    <Select
      defaultValue={issue.assigneeId ?? undefined}
      onValueChange={onValueChange}
    >
      <SelectTrigger>
        <SelectValue placeholder='Assign...' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          <SelectItem value='unassigned'>Unassigned</SelectItem>
          {users.map((user) => (
            <SelectItem key={user.id} value={user.id}>
              {user.emailAddresses}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
