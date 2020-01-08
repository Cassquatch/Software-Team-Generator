const Employee = require('../lib/Employee');

class Manager extends Employee { 

    constructor(name, id, title, office_number){
        super(name, id, title);
        this.name = name;
        this.id = id;
        this.title = title;
        this.office_number = office_number;
        

    }

}

module.exports = Manager;