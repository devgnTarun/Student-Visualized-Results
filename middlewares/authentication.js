const User = require("../Models/userModel")
const jwt = require('jsonwebtoken')


const isAuthenticated = async (req , res , next) => {
  try {
    const {token} = req.cookies

    if(!token) {
       return res.status(401).json({error : "Login to access the resource"})
    }
    const decodedData = jwt.verify(token , process.env.JWT_SECRET)
    req.user = await User.findById(decodedData.id) // Ehh vali id sign krte waqt store kiti c || jwt.sign({id : this._id}) 

    next();
  } catch (error) {
        res.status(400).json({error : error})
  }
}

module.exports = isAuthenticated