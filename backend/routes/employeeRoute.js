const express = require("express");
const { createEmployee, getAllEmployees, getEmployee, updateEmployee, deleteEmployee } = require("../controllers/employeeCntrl");


const router = express.Router();

router.post('/', createEmployee);
router.get('/getAllEmployees', getAllEmployees);
router.get('/getEmployee/:id', getEmployee);
router.put('/updateEmployee/:id', updateEmployee);
router.delete('/deleteEmployee/:id', deleteEmployee)


module.exports = router;