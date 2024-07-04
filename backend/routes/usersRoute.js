import express from 'express';
import { User } from '../models/UserModel.js';
import { test } from '../controllers/userController.js';

const route = express.Router()

route.get('/', test)

export default route