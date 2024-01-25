const program = require("commander");
const {
    addEmployee,
    findEmployee
} = require("./index");

program
    .version('1.0.0')
    .description('Employee Management System')

program
    .command(`add <firstName> <lastName> <phone> <email>`)
    .alias('a')
    .description('Add an employee')
    .action((firstName, lastName, phone, email) => {
        addEmployee({ firstName, lastName, phone, email });
    })

program
    .command(`find <name>`)
    .alias('f')
    .description('Find an employee')
    .action(name => findEmployee(name));
    
    

program.parse(program.argv);