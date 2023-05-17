const express = require("express");
const { createEmployee, getAllEmployees, getEmployee, updateEmployee, deleteEmployee } = require("../controllers/employeeCntrl");
const authMiddleware = require("../middlewares/authMiddleware");


const router = express.Router();

router.post('/', authMiddleware, createEmployee);
router.get('/getAllEmployees', authMiddleware, getAllEmployees);
router.get('/getEmployee/:id', authMiddleware, getEmployee);
router.put('/updateEmployee/:id', authMiddleware, updateEmployee);
router.delete('/deleteEmployee/:id', authMiddleware, deleteEmployee)


module.exports = router;