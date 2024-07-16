const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const routes = require("./routes/UserRoute")

const cors = require("cors")

const app = express()
const PORT = process.env.PORT | 5001

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("mongoDB is connected..."))
.catch((error) =>  console.log(error))

app.use("/api", routes)

app.listen(PORT, () => console.log(`listening @ ${PORT}`))