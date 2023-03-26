const mongoose = require('mongoose');


const connectToMongo = () => {
    mongoose.connect(process.env.URI).then((data) => 
        console.log(`MongoDB Server connected to ${data.connection.host}`)
    )
}

module.exports = connectToMongo
