import express from "express";
import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import { dbUrl, port, secret } from './secrets.js';
import { userModel } from "./models/userModel.js";


const app = express()
app.use(express.json())

app.post('/login', async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;
        //step 1: check if the user already exist or not
        let existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.json({
                message: "user already exists"
            })
        }
        await userModel.create({ email: email, password: password })
        const token = jwt.sign({ email }, secret)
        return res.json({
            message: "User logged in succesfully!",
            token
        })

    }
    catch (error) {
        console.log(error)
        return res.json({

            message: "error in login endpoint"
        })
    }
})

app.post('/todo', (req, res) => {
    res.send('addTodo endpoint')
})

app.get('/todo', (req, res) => {
    res.send('getTodo endpoint')
})

async function connectDb() {
    try {
        await mongoose.connect(dbUrl);
        console.log('dataBase connected');
        app.listen(port, () => {
            console.log(`Todo app listening on port ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}
connectDb(); 