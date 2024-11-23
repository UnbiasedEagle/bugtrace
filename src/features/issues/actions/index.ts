'use server';

import { revalidatePath } from 'next/cache';
import { createIssue, deleteIssue, updateIssue } from '../db';
import { IssueSchema } from '../schemas';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

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

    const { userId, redirectToSignIn } = await auth();

    if (!userId) {
      return redirectToSignIn();
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

    const { userId, redirectToSignIn } = await auth();

    if (!userId) {
      return redirectToSignIn();
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

export const deleteIssueAction = async (issueId: number) => {
  let redirectPath: string | null = null;

  try {
    const { userId, redirectToSignIn } = await auth();

    if (!userId) {
      return redirectToSignIn();
    }

    await deleteIssue(issueId);
    revalidatePath('/issues');
    redirectPath = '/issues';
  } catch (error) {
    return {
      error: (error as Error).message,
      success: false,
    };
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
};
