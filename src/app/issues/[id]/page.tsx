import prisma from '@/lib/db';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

const IssueDetailPage = async ({ params }: Props) => {
  if (Number.isNaN(+params.id)) {
    notFound();
  }

  const issue = await prisma.issue.findUnique({
    where: {
      id: +params.id,
    },
  });

  if (!issue) {
    notFound();
  }

  return (
    <div>
      <h1>Issue Detail Page</h1>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
    </div>
  );
};

export default IssueDetailPage;
