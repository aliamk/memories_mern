import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'

// ROUTE 1 - Fetching all existing posts
export const getPosts = async ( req, res ) => {
   try {
    const postMessages = await PostMessage.find()
    res.status(200).json(postMessages)
   } catch (error) {
    res.state(404).json({ message: error.message })
   }
}

// ROUTE 2 - Creating new posts using the form
export const createPost = async ( req, res ) => {
    const post = req.body
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)        
    } catch (error) {
        res.state(409).json({ message: error })
    }
}

// ROUTE 3 - Updating or Editing existing posts
export const updatePost = async ( req, res ) => {       
    // destructure id from params and rename to _id
    const { id: _id } = req.params
    // the frontend sends req.body to the server so we can check against it in Mongo below 
    const post = req.body 
    // Mongoose needs to check if the id exists in its DB
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No posts matching that id')  
    // If the id is valid, get model and run the find method, pass it the id, the post object and set it to new
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })   
    // Send the updated post to the frontend
    res.json(updatedPost)
}

// ROUTE 4 - Deleting existing posts
export const deletePost = async ( req, res ) => {       
    // destructure id from params
    const { id } = req.params
    // Mongoose needs to check if the id exists in its DB
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No posts matching that id')  
    // If the id is valid, get model and run the find method, pass it the id
    await PostMessage.findByIdAndRemove(id)   
    // Send the deleted post to the frontend with the following message
    res.json({ message: 'Post deleted successfully'})
}

// ROUTE 5 - Updating posts when a user clicks LIKE (use auth to limit 1 like per authorised user)
export const likePost = async (req, res) => {
    // destructure id from params
    const { id } = req.params
    // If user isn't authenticated by middleware then return error message
    if(!req.userId) return res.json({ message: 'Unauthenticated' })
    // Mongoose needs to check if the post's id exists in its DB
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No posts matching that id') 
    // If the id is valid, get the PostMessage model and run the find method passing it the id
    const post = await PostMessage.findById(id)   
    // Check whether the user's ID already exists in the Post's likes array (convert to string to read)
    const index = post.likes.findIndex((id) => id === String(req.userId))
    // Toggle like and dislike on the posts [-1 means user's ID is not in that post's likes array]
    if(index === -1) {
        post.likes.push(req.userId)
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.userId))
    }
    // Pass the id and post to the findByIdAndUpdate method, and tag it new
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true})
    // Send the updated post to the frontend in object updatePost
    res.json(updatedPost)
}