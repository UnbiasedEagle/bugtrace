import prisma from '@/lib/db';

export const getIssue = async (issueId: number) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: issueId,
    },
  });

  return issue;
};

export const getIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return issues;
};

export const createIssue = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const issue = await prisma.issue.create({
    data: {
      title,
      description,
    },
  });

  return issue;
};

export const updateIssue = async ({
  issueId,
  title,
  description,
}: {
  issueId: number;
  title: string;
  description: string;
}) => {
  const issue = await prisma.issue.update({
    where: {
      id: issueId,
    },
    data: {
      title,
      description,
    },
  });

  return issue;
};

export const deleteIssue = async (issueId: number) => {
  try {
    await prisma.issue.delete({
      where: {
        id: issueId,
      },
    });
  } catch {
    throw new Error('Failed to delete issue');
  }
};
