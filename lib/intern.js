const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email); 
        //this.school = school;
    }
//Methods go here
    getSchool () {
       return this.school;
    }
}

//const Intern = new Intern ("name", 'id', "email", "school");
module.exports = Intern;

//console.log(new school);