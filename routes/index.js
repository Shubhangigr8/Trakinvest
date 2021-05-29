var express = require('express');
var router = express.Router();

const EmployeeRoute = require("./employees")
const DepartmentRoute = require("./deparment")

/* Departmet */
router.use('/department', DepartmentRoute)

/* Employees */
router.use('/employee', EmployeeRoute);

module.exports = router;
