const UserModel = require("../models/UserModel")
const userModel = require("../models/UserModel")
const jwt = require("jsonwebtoken")
require("dotenv").config()

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
        res.send({ status: 'error', error: 'Username is already taken! ❌'})
    }
}

module.exports.login = async (req, res) => {

    const user = await UserModel.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (user) {

        const token = jwt.sign({
            username: req.body.username,
        }, process.env.SECRET_KEY)

        return res.json({status: 'ok', user: true, user_data: token})
    } else {
        return res.json({status: 'error', user: false})
    }         
}

module.exports.mistakes_put_request = (req, res) => {
    const { username } = req.params;
    const { mistakes } = req.body;
    
    // Find the user by username
    UserModel.findOne({ username })
        .then((user) => {
            if (!user) {
                return res.status(404).send({ msg: "User not found" });
            }

            // Update the mistakes array
            user.mistakes = mistakes;

            // Save the updated user
            return user.save();
        })
        .then(() => {
            res.send("Updated successfully!");
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send({ error: error, msg: "Something went wrong!" });
        });
    
}