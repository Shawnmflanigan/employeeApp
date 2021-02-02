const employee = require("./employee");

class Engineer extends employee {
    constructor(name, id, email, gitHub) {
        super (name, id, email); 
        this.gitHub = gitHub;
    }
//Methods go here
    getGitHub () {
        return this.gitHub;
    }
}

//const engineer = new Engineer ("name", 'id', "email", "gitHub");

module.exports = Engineer
