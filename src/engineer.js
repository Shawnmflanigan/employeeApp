const Engineer = require("../lib/Engineer");

 const newEng = (Engineer) => `
  <div class="tile is-4">
    <h2>Engineer<h2>
    <p>${Engineer.getName()}</p>
    <p>ID: ${Engineer.getID()}</p>
    <p>Email: ${Engineer.getEmail()}</p>
    <p>GitHub: ${Engineer.getGitHub()}</p>
   </div>
   `;

   module.exports = newEng;