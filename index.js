// Packages needed for this application
const inquirer = require('inquirer');



const promptUser = () => {
        return inquirer.prompt(questions);
    }
    // An array of questions for user input




// script to start app and such?
// const init = () => {
//     promptUser()
//         .then((answers) => writeFileAsync("README.md", generateMarkdown(answers)))
//         .then(() => console.log("Successfully wrote to README.md!"))
//         .catch((err) => console.error(err));
// };

// Function call to initialize app
init();