import { User } from '../models/UserModel.js';
//npm i bcryptjs
import bcryptjs from 'bcryptjs'

// Route to sign up a user 
export const signup = async(req,res)=>{
    try{
        const {username, email, password} = req.body;

        // to hash the password we use hashSync which means it waits for the hash so we dont need await in this case
        const hashedPassword = bcryptjs.hashSync(password, 10) // 10 is number of round for creating the salt which combined to the password creates the hash
        const newUser = {
            username: username,
            email: email,
            password: hashedPassword
        }

        // creating new user can take time so we use await to wait until this code of line is finished
        const user = await User.create(newUser)

        return res.status(201).json({message: "User created successfully"})
    }catch(error){
        
        return res.status(500).json(error.message)
    }
}