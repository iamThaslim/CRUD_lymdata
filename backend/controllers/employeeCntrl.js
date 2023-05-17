const Employee = require("../models/employeeModel")
const { Op } = require('sequelize');

// Create an employee
const createEmployee = async (req, res) => {
    try {
        const { name, email, phone, country } = req.body;

        const employee = await Employee.create({
            name,
            email,
            phone,
            country
        });

        res.status(201).send({ message: 'Employee created successfully', employee})
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error creating employee' })
    }
}

//Get All Employees
const getAllEmployees = async (req, res) => {
    try {
        const { page = 1, search = '' } = req.query;
        const pageSize = 10;
        const offset = (page - 1) * pageSize;
    
        const whereCondition = {
          [Op.or]: [
            { name: { [Op.iLike]: `%${search}%` } },
            { email: { [Op.iLike]: `%${search}%` } },
            { phone: { [Op.iLike]: `%${search}%` } },
            { country: { [Op.iLike]: `%${search}%` } },
          ],
        };

        const employees = await Employee.findAndCountAll({
            where: whereCondition,
            limit: pageSize,
            offset,
        });
        res.status(200).send({ employees });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error retrieving employees'})
    }
}

//Get a single employee
const getEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        const employee = await Employee.findByPk(id);

        if(!employee) {
            res.status(404).send({ message: 'Employee not found '})
        }
        
        res.status(200).send({ employee })
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error retrieving employee'})
    }
}

//Delete an Employee
const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        const employee = await Employee.findByPk(id);

        if(!employee) {
            return res.status(404).send({ message: 'Employee not found'})
        }

       const deletedEmployee =  await employee.destroy({
        where: { id }
       });
       res.status(200).send({ message: 'Employee deleted successfully', deleteEmployee})
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error deleting employee' });
      }
}

// Update an employee
const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, country } = req.body;

        const employee = await Employee.findByPk(id);

        if (!employee) {
            return res.status(404).send({ message: 'Employee not found'})
        }
        const [numRowsUpdated, updatedRows] = await Employee.update(  
            {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                country: req.body.country
            },
            
                { 
                    where: { id },
                    returning: true
                }
            );
            res.json(
                {
                    message: 'User updated successfully',
                    user: updatedRows[0]
                }
                );
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error updating employee' });
      }
}

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployee,
    deleteEmployee,
    updateEmployee,
    
}