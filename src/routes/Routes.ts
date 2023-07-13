import express from 'express'
import { UserRoute } from '../app/modules/user/user.routes'
import { AuthRoute } from '../app/modules/auth/auth.route'
import { BookRoute } from '../app/modules/books/book.routes'

const router = express.Router()

const all_routes = [
  { path: '/auth', router: AuthRoute },
  { path: '/users', router: UserRoute },
  { path: '/books', router: BookRoute },
]

all_routes.map(item => router.use(item.path, item.router))

export default router
