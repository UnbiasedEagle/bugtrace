import { PAGE_SIZE } from '@/lib/constants';
import prisma from '@/lib/db';
import { clerkClient } from '@clerk/nextjs/server';
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
  page,
}: {
  status: Status | undefined;
  orderBy: keyof Issue;
  page: number;
}) => {
  const where = {
    status: status,
  };

  const [issues, count] = await Promise.all([
    prisma.issue.findMany({
      orderBy: {
        [orderBy]: 'asc',
      },
      where,
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
    prisma.issue.count({ where }),
  ]);

  return { issues, count };
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

export const getLatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: 5,
  });

  const issuesWithAssignees = [];

  for (const issue of issues) {
    if (issue.assigneeId) {
      const assignee = await (
        await clerkClient()
      ).users.getUser(issue.assigneeId);

      issuesWithAssignees.push({
        ...issue,
        assignee,
      });
    } else {
      issuesWithAssignees.push({
        ...issue,
        assignee: null,
      });
    }
  }

  return issuesWithAssignees;
};

export const updateIssueStatus = async (issueId: number, status: Status) => {
  try {
    await prisma.issue.update({
      where: {
        id: issueId,
      },
      data: {
        status,
      },
    });
  } catch {
    throw new Error('Failed to update issue status');
  }
};
