const express = require('express');
const router = express.Router();

const EmployeeController = require("../controllers/employees")

/* All */
router.get('/all', EmployeeController.all);


/* Add Employee */
router.post('/add', EmployeeController.add);

/* Edit Employee */
router.patch('/edit/:id', EmployeeController.edit)

/* Delete */
router.delete('/delete/:id', EmployeeController.deleteEmployee)

/* Search */
router.get('/search', EmployeeController.search)

module.exports = router;
