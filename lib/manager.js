const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, email, id, office) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }

    getRole() {

    }
}

module.exports = Manager;