class employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
// Methods go here
    

    getName () {
        return this.name
    }

    getID () {
        return this.id
    }


    getEmail () {
        return this.email
    }


    getRole () {
    return this.role;
    }
};    

//console.log
console.log (new employee);


module.exports = employee