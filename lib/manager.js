const employee = require("./employee");

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber;
    }
//Methods go here
    getofficeNumber () {
        this.officeNumber;
    }
}

const manager = new manager ("name", 'id', "email", "officeNumber");
module.exports = manager;

console.log(new officeNumber);