const {
    Employee,
    Department
} = require("../models")

const all = async(req, res, next) => {
    try {
        const deparments = await Department.findAll({
            include: [
                {
                    model: Employee,
                    as: 'employees'
                }
            ],
        })
        res.json(deparments)
    } catch(error) {
        res.status(500).json({
            message: "something went wrong"
        })
    }
}

const add = async(req,res,next) => {
    try {
        const { name } = req.body
        const deparment = await Department.create({
            name
        })
        res.status(201).json(deparment)
    } catch(error) {
        res.status(400).json({
            message: error.errors[0].message
        })
    }
}

const edit = async(req, res, next) => {
    try {
        const {name} = req.body
        const {id} = req.params
        const deparment = await Department.findOne({
            where: {
                id: id
            }
        })
        if(!deparment) {
            res.status(400).json({
                message: "department doesnot exist"
            })
        } else {
            deparment.name = name
            await deparment.save()
            res.json(deparment)
        }
    } catch(error) {
        res.status(500).json({
            message: "something went wrong"
        })
    }
}

const deleteDepartment = async(req, res, next) => {
    try {
        const {id} = req.params
        const deparment = await Department.findOne({
            where: {
                id: id
            }
        })
        if(!deparment) {
            res.status(400).json({
                message: "department doesnot exist"
            })
        } else {
            await deparment.destroy()
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


const employeesByDepartment = async(req, res, next) => {
    try {
        const {id} = req.params
        const employees = await Employee.findAll({
            where: {
                department_id: id
            }
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
exports.deleteDepartment = deleteDepartment;
exports.employeesByDepartment = employeesByDepartment;