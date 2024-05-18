const express = require('express');
const Employee = require('../models/Employeemodel');

const router = express.Router();

// Create Employee
router.post('/', async (req, res) => {
  try {
    const {  firstname, lastname,address,phoneNumber,birthDate,email,hireDate,password } = req.body;
    const newEmployee= new Employee({
      firstname,
      lastname,
      address,
      phoneNumber,
      birthDate,
      email,
      hireDate,
      //position,
      password,

    });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Read all Employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


// Delete Employees
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});



module.exports = router;