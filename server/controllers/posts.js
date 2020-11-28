import { Mongoose } from 'mongoose'
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
        res.state(409).json({ message: error.message })
    }
}

// ROUTE 3 - Updating or Editing existing posts
export const updatePost = async ( req, res ) => {       
    // destructure id from params and rename to _id
    const { id: _id } = req.params
    // the front end sends req.body to the server 
    const post = req.body 
    // Mongoose needs to check if the id exists in its DB
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No posts matching that id')  
    // If the id is valid, get model and run the find method, pass it the id, the post object and set it to new
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true })   
    // Send the updated post to the front end
    res.json(updatePost)
}