const UserModel = require("../models/UserModel")
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
    } catch (err){
        res.send({ status: 'error', error: 'Duplicate username!'})
    }
}

module.exports.login = async (req, res) => {

    const user = await UserModel.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (user) {
        return res.json({status: 'ok', user: true})
    } else {
        return res.json({status: 'error', user: false})
    }         
}