import express from 'express'

import { signin, signup } from '../controllers/user.js'

// Create an instance of a router
const router = express.Router()

// ROUTE 1: signin endpoint and call the signin controller
router.post('/signin', signin)

// ROUTE 2: signup endpoint and call the signup controller
router.post('/signup', signup)

export default router