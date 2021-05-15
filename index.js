// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamArray = [];
const idArray = [];

const output_dir = path.resolve(__dirname, "dist");
const outputPath = path.join(output_dir, "team.html");
const render = require("./src/generateHTML");


const addManager = () => {
    return inquirer
        .prompt([{
                name: "name",
                type: "input",
                message: "What is the name of the manager of this team?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log(" Please enter the manager's name to continue.");
                        return false;
                    }
                }
            },
            {
                name: "id",
                type: "input",
                message: "Please enter the manager's ID number.",
                validate: idInput => {
                    if (isNaN(idInput)) {

                        console.log(' That is not a number.')
                        return false;
                    } else if (!idInput) {
                        return false;
                    } else
                        return true;
                }


            },
            {
                type: "input",
                name: "email",
                message: "Please enter the manager's e-mail address.",
                validate: emailInput => {
                    if (emailInput) {
                        return true
                    } else {
                        console.log(" Please enter the manager's e-mail address to continue.")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
                validate: officeNumberInput => {
                    if (isNaN(officeNumberInput)) {
                        console.log(' Please enter a valid office number to continue.')
                        return false;
                    } else if (!officeNumberInput) {
                        return false
                    } else {
                        return true;
                    }
                }
            }
        ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);
            teamArray.push(manager);
            idArray.push(id)
            console.log(manager);
            addEmployee();
        })
};
const addEmployee = () => {
    return inquirer.prompt([{
        type: "list",
        name: "role",
        message: "Choose the next employee's role.",
        choices: ['Engineer', 'Intern', "I'm done!"]
    }]).then(userChoice => {
        switch (userChoice.role) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    })
}
const addEngineer = () => {
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(" Please enter the engineer's name to continue.")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's ID number.",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log(" That is not a number.")
                    return false;
                } else if (!idInput) {
                    return false
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the engineer's e-mail address.",
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log(" Please enter the engineer's e-mail address to continue.")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the engineer's Github username.",
            validate: githubInput => {
                if (githubInput) {
                    return true
                } else {
                    console.log(" Please enter the engineer's Github username to continue.")
                }
            }
        },
    ]).then(engineerInput => {
        const { name, id, email, github } = engineerInput;
        const engineer = new Engineer(name, id, email, github);
        teamArray.push(engineer);
        idArray.push(id)
        console.log(engineer);
        addEmployee();
    })
}
const addIntern = () => {
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(" Please enter the intern's name to continue.")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the intern's ID number.",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log(" That is not a number.")
                    return false;
                } else if (!idInput) {
                    return false
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the intern's e-mail address to continue",
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log(" Please enter the intern's e-mail address to continue.")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the intern's school.",
            validate: schoolInput => {
                if (schoolInput) {
                    return true
                } else {
                    console.log(" Please enter the name of the intern's school to continue.")
                }
            }
        },
    ]).then(internInput => {
        const { name, id, email, school } = internInput;
        const intern = new Intern(name, id, email, school);
        teamArray.push(intern);
        idArray.push(id)
        console.log(intern);
        addEmployee();
    })
};
const buildTeam = () => {
    if (!fs.existsSync(output_dir)) {
        fs.mkdirSync(output_dir)
    }
    fs.writeFileSync(outputPath, render(teamArray), 'utf-8')
    console.log('Success! You may view your generated HTML page in the dist folder.')
}
addManager();