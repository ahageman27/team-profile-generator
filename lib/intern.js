const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {

    }
}

module.exports = Intern;