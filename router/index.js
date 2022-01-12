const company = require("../controller").companies
const employee = require("../controller").employees

module.exports = app => {
    app.get("/api", (req, res) => {
        res.status(200).send({
            data: "Welcome Node Sequlize API v1",
        })
    })

    app.post("/com/create", company.create)
    app.patch("/c/update/:id", company.update)
    app.delete("/c/delete/:id", company.delete)
    app.get("/c/all", company.getAllCompanies)




    app.post("/employee/create", employee.create)    // create=> post
    app.patch("/employee/update/:id", employee.update)   // update => put/patch
    app.delete("/employee/delete/:id", employee.delete)   // delete=>delete
    app.get("/employee/all", employee.getAllEmployee)   // get or post both
}

