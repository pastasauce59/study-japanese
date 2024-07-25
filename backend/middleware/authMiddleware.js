const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({message: "No Token Authorized"})
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        
        if (err) {
            return res.status(403).json({message: "Invalid token, forbidden", err})
        }

        req.user = user
        next()
    })
}