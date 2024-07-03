import express from 'express'
import { PORT } from './config.js';

let app = express();

app.listen(PORT, () =>{
    console.log("server is listening")
})