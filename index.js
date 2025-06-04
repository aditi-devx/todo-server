import express from "express";
import { port } from './secrets.js'


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
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
