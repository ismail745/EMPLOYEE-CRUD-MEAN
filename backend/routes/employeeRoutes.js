const express = require('express');
const router = express.Router();

const {
  createEmployee,
  getAllEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employeeController');

router.get('/', getAllEmployees);
router.get('/:id', getEmployee);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;
