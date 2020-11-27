import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

// Initialise the app and run it as a function
const app = express()

// Instruct app to use Express' bodyparser to convert json and image files appropriately
app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
// Use Express' cors dependency to avoid cross-origin issues
app.use(cors())



