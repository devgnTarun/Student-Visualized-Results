const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    id : {
        type : Number,
    },
    first_name : {
        type : String,
        required : true, 
    },
    last_name : {
        type : String , 
        required : true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
      }, 
    marks : {
        english: {
            type: Number,
            required: true
          },
          maths: {
            type: Number,
            required: true
          },
          social_studies : {
            type: Number,
            required: true
          },
          science : {
            type : Number ,
            required : true
          }
    }

})

module.exports = mongoose.model("Student" , studentSchema)