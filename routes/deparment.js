const express = require('express');
const router = express.Router();

const DepartmentController = require("../controllers/department");

/* Get All */
router.get('/all', DepartmentController.all)

/* Add Department */
router.post('/add', DepartmentController.add);

/* Edit */
router.patch('/edit/:id', DepartmentController.edit)

/* Delete */
router.delete('/delete/:id', DepartmentController.deleteDepartment)

/* Get Employees by Department */
router.get('/:id/employees', DepartmentController.employeesByDepartment)

module.exports = router;
