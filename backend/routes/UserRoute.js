const {Router} = require("express")
const {getUser, register, login, mistakes_put_request} = require("../controllers/UserControllers")

const router = Router()

router.get("/get", getUser)
router.post("/register", register)
router.post("/login", login)
router.put("/update/:username", mistakes_put_request)

module.exports = router