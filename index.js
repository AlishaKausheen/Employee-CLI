const mongoose = require("mongoose");
const Employee = require("./models/employee");

// Connect to db
mongoose.connect("mongodb://localhost:27017/employeecli").then(() => {
    console.info("Connected to the database");
}).catch(err => {
    console.error(`Could not connect to the database: ${err}`);
});

// Add employee
const addEmployee = (employee) => {
    Employee.create(employee).then(employee => {
        console.info("New employee added");
        mongoose.connection.close();
    }).catch(err => {
        console.error("An error occurred when adding an employee:", err);
        mongoose.connection.close();
    });
};

// Find Employee
const findEmployee = (name) => {
    const search = new RegExp(name, 'i');
    Employee.find({ $or: [{ firstName: search }, { lastName: search }] })
        .then(employee => {
            console.info(employee);
            console.info(`${employee.length} matches`);
            mongoose.connection.close();
        }).catch(err => {
            console.error("An error occurred when finding an employee:", err);
            mongoose.connection.close();
        });
};

// Export all methods
module.exports = {
    addEmployee,
    findEmployee
};
