// Modules
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


// NPM Packages
const inquirer = require("inquirer");
const Employee = require("./lib/employee");

// Write inquirer questions
const allEmployees = async (inputs =[]) => {
    const questions = [
        {
            name: "role",
            type: "list",
            message: "Please choose a role for this employee.",
            choices: ["Manager", "Engineer", "Intern"],  
        },
        {
            name: "name",
            type: "input",
            message: "Please enter the employee's name."
        },
        {
            name: "id",
            type: "input",
            message: "Please enter the employee's ID number."
        },
        {
            name: "email",
            type: "input",
            message: "Please enter the employee's e-mail address.",
        },
        {
            name: "gitHub",
            type: "input",
            message: "What is the engineer's gitHub url?",
            when: (answers => answers.role === "Engineer"),
        },
        {
            name: "School",
            type: "input",
            message: "What school did the intern attend?",
            when: (answers => answers.role === "Intern"),
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is the Managers office number?",
            when: (answers => answers.role === "Manager"),
        },
        {
            name: "again",
            type: "confirm",
            message: "Would you like to add another employee?",
            default: true
        },   
    ];
// Add recursive loop
    const {again, ...answers } = await inquirer.prompt(questions);
    const newEmployee = [...inputs, answers];
    return again ? allEmployees(newEmployee) : newEmployee;
};

// Function to generate data
const init = async () => {
    const inputs = await allEmployees ();

    // Reference each employee class
    inputs.forEach(newEmployee => {
        const newManager = new Manager(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.officeNumber);

        const newEngineer = new Engineer(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.gitHub);

        const newIntern = new Intern(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.school)

        console.log(newEmployee);

    });

}
// Calling the function
init();




