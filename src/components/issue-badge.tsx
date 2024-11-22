import { Status } from '@prisma/client';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

interface Props {
  status: Status;
}

const statusMap: Record<Status, { label: string; color: string }> = {
  OPEN: {
    label: 'Open',
    color: 'bg-red-500',
  },
  IN_PROGRESS: {
    label: 'In Progress',
    color: 'bg-violet-500',
  },
  CLOSED: {
    label: 'Closed',
    color: 'bg-green-500',
  },
};

export const IssueBadge = ({ status }: Props) => {
  const { label, color } = statusMap[status];

  return <Badge className={cn(`hover:${color}`, color)}>{label}</Badge>;
};
