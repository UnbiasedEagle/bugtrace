import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Status } from '@prisma/client';

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
  return (
    <Select>
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
