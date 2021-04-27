const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateHtml = require('./src/template');

const teamMembers = [];

const generateManager = [{
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
        name: 'officeNumber',
        message: "What is the Manager's Office Number?"
    },
    {
      type: "list",
      name: "team",
      message: "Do you want to add a team member? Please select their role.",
      choices: ["Engineer", "Intern", "Generate Team"],
    }
];


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
      },
      {
        type: "list",
        name: "team",
        message: "Do you want to add a team member? Please select their role.",
        choices: ["Engineer", "Intern", "Generate Team"],
    }
   ])
   .then((answers) => {
    teamMembers.push(new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub,
    )
   );
   if (answers.team === "Engineer") {
    generateEngineer();
} else if (answers.team === "Intern") {
    generateIntern();
} else {
    let answers = generateHtml(teamMembers);
    fs.writeFileSync("index.html", answers);
}
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
          },
          {
            type: "list",
            name: "team",
            message: "Do you want to add a team member? Please select their role.",
            choices: ["Engineer", "Intern", "Generate Team"],
        }
        ])
        .then((answers) => {
            teamMembers.push(new Intern(
              answers.internName,
              answers.internId,
              answers.internEmail,
              answers.internSchool,
          )
            );
            if (answers.team === "Engineer") {
                generateEngineer();
            } else if (answers.team === "Intern") {
                generateIntern();
            } else {
                let answers = generateHtml(teamMembers);
                fs.writeFileSync("index.html", answers);
            }
        
      })
      };



  const init = () => {
    inquirer.prompt(generateManager)
    .then(answers => {
  
        teamMembers.push( new Manager(
              answers.name, 
              answers.id, 
              answers.email, 
              answers.officeNumber
        )
              );
        if (answers.team === "Engineer") {
            generateEngineer();
        } else if (answers.team === "Intern") {
            generateIntern();
        } else {
            let answers = generateHtml(teamMembers);
            fs.writeFileSync("index.html", answers);
        }
    });
};

init();
