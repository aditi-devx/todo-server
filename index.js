import express from "express";
import mongoose from 'mongoose';
import { dbUrl, port } from './secrets.js'


const app = express()


app.post('/login', (req, res) => {
    res.send('login endpoint')
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