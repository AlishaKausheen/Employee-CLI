const mongoose = require("mongoose");

// Employee schema
const employeeSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: String },
    email: { type: String }    
});

// Define and export the Employee model
module.exports = mongoose.model("Employee", employeeSchema);
