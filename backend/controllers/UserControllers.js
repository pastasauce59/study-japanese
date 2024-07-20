const UserModel = require("../models/UserModel")
const userModel = require("../models/UserModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
require("dotenv").config()

module.exports.getUser = async (req, res) => {
    res.send("Hello, testing 1,2,3...")
}

module.exports.register = async (req, res) => {
    
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)

        const user = await userModel.create({
            username: req.body.username,
            password: newPassword,
            mistakes: req.body.mistakes
        })
        res.send(user)
    } catch (err){
        res.send({ status: 'error', error: 'Username is already taken! ❌'})
    }
}

module.exports.login = async (req, res) => {

    const user = await UserModel.findOne({
        username: req.body.username
    })

    if(!user) {
        return {status: 'error', error: 'Invalid login.'}
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password)

    if (isPasswordValid) {

        const token = jwt.sign({
            userId: user._id,
        }, process.env.SECRET_KEY, {expiresIn: '1h'})

        const userData = {
            username: user.username,
            mistakes: user.mistakes
        }

        return res.json({status: 'ok', user: userData, token: token })
    } else {
        return res.json({status: 'error', user: false})
    }         
}

module.exports.getUserData = async (req, res) => {

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