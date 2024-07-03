const {Router} = require("express")
const {getUser} = require("../controllers/UserControllers")

const router = Router()

router.get("/get", getUser)

module.exports = router