'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Status } from '@prisma/client';
import { toast } from 'sonner';
import { updateIssueStatusAction } from '../actions';

interface Props {
  issueId: number;
  status: Status;
}

const statuses: {
  label: string;
  value: Status;
}[] = [
  {
    label: 'Open',
    value: 'OPEN',
  },
  {
    label: 'In Progress',
    value: 'IN_PROGRESS',
  },
  {
    label: 'Closed',
    value: 'CLOSED',
  },
];

export const StatusSelect = ({ issueId, status }: Props) => {
  const handleStatusChange = async (status: Status) => {
    try {
      const response = await updateIssueStatusAction(issueId, status);
      if (response.success) {
        toast.success(response.message);
      } else if (response.error) {
        toast.error(response.error);
      }
    } catch {
      toast.error('An error occurred while updating the status');
    }
  };

  return (
    <Select onValueChange={handleStatusChange} defaultValue={status}>
      <SelectTrigger>
        <SelectValue placeholder='Select status...' />
      </SelectTrigger>
      <SelectContent>
        {statuses.map((status) => (
          <SelectItem key={status.value} value={status.value}>
            {status.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
