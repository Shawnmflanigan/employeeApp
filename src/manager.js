const Manager = require("../lib/manager");

 const newMan = (Manager) => `
 <div class="column is-one-quarter box">
    <h2 class="subtitle">${Manager.getRole()}<h2>
    <p>Name: ${Manager.getName()}</p>
    <p>ID: ${Manager.getID()}</p>
    <p>Email: ${Manager.getEmail()}</p>
    <p>OfficeNumber: ${Manager.getofficeNumber()}</p>
   </div>
   `;

   module.exports = newMan;