import express from 'express'
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from 'body-parser'

dotenv.config()
const app = express()

// Mongoose Setup
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    app.listen(PORT, ()=>console.log(`Server running on PORT:${PORT}`))
    // User.insertMany(users)
    // Post.insertMany(posts)
}).catch((error)=>console.log(`${error} did not connect`))