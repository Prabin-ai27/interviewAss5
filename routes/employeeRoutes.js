const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const Asset = require('../models/Asset');

router.get('/employee', async (req, res) => {
  const { id, name } = req.query;

  try {
    let employee;

    if (id) {
      employee = await Employee.findOne({ employeeId: id });
    } else if (name) {
      employee = await Employee.findOne({ name: new RegExp(name, 'i') });
    } else {
      return res.status(400).json({ message: "Please provide either 'id' or 'name'" });
    }

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    const assets = await Asset.find({ assignedTo: employee.employeeId });

    res.json({ employee, assets });
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
});

module.exports = router;
