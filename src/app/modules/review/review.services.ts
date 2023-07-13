import { User } from '../user/user.model'
import { jwtHelper } from '../../../helpers/jwtHelper'
import config from '../../../config'
import { Secret } from 'jsonwebtoken'
import { IReview } from './review.interface'
import { Types } from 'mongoose'
import ApiError from '../../errors/ApiError'
import httpStatus from 'http-status'
import { Review } from './review.model'
import { IUser } from '../user/user.interface'

// Create new user
const post_review = async (review_data: IReview): Promise<IReview | null> => {
  // User checking
  const isUserExist: IUser | null = await User.isUserExistByID(
    review_data?.reviewed_by as Types.ObjectId
  )

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found')
  }

  const created_review = await Review.create(review_data)

  return created_review
}

export const ReviewServices = {
  post_review,
}
