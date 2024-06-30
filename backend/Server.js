const express = require("express")

const mongoose = require("mongoose")

require("dotenv").config()

const cors = require("cors")

const app = express()
const PORT = process.env.PORT | 5001

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Testing testing 1 2 3...")
})

app.listen(PORT, () => console.log(`listening @ ${PORT}`))