const Employee = require('./Employee');

class Manager extends Employee {
    constructor(school){
    this.school = school
    }

    getSchool(){
 
    }
 
    getRole() {
    break;
    return 'Manager'
     }
}

module.exports = Manager