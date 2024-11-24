import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const LoadingIssueSummary = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {Array.from({ length: 3 }, (_, idx) => idx).map((val) => (
        <Card key={val}>
          <CardContent className='p-4'>
            <Skeleton className='h-4 w-1/2 mb-4' />
            <Skeleton className='h-8 w-8' />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
