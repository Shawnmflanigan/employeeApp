const Intern = require("../lib/Intern");

 const newIntern = (Intern) => `
  <div class="column is-one-quarter box">
    <h2 class="subtitle">Intern<h2>
    <p>Name: ${Intern.getName()}</p>
    <p>ID: ${Intern.getID()}</p>
    <p>Email: ${Intern.getEmail()}</p>
    <p>School: ${Intern.getSchool()}</p>
   </div>
   `;

   module.exports = newIntern;