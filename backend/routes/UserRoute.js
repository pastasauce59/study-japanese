const {Router} = require("express")
const {getUser, register, login} = require("../controllers/UserControllers")

const router = Router()

router.get("/get", getUser)
router.post("/register", register)
router.post("/login", login)

module.exports = router