const Manager = require("../lib/manager");

 const newMan = (Manager) => `
  <div class="newEmp">
    <h2>${Manager.getRole()}<h2>
    <p>${Manager.getName()}</p>
    <p>ID: ${Manager.getID()}</p>
    <p>Email: ${Manager.getEmail()}<p>
    <p>OfficeNumber: ${Manager.getofficeNumber()}</p>
   </div>
   `;

   module.exports = newMan;