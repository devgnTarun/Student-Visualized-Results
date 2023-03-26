const User = require('../Models/userModel')
const sendToken = require('../middlewares/sendToken');


exports.registerUser = async (req , res , next) => {

    try {
     const {name , email , password} = req.body;

     const existingUser = await User.findOne({ email });
     if (existingUser) {
        return res.status(400).json({error : "User already exist on this email"})
      }
        


    if( !name || !email || !password) {
       return res.status(400).json({success : false , error : "Fill all the required fields"})
    }

    const user = await User.create({name , email , password})

    sendToken(user , 200 , res )

} catch (error) {
       return res.status(400).json({error : error.message})
}

}

//login user

exports.loginUser = async (req , res , next) => {

    try {
     const { email , password} = req.body;
        
    // Checking the fields
    if( !email || !password) {
      return  res.status(400).json({success : false , error : "Fill all the required fields"})
    }

    //Finding user
     const user = await User.findOne({email }).select('+password')
      
     //You know
    if(!user) {
       return res.status(404).json({error : "User does not exists"})
    }

    //Compare paassword method in model ---- Passing Password in paranthesis ()
    const isMatched = await user.comparePassword(password)

    if(!isMatched) {
       return res.status(400).json({error : "Credentials does not match"})
    }

    //Sending token
    sendToken(user , 200 , res )

} catch (error) {
      return  res.status(400).json({error : error.message})
}
}

//Get user details for loading user 

exports.getDetails = async (req, res , next) => {
  try {
    const user = await User.findById(req.user.id)

    if(!user){
     return  res.status(400).json({success : false ,error :  "User not found"})
    }

    res.status(200).json({success : true , user})

  } catch (error) {
     return res.status(400).json({error : error.message})
  }
}


//Logout user 

exports.logoutUser = async ( req , res , next ) => {
  try {
    res.cookie('token' , null , {expires : new Date(Date.now()) , httpOnly : true})
    
    res.status(200).json({success : true , error :'Logout successfully'})
  } catch (error) {
       return res.status(400).json({error :error.message})
  }
}