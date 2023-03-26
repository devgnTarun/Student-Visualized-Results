const express = require('express');
const { registerUser, loginUser, logoutUser, getDetails } = require('../Controllers/userController');
const isAuthenticated = require('../middlewares/authentication');
const router = express.Router();


router.route('/register').post(registerUser)
router.route('/login').post(loginUser)

router.route('/me').get( isAuthenticated, getDetails)
router.route('/logout').get(logoutUser)



module.exports = router