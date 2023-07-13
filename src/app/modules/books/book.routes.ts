import express from 'express'
import requestValidationHandler from '../../middlewares/requestValidationHandler'

import { BookController } from './book.controller'
import {
  create_book_zod_schema,
  update_book_zod_schema,
} from './book.validation'
import authHandler from '../../middlewares/authHandler'

const router = express.Router()

router.post(
  '/',
  authHandler('seller'),
  requestValidationHandler(create_book_zod_schema),
  BookController.createBook
)

router.get(
  '/',
  authHandler('admin', 'buyer', 'seller'),
  BookController.allBooks
)

router.get(
  '/:id',
  authHandler('admin', 'buyer', 'seller'),
  BookController.bookDetails
)

router.patch(
  '/:id',
  authHandler('seller'),
  requestValidationHandler(update_book_zod_schema),
  BookController.updateBook
)
router.delete('/:id', authHandler('seller'), BookController.deleteBook)

export const CowRoute = router
