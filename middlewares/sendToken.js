
const sendToken = (user , statusCode , res) => {
    const token = user.getJWT() //Using this we will get the token, that we send in request of register and login

    const days = 15; // 15 days
  const options = {
    expires: new Date(Date.now() + days * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

    res.cookie('token' , token , options)

    res.status(statusCode).json({ success : true ,token , user })
}

module.exports = sendToken;