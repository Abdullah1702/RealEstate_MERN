import express from 'express'
import { PORT } from './config.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/usersRoute.js';
import authRoute from './routes/authRoute.js'

dotenv.config()

let app = express();

// to use json request for example for post in postman i use express.json
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("this is home")
})

app.use('/user', userRoute)

app.use('/auth', authRoute)

mongoose
    .connect(process.env.mongoDBURL)
    .then(()=>{
        console.log("connected to database")
        app.listen(PORT, () =>{
            console.log("server is listening")
        })
    })
    .catch((error)=>{
        console.log(error)
    })

