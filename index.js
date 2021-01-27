// Modules
// const manager = require("./lib/manager");
// const engineer = require("./lib/engineer");
// const intern = require("./lib/intern");

// NPM Packages
const inquirer = require("inquirer");

// Write inquirer questions
    const questions = [
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
        name: "role",
        type: "list",
        message: "Please choose a role for this employee.",
        choices: ["Manager", "Engineer", "Intern"],  
    },
    {
        name: "Engineer",
        type: "input",
        message: "What is the engineer's gitHub url?",
        when: (inquirerResponses => inquirerResponses.role === "Engineer"),
    },
    {
        name: "Intern",
        type: "input",
        message: "What school did the intern attend?",
        when: (inquirerResponses => inquirerResponses.role === "Intern"),
    },
    {
        name: "Manager",
        type: "input",
        message: "What is the Managers office number?",
        when: (inquirerResponses => inquirerResponses.role === "Manager"),
    },    
];

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating README...');
      console.log ({ ...inquirerResponses });
    });
  }
  
  init();
// inquirer.prompt(req).then(res) => 

