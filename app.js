const express = require('express');
const app = express()
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')

require('dotenv').config({path : './backend/config/config.env'})


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials : true,
    origin : 'http://localhost:5000',
}))

const student = require('./Routes/studentRoutes')
const user = require('./Routes/userRoutes')

app.use(express.static(path.join(__dirname , './frontend/build')))

app.get("*" , (req , res ) => {
    res.sendFile(path.resolve(__dirname , './frontend/build/index.html'))
})

app.use('/api/v2' , student)
app.use('/api/v2' , user)
module.exports = app;