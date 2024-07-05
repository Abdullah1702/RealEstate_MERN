import express from 'express'
import { signup } from '../controllers/authController.js'

// Router is used to make the code cleaner and is used in index with app.use
const router = express.Router() 

router.post('/signup', signup)

export default router;