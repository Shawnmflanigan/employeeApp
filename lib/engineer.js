const employee = require("./employee");

class engineer extends employee {
    constructor(gitHub) {
        this.gitHub = gitHub;
    }
//Methods go here
    getGitHub () {
        this.gitHub;
    }
}


module.exports = engineer