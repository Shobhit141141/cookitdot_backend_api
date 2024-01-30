const User = require('../models/usermodel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET, {expiresIn: '1d'})

    
}

const userlogin = async (req, res) => {
    const {username, password } = req.body
    try {
        const user = await User.login(username, password)
        const token = createToken(user._id)
        res.status(200).json({username,token})
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}

const usersignup = async (req, res) => {
    const {username, email, password } = req.body
    try {
        const user = await User.signup(username, email, password)
        const token = createToken(user._id)
        res.status(200).json({username,email,token})
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
   
}

module.exports = { userlogin, usersignup }