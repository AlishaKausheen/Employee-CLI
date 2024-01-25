const mongoose = require("mongoose");

//employee schema
const employeeSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: String },
    email: { type: String }
    
})

//Define and export
module.exports = mongoose.model("Employee", employeeSchema);
