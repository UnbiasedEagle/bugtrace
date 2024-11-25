'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Status } from '@prisma/client';
import { useRouter, useSearchParams } from 'next/navigation';

const statuses: { label: string; value: Status }[] = [
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

export const IssueStatusFilter = () => {
  const params = useSearchParams();
  const router = useRouter();

  const handleStatusChange = (status: Status) => {
    const currentParams = new URLSearchParams(params);
    currentParams.set('status', status);
    currentParams.delete('page');
    router.push(`/issues/list?${currentParams.toString()}`);
  };

  const status =
    params.get('status') === 'all'
      ? 'all'
      : Object.values(Status).includes(params.get('status') as Status)
      ? (params.get('status') as Status)
      : '';

  return (
    <Select defaultValue={status} onValueChange={handleStatusChange}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Filter by status...' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='all'>All</SelectItem>
        {statuses.map((status) => (
          <SelectItem key={status.label} value={status.value}>
            {status.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
