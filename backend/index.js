import express from 'express'
import { PORT } from './config.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/usersRoute.js';

dotenv.config()

let app = express();

app.get('/', (req,res)=>{
    res.send("this is home")
})

app.use('/user', userRoute)

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

