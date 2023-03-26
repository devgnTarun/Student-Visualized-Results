const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minLength : [3, 'Min. length of name should be 3'],
        maxLength : [25, 'Max. length of name should be 25 Characters'],
    },
    email : {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Enter valid Email"],
    },
    password : {
        type : String,
        required : true,
        select : false,
        minLength : [8  , 'Password length should be 8 or more']
    },
    role : {
    type : String,
    default : 'user',
    }
})

// Hashing the password

userSchema.pre("save" , async function (next) {
    if(!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password , 10)
})


//Compare password for login

userSchema.methods.comparePassword = async function (enteredPass) {
    return await bcrypt.compare(enteredPass , this.password) //This will help to compare the password in database and the entered which we get through req.body
}

// Jwt Signing 

userSchema.methods.getJWT =  function () {
    return  jwt.sign({id : this._id} , process.env.JWT_SECRET , {expiresIn : process.env.JWT_EXPIRES})
}

module.exports = mongoose.model('User' , userSchema);
