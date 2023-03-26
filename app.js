const express = require('express');
const app = express()
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')

require('dotenv').config({path : './backend/config/config.env'})


app.use(express.json())
app.use(cookieParser())
app.use(cors())

const student = require('./Routes/studentRoutes')
const user = require('./Routes/userRoutes')



app.use('/api/v2' , student)
app.use('/api/v2' , user)

app.use(express.static(path.join(__dirname , './frontend/build')))

app.get("*" , (req , res ) => {
    res.sendFile(path.resolve(__dirname , './frontend/build/index.html'))
})

module.exports = app;