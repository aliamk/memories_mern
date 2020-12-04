import mongoose from 'mongoose'

// Create a Mongoose schema for consistent uniformity in all of the app's posts
// Each post has to have these properties
// selectedFile is for the images that will be posted - the Base64 module we installed will convert the images to strings
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

// This converts the above schema into a model that can have commands like find, create, delete run on it
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage