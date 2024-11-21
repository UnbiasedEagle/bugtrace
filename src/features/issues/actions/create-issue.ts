'use server';

import prisma from '@/lib/db';
import { CreateIssueSchema } from '../schemas/CreateIssue';

export const createIssue = async (prevState: unknown, formData: FormData) => {
  try {
    const validate = CreateIssueSchema.safeParse(Object.fromEntries(formData));

    if (!validate.success) {
      return {
        error: validate.error.errors[0].message,
        success: false,
      };
    }

    await prisma.issue.create({
      data: {
        title: validate.data.title,
        description: validate.data.description,
      },
    });

    return {
      message: 'Issue created successfully',
      success: true,
      error: '',
    };
  } catch (error) {
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};
