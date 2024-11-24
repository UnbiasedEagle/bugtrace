import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { getLatestIssues } from '../db';
import Link from 'next/link';
import { IssueBadge } from '@/components/issue-badge';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const LatestIssues = async () => {
  const latestIssues = await getLatestIssues();

  return (
    <>
      <h1 className='mb-4 font-bold text-2xl'>Latest Issues</h1>
      <Card>
        <Table>
          <TableBody>
            {latestIssues.map((issue) => (
              <TableRow key={issue.id}>
                <TableCell>
                  <div className='flex items-center justify-between'>
                    <div className='flex flex-col items-start'>
                      <Button className='p-0' variant='link' asChild>
                        <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                      </Button>
                      <IssueBadge status={issue.status} />
                    </div>
                    {issue.assignee && (
                      <Avatar>
                        <AvatarImage src={issue.assignee.imageUrl} />
                      </Avatar>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
};
