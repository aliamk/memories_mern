import express from 'express'

import { getPosts, createPost, updatePost } from '../controllers/posts.js'

const router = express.Router()

// ROUTE 1: http://localhost:5000/posts
router.get('/', getPosts)

// ROUTE 2: http://localhost:5000/...
router.post('/', createPost)

//  ROUTE 3: 
router.patch('/:id', updatePost)

export default router