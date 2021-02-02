const Manager = require("../lib/manager");

 const newMan = (Manager) => `
  <div class="newEmp">
    <h2>${Manager.getRole()}<h2>
    <p>${Manager.getName()}</p>
    <p>${Manager.getID()}</p>
    <p>$${Manager.getEmail()}
    <p>${Manager.getofficeNumber()}</p>
   </div>
   `;

   module.exports = newMan;