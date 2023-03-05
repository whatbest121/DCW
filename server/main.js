const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()

//import module
const User = require('./routes/LoginFacebook')
const Post = require('./routes/Post')

//middleware
app.use(bodyParser.json())
app.use(cors())

//router middleware
app.use('/login',User)
app.use('/api',Post)

app.get('/',(req,res)=>{
    res.send("Welcome to server page!!!")
})

app.post('/test',(req,res)=>{
    console.log("testtset")
    res.send({test:"test"})
})

dotenv.config();
mongoose.connect(
    process.env.DB_CONNECT.toString(),
    {useNewUrlParser: true,useUnifiedTopology:true},
    ()=> console.log('completed connect to DB')
)

app.listen(8000,()=>{
    console.log('Hello server')
})
