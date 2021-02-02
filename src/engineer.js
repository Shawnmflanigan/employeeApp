const Engineer = require("../lib/Engineer");

 const newEng = (Engineer) => `
  <div class="newEmp">
    <h2>${Engineer.getRole()}<h2>
    <p>${Engineer.getName()}</p>
    <p>${Engineer.getID()}</p>
    <p>$${Engineer.getEmail()}
    <p>${Engineer.getGitHub()}</p>
   </div>
   `;

   module.exports = newEng;