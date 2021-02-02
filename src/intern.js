const Intern = require("../lib/Intern");

 const newIntern = (Intern) => `
  <div class="newEmp">
    <h2>${Intern.getRole()}<h2>
    <p>${Intern.getName()}</p>
    <p>${Intern.getID()}</p>
    <p>$${Intern.getEmail()}
    <p>${Intern.getSchool()}</p>
   </div>
   `;

   module.exports = newIntern;