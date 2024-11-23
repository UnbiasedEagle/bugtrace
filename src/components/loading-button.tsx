import { Loader2 } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost';
}

export const LoadingButton = ({ variant = 'default' }: Props) => {
  return (
    <Button variant={variant} disabled>
      <Loader2 className='mr-2 h-4 w-4 animate-spin' />
      Loading...
    </Button>
  );
};
