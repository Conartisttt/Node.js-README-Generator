// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    "What is the name of your file? ex: README.md",
    "What is the title?",
    "What is the description?",
    "What technologies were used to create the application?",
    "How do users install the application?",
    "How do users use the application?",
    "What are the contribution guidelines?",
    "How can you test the application?",
    "What license is the application covered under?",
    "What is your GitHub username?",
    "What is your email address?",
    "Add any credits to project:"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'file',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'description',
            },
            {
                type: 'checkbox',
                message: questions[3],
                choices: [" HTML", " JavaScript", " CSS", " Java", " React"],
                name: 'technologies',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'contributing',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'tests',
            },
            {
                type: 'list',
                message: questions[8],
                choices: [
                    {
                        name: "MIT",
                        value: "MIT",
                    },
                    {
                        name: "Apache",
                        value: "Apache",
                    },
                    {
                        name: "Boost",
                        value: "Boost",
                    },
                    {
                        name: "Eclipse",
                        value: "Eclipse",
                    },
                ],
                name: 'license',
            },
            {
                type: 'input',
                message: questions[9],
                name: 'github',
            },
            {
                type: 'input',
                message: questions[10],
                name: 'email',
            },
            {
                type: 'input',
                message: questions[11],
                name: 'credits',
            },
        ])
        .then((response) => {
            generateData(response);
        }
        );
}

function generateData(response) {
    console.log(response.license)
    const file = response.file;
    const license = response.license;
    let badgeLink = ``;
    switch (license) {
        case 'MIT':
            badgeLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
        case 'Apache':
            badgeLink = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'Boost':
            badgeLink = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
            break;
        case 'Eclipse':
            badgeLink = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
            break;

        default:
            break;
    }
    const content = `
# ${response.title}
${badgeLink}

## Table of Contents
[Description](#description)
<br>
[Technologies Used](#technologies-used)
<br>
[Installation](#installation)
<br>
[Usage](#usage)
<br>
[Contributing](#contributing)
<br>
[Tests](#tests)
<br>
[License](#license)
<br>
[Questions](#questions)
<br>
[Credits](#credits)

## Description
${response.description}

## Technologies Used
${response.technologies}

## Installation
${response.installation}

## Usage
${response.usage}

## Contributing
${response.contributing}

## Tests
${response.tests}

## License
This project is covered under the ${response.license} license.

## Questions
For any questions about the application, email me at: ${response.email} or find me on github at: ${response.github}

## Credits
${response.credits}
    
    `;
    writeToFile(file, content)
}

// Function call to initialize app
init();
