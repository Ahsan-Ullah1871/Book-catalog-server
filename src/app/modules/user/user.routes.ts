import express from 'express'
import { UserController } from './user.controller'

import authHandler from '../../middlewares/authHandler'

const router = express.Router()

router.get('/my-profile', authHandler('buyer'), UserController.userProfile)

export const UserRoute = router
