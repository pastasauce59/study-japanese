const {Router} = require("express")
const {getUser, register} = require("../controllers/UserControllers")

const router = Router()

router.get("/get", getUser)
router.post("/register", register)

module.exports = router