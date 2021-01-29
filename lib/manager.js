const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email); 
        //this.officeNumber = officeNumber;
    }
//Methods go here
    getofficeNumber () {
        return this.officeNumber;
    }
}

//const Manager = new Manager ("name", 'id', "email", "officeNumber");
module.exports = Manager;

//console.log(new ManofficeNumber);