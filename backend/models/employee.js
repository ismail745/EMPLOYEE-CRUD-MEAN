const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String ,
  email: String ,
  position: String,
  salary: Number
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);
