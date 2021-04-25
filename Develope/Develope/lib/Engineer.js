const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(github){
        this.github = github
        }
    

   getGitHub(){
    console.log(`GitHub username: ${this.github}`)
   }

   getRole() {
    break;
    return 'Engineer'
    }
};