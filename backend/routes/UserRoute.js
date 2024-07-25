const {Router} = require("express")
const {getUser, register, login, mistakes_put_request, dashboard} = require("../controllers/UserControllers")
const { authenticateToken } = require("../middleware/authMiddleware")

const router = Router()

router.get("/get", getUser)
router.post("/register", register)
router.post("/login", login)
router.get("/dashboard", authenticateToken, dashboard)
router.put("/update/:username", mistakes_put_request)

module.exports = router