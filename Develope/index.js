const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
// const Manager = require('./lib/Manager');
// const Intern = require('./lib/Intern');
// const Engineer = require('./lib/Engineer');
//const generateHtml = require('./src/template')
//const Employee = require('/Employee');
const teamMembers = [];


const promptUser = () => {
    
 // const generateTeam = () => {

  inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message:"What is this Emplyee's role?",
      choices: 
      ['Manager',
      'Engineer', 
      'Intern'],
    }
  ])

.then(answers => {
  if (answers.employeeChoice === 'Manager') {
      generateManager();
  } else if (answers.employeeChoice === 'Engineer'){
      generateEngineer();
  } else if (answers.employeeChoice === 'Intern') {
    generateIntern();
}else {
      return generateTeam();
  }
})
}

const generateManager = () => {
  inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Waht is the Manager's name?"
        },
        {
          type: 'input',
          name: 'id',
          message: "What is the Manager's ID number?"
      },
        { type: 'input',
        name: 'email',
        message:"What is the Manager's email address?"
      },
      {
        type: 'input',
        name: 'managerOfficeNum',
        message: "What is the Manager's Office Number?"
    }
  ])
  .then(answers => {
    const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNum,
    )
    teamMembers.push(manager); 
    pickEmployee();
  })

};


const generateEngineer = () => {
  inquirer.prompt([
      {
          type: 'input',
          name: 'engineerName',
          message:"What is the Engineer's name?"
      },
      {
          type: 'input',
          name: 'engineerId',
          message: "What is the Engineer's ID Number?"
      },
      {
          type: 'input',
          name: 'engineerEmail',
          message: "What is the Engineer's Email?"
      },
      {
          type: 'input',
          name: 'engineerGithub',
          message: "What is the Engineer's Github user name?"
      }
   ])
   .then(answers => {
    const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub,
    )
    teamMembers.push(engineer);
    pickEmployee();
})
};

    const generateIntern = () => {
      inquirer.prompt([
          {
              type: 'input',
              name: 'internName',
              message: "What is the Intern's name?"
          },
          {
              type: 'input',
              name: 'internId',
              message: "What is the Intern's ID Number?"
          },
          {
              type: 'input',
              name: 'internEmail',
              message: "What is the Intern's Email?"
          },
          {
              type: 'input',
              name: 'internSchool',
              message: "What School did the Intern go to?"
          }
        ])
        .then(answers => {
          const intern = new Intern(
              answers.internName,
              answers.internId,
              answers.internEmail,
              answers.internSchool,
          )
          teamMembers.push(intern);
          pickEmployee();
      })
      };
    //};


// const init = () => {
//   promptUser()
//     .then((answers) => writeFileAsync('index.html', generateHTML(teamMembers)))
//     .then(() => console.log('Successfully wrote to util'))
//     .catch((err) => console.error(err));
// };

// // Function call to initialize app
// init();
