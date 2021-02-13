import express from 'express'

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
import auth from '../middleware/auth.js'

const router = express.Router()

// ROUTE 1: http://localhost:PORT/posts
router.get('/', getPosts)

// ROUTE 2: http://localhost:PORT/...
router.post('/', auth, createPost)

//  ROUTE 3: Edit / Update post
router.patch('/:id', auth, updatePost)

// ROUTE 4:
router.delete('/:id', auth, deletePost)

// ROUTE 5:
router.patch('/:id/likePost', auth, likePost)

export default router