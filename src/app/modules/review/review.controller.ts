import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import catchAsync from '../../../shared/catchAsync'
import { Request, Response } from 'express'
import { ReviewServices } from './review.services'
import { IReview } from './review.interface'

// refreshToken
const postReview = catchAsync(async (req: Request, res: Response) => {
  const { ...review_data } = req.body

  review_data.reviewed_by = req.logged_in_user._id

  const result = await ReviewServices.post_review(review_data)

  sendResponse<IReview, null>(res, {
    status_code: httpStatus.OK,
    success: true,
    data: result,
    message: 'Your reviewed added successfully !',
  })
})

export const ReviewController = {
  postReview,
}
