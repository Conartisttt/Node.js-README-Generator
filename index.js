//packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


//an array of questions for user input
const questions = [
    "What is the name of your file? ex: README",
    "What is the title of your application?",
    "What is the description of your application?",
    "What technologies were used to create the application?",
    "How do users install the application?",
    "How do users use the application?",
    "What are the contribution guidelines for your application?",
    "How can you test the application?",
    "What license is the application covered under?",
    "What is your GitHub username?",
    "What is your email address?",
    "Add any credits to project:"
];

//a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + '.md', data, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
}

//a function to initialize app and prompt user
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'file',
                validate: (answer) => !answer ? "You must provide a filename" : true
            },
            {
                type: 'input',
                message: questions[1],
                name: 'title',
                validate: (answer) => !answer ? "You must provide a title" : true
            },
            {
                type: 'input',
                message: questions[2],
                name: 'description',
                validate: (answer) => !answer ? "You must provide a description" : true
            },
            {
                type: 'checkbox',
                message: questions[3],
                choices: [" HTML", " JavaScript", " CSS", " Java", " React"],
                name: 'technologies',
                validate: (answer) => !answer ? "You must provide at least one technology" : true
            },
            {
                type: 'input',
                message: questions[4],
                name: 'installation',
                validate: (answer) => !answer ? "You must provide a installation instructions" : true
            },
            {
                type: 'input',
                message: questions[5],
                name: 'usage',
                validate: (answer) => !answer ? "You must provide usage information" : true
            },
            {
                type: 'input',
                message: questions[6],
                name: 'contributing',
                validate: (answer) => !answer ? "You must provide contribution guidelines" : true
            },
            {
                type: 'input',
                message: questions[7],
                name: 'tests',
                validate: (answer) => !answer ? "You must provide how to test your application" : true
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
                    {
                        name: "None",
                        value: "None",
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
            const file = response.file;
            writeToFile(file, generateMarkdown(response));
            ;
        }
        );
}

// Function call to initialize app
init();