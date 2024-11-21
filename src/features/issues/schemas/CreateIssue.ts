import { z } from 'zod';

export const CreateIssueSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }).max(255, {
    message: 'Title must be less than 255 characters',
  }),
  description: z
    .string()
    .min(1, { message: 'Description is required' })
    .nullish()
    .transform((val) => (!val ? '' : val))
    .pipe(z.string().min(1, { message: 'Description is required' })),
});
