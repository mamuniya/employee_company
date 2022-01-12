const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
require("./router/index")(app)
const PORT = 5789
app.listen(PORT, () => {
    console.log("new changes")
    console.log(`Server is listening to port ${PORT}`)
})