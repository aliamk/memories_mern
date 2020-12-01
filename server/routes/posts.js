import express from 'express'

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router()

// ROUTE 1: http://localhost:5000/posts
router.get('/', getPosts)

// ROUTE 2: http://localhost:5000/...
router.post('/', createPost)

//  ROUTE 3: 
router.patch('/:id', updatePost)

// ROUTE 4:
router.delete('/:id', deletePost)

// ROUTE 5:
router.patch('/:id/likePost', likePost)

export default router