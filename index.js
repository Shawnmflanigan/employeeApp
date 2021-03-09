// Modules
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const newMan = require("./src/manager");
const newInt = require("./src/intern");
const newEng = require("./src/engineer");


// NPM Packages
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const fs = require('fs');


// Write inquirer questions
const allEmployees = async (inputs = []) => {
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
    const { again, ...answers } = await inquirer.prompt(questions);
    const newEmployee = [...inputs, answers];
    return again ? allEmployees(newEmployee) : newEmployee;
};

// Function to generate data
const init = async () => {
    const inputs = await allEmployees();
    // start html
    console.log('Start Html')
    function renderPage() {
        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Employee List</title>
        
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma-rtl.min.css">
            <script src="../index.js"></script>
        </head>
        <body>
            <section class="hero">
                <div class="hero-body is-primary">
                  <p class="title">
                    Employee List
                  </p>
                </div>
            </section>

            <div class = 'newEmployee'>
                `
        fs.writeFile('./dist/index.html', html, function (err) {
            if (err) {
                console.log('Nothing is happening');
            }
        })
    }
    renderPage();

    // Reference each employee class and append to html
    inputs.forEach(newEmployee => {
        if (newEmployee.role === "Manager") {
            const newManager = new Manager(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.officeNumber);
            newMan(newManager)
            fs.appendFile('./dist/index.html', newMan(newManager), function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
            console.log(newMan(newManager));
        } else if (newEmployee.role === "Engineer") {
            const newEngineer = new Engineer(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.gitHub);
            newEng(newEngineer)
            fs.appendFile('./dist/index.html', newEng(newEngineer), function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
            console.log(newEng(newEngineer))
        }
        else {
            const newIntern = new Intern(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.School)
            newInt(newIntern)
            fs.appendFile('./dist/index.html', newInt(newIntern), function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
            console.log(newInt(newIntern))
        }
    });

    fs.appendFile('./dist/index.html', `  
    </div>
    </body>
    </html>`, function (err) {
        if (err) throw err;
      });
    console.log('end html')
}
// Calling the function
init();




