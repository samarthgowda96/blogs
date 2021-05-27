import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import register from './api/routes/auth.js';
import login from './api/routes/auth.js';
import modifyDelete from './api/routes/users.js';
import posts from './api/routes/posts.js'
import cors from 'cors';
import category from './api/routes/categories.js'
import multer from 'multer';
import path from 'path'

import bodyParser from 'body-Parser';
const app = express();

dotenv.config();


mongoose.connect(process.env.MONGOURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:true,
}).then(()=>{
    console.log("connected to mongo")
}).catch((e)=>{
    console.log(e)
})


const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb)=>{
        cb(null, "cover.jpeg")
    }
})
const upload= multer({storage:storage})
app.post('/upload',upload.single('file'),(req, res)=>{
    res.status(200).json("file uploaded!")
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

app.use('/auth',register)
app.use('/auth',login)
app.use('/users',modifyDelete)
app.use('/posts',posts)
app.use('/category',category)

app.listen(5000, ()=>{
    console.log("listening on port 5000")
})