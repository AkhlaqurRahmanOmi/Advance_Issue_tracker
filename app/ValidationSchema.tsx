import { z } from 'zod';

export const schema = z.object({
    title: z.string().min(1, 'title is required').max(255),
    description: z.string().min(1, 'description is required')
})