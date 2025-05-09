const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

// CREATE
exports.createEmployee = async (req, res) => {
  try {
    const { name, email, position, salary } = req.body;
    const newEmployee = new Employee({ name, email, position, salary });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: 'Error creating employee', error });
  }
};

// READ
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error });
  }
};

// GET ONE
exports.getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employee', error });
  }
};

// UPDATE
exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: 'Error updating employee', error });
  }
};

// DELETE
exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(204).send(); // No Content
  } catch (error) {
    res.status(500).json({ message: 'Error deleting employee', error });
  }
};
