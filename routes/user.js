const express = require('express')
const router2 = express.Router()
const {userlogin ,usersignup} = require('../controllers/usercontroller')
router2.post('/login',userlogin)

router2.post('/signup',usersignup)

module.exports = router2

