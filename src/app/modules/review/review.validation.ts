import { z } from 'zod'

export const review_post_zod_schema = z.object({
  body: z.object({
    ratings: z.number({ required_error: 'Ratings is required' }),
    review: z.string({ required_error: 'Review is required' }),
  }),
})
