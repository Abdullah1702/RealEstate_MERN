import express from 'express'
import { PORT } from './config.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

let app = express();

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

