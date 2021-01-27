class employee {
    constructor(name, id, role) {
        this.name = name;
        this.id = id;
        this.role = role;
    }
// Methods go here
    

getName () {
    console.log(`Name: ${ths.name}`)
};

getID () {
    console.log(`ID: ${this.id}`)
};

getEmail () {
    console.log(`Email: ${this.email}`)
};

//getRole () {
//   console.log(`Employee: ${this.role}`)
//};

}

//test consts

const name = "name";
const id = "id";
const email = 'email';
const role = 'employee';

employee.getRole();
employee.getID();
employee.getEmail();
employee.getRole();


module.exports = employee