const express = require('express')
const router = express.Router()
const api = require("./ApiRoutes")

router.get('/', (req, res) => {
    res.send('Main Page')
})

router.use("/api", api)

module.exports = router