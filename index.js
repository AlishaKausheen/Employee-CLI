const mongoose = require("mongoose");

//Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//connect to db
const db = mongoose.connect("mongodb://localhost:27017/employeecli", {
    useMongoClient: true
});

//import modal
const Employee = require("./models/employee");
//const employee = require("./models/employee");

//Add employee
const addEmployee = (employee) => {
    Employee.create(employee).then(employee => {
        console.info("New employee added");
        db.close();
    })
}



//Remove Employee
