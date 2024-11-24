import prisma from '@/lib/db';
import { Issue, Status } from '@prisma/client';

export const getIssue = async (issueId: number) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: issueId,
    },
  });

  return issue;
};

export const getIssues = async ({
  status,
  orderBy,
}: {
  status: Status | undefined;
  orderBy: keyof Issue;
}) => {
  const issues = await prisma.issue.findMany({
    orderBy: {
      [orderBy]: 'asc',
    },
    where: {
      status: status,
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

export const assignUserToIssue = async (
  issueId: number,
  userId: string | null
) => {
  try {
    await prisma.issue.update({
      where: {
        id: issueId,
      },
      data: {
        assigneeId: userId,
      },
    });
  } catch {
    throw new Error('Failed to assign user to issue');
  }
};
