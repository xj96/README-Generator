//dependencies
const generateMarkdown = require("./util/generatorMarkdown");
//fs
const fs = require("fs");
//inquierer
const inquirer = require("inquirer");
//add table of contents and links
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "title",
},
{
    type: "input",
    message: "Write the desciprtion of the project.",
    name: "description",
},
{
    type: "input",
    message: "How do we install your project?",
    name: "install",
},
{
    type: "input",
    message: "How do we use your project?",
    name: "usage",
},
{
    type: "list",
    message: "what license did you use?",
    choices: ["ISC", "MIT", "Apache", "None"],
    name: "license",
},
{
    type: "input",
    message: "Who contributed?",
    name: "contributors",
},
{
    type: "input",
    message: "Did you run any tests?",
    name: "tests",
},
{
    type: "input",
    message: "What is your Github username?",
    name: "github",
},
{
    type: "input",
    message: "What is your email?",
    name: "email",
},
{
    type: "input",
    message: "Questions?",
    name: "questions",
},
];
// function to append README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
    });
}
// function to init program
function init() {
    inquirer.prompt(questions).then(function (response) {
        const markdownData = generateMarkdown(response);
        writeToFile("readme.md", markdownData);
    });
}
// function to init program
init();
//to make separate readme file
//writeToFile("./output/generated-readme.md", markdownData);