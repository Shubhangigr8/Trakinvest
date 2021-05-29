const {
    Employee,
    Department
} = require("../models")

const sequelize = require("sequelize")
const Op = sequelize.Op

const all = async(req, res, next) => {
    try {
        const employees = await Employee.findAll({
            include: [{
                model: Department,
                as: 'department'
            }]
        })
        res.json(employees)
    } catch(error) {
        res.status(500).json({
            message: "something went wrong"
        })
    }
}

const add = async(req,res,next) => {
    try {
        const { name, email, phone, address, department_id } = req.body
        const employee = await Employee.create({
            name, email, phone, address, department_id
        })
        res.status(201).json(employee)
    } catch(error) {
        res.status(400).json({
            message: error.errors[0].message
        })
    }
}

const edit = async(req, res, next) => {
    try {
        const {name, email, phone, address, department_id} = req.body
        const {id} = req.params
        const employee = await Employee.findOne({
            where: {
                id: id
            }
        })
        if(!employee) {
            res.status(400).json({
                message: "department doesnot exist"
            })
        } else {
            employee.name = name
            employee.email = email
            employee.phone = phone
            employee.address = address
            employee.department_id = department_id
            await employee.save()
            res.json(employee)
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "something went wrong"
        })
    }
}

const deleteEmployee = async(req, res, next) => {
    try {
        const {id} = req.params
        const employee = await Employee.findOne({
            where: {
                id: id
            }
        })
        if(!employee) {
            res.status(400).json({
                message: "employee doesnot exist"
            })
        } else {
            await employee.destroy()
            res.json({
                message: "deleted successfully"
            })
        }

    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "something went wrong"
        })
    }
}

const search = async(req, res, next) => {
    try {
        const name = req.query.name || ""
        const email = req.query.email || ""
        const address = req.query.address || ""
        const employees = await Employee.findAll({
            where: {
                name: {[Op.iLike]: `%${name}%`},
                email: {[Op.iLike]: `%${email}%`},
                address: {[Op.iLike]: `%${address}%`},
            },
            include: [{
                model: Department,
                as: 'department'
            }]
        })
        res.json(employees)
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "something went wrong"
        })
    }
}

exports.all = all;
exports.add = add;
exports.edit = edit;
exports.deleteEmployee = deleteEmployee;
exports.search = search;