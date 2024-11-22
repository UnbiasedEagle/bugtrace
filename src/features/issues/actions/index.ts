'use server';

import { IssueSchema } from '../schemas';
import { createIssue, updateIssue } from '../db';
import { revalidatePath } from 'next/cache';

export const createIssueAction = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const validate = IssueSchema.safeParse(Object.fromEntries(formData));

    if (!validate.success) {
      return {
        error: validate.error.errors[0].message,
        success: false,
      };
    }

    await createIssue({
      title: validate.data.title,
      description: validate.data.description,
    });

    revalidatePath('/issues');

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

export const updateIssueAction = async (
  issueId: number,
  prevState: unknown,
  formData: FormData
) => {
  try {
    const validate = IssueSchema.safeParse(Object.fromEntries(formData));

    if (!validate.success) {
      return {
        error: validate.error.errors[0].message,
        success: false,
      };
    }

    await updateIssue({
      issueId,
      title: validate.data.title,
      description: validate.data.description,
    });

    revalidatePath('/issues');

    return {
      message: 'Issue updated successfully',
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
