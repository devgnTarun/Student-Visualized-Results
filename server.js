const app = require('./app.js')
const connectToMongo = require('./config/db')

require('dotenv').config({path : './backend/config/config.env'})

const port = process.env.PORT;
connectToMongo();

app.listen(port , () => {
    console.log(`This app is listening on port ${port}`)
})

