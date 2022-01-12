const employee = require('../models/index').employees;
module.exports = {
    async getAllEmployee(req, res) {
        try {
            const employeeCollection = await employee.findAll({ include: 'companies' })
            const responseData = [];
            employeeCollection.forEach(element => {
                const obj = {
                    id: element.id,
                    name: element.name,
                    department: element.department,
                    hometown: element.hometown,
                    experience: element.experience,
                    companiesid: element.companiesid,
                    jobtitle: element.jobtitle,
                    companyName: element.companies.name

                }
                responseData.push(obj);
            })

            res.status(201).send(responseData)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },

    // async getAllEmployee(req, res) {
    //     try {
    //         const employeeCollection = await employee.findAll({ include: 'companies' })
    //         res.status(201).send(employeeCollection)
    //     } catch (e) {
    //         console.log(e)
    //         res.status(500).send(e)
    //     }
    // },
    async create(req, res) {
        try {
            const employeeCollection = await employee.create({
                name: req.body.name,
                department: req.body.department,
                hometown: req.body.hometown,
                experience: req.body.experience,
                companiesid: req.body.companiesid,
                jobtitle: req.body.jobtitle,
                // Company_Name: req.body.Company_Name


            })
            res.status(201).send(employeeCollection)
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    },
    async update(req, res) {
        try {
            const employeeCollection = await employee.findOne(
                {
                    where: { id: req.params.id, }
                })
            if (employeeCollection) {
                const updateCompany = await employee.update(
                    {
                        name: req.body.name,
                        department: req.body.department,
                        hometown: req.body.hometown,
                        experience: req.body.experience,
                        companiesid: req.body.companiesid,
                        jobtitle: req.body.jobtitle,
                    },
                    {
                        where: { id: req.params.id },

                    })
                res.status(201).send(updateCompany)
            } else {
                res.status(404).send("User Not Found")
            }
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },


    async delete(req, res) {
        try {
            const deletethis = await employee.destroy(
                {
                    where: { id: req.params.id }
                })
            res.status(201).send({ success: true })


        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },


}