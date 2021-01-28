const employee = require("./employee");

class intern extends employee {
    constructor(name, id, email, school) {
        super (name, id, email); 
        this.school = school;
    }
//Methods go here
    getschool () {
        this.school;
    }
}

const intern = new intern ("name", 'id', "email", "school");
module.exports = intern;

console.log(new school);