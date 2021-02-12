import mongoose from 'mongoose'

// Create a Mongoose schema for consistent uniformity in all of the app's users
// Each user has to have these properties
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },   
})

// This converts the above schema into a model that can have commands like find, create, delete run on it
export default mongoose.model('User', userSchema)