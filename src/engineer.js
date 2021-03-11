const Engineer = require("../lib/Engineer");

 const newEng = (Engineer) => `
  <div class="column is-one-quarter box">
  <h2 class="subtitle">Engineer<h2>
    <p>${Engineer.getName()}</p>
    <p>ID: ${Engineer.getID()}</p>
    <p>Email: ${Engineer.getEmail()}</p>
    <p>GitHub: ${Engineer.getGitHub()}</p>
   </div>
   `;

   module.exports = newEng;