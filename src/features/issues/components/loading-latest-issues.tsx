import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

export const LoadingLatestIssues = () => {
  return (
    <div>
      <Skeleton className='w-44 h-10 mb-2' />
      <Card>
        <Table>
          <TableBody>
            {Array.from({ length: 5 }, (_, idx) => idx).map((idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <Skeleton className='h-16' />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
