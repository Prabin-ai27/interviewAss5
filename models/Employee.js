const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId: String,
    name: String
});

module.exports = mongoose.model('Employee', employeeSchema);
