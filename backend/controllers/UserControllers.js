const userModel = require("../models/UserModel")

module.exports.getUser = async (req, res) => {
    res.send("Hello, testing 1,2,3...")
}

module.exports.register = async (req, res) => {
    
    try {
        const user = await userModel.create({
            username: req.body.username,
            password: req.body.password,
            mistakes: req.body.mistakes
        })
        res.send(user)
    } catch (error){console.log(error)}
}