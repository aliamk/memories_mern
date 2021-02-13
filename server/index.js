import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'


// Initialise the app and run it as a function
const app = express()
dotenv.config()

// Instruct app to use Express' bodyparser to convert json and image files appropriately
app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
// Use Express' cors dependency to avoid cross-origin issues
app.use(cors())

// ROUTE 1: http://localhost:PORT/posts MUST BE POSITIONED AFTER CORS
app.use('/posts', postRoutes)
app.use('/users', userRoutes)

// Connect the app's backend to mongoose in order to host the database: https://www.mongodb.com/cloud/atlas
const PORT = process.env.PORT;

// Instruct app on how to connect to mongoose, what to do if connection is successful or unsuccessful
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error))

// This is just to handle console errors
mongoose.set('useFindAndModify', false)