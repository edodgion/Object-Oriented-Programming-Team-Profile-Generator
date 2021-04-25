const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
//const Employee = require('/Employee');


const promptUser = () => {
    return inquirer.prompt([
      {
      type: 'input',
      name: 'name',
      message: "Waht is your name?"
      },
      { type: 'input',
      name: 'email',
      message:"What is your email address?"
    },
    {
      type: 'list',
      name: 'role',
      message:"What is your role?",
      choices: 
      ['Manager',
      'Engineer', 
      'Intern'],
    }
])
};

const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('gernerateIndex.html', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to util'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
