//dependencies
const generateMarkdown = require("./util/generatorMarkdown");
//fs
const fs = require("fs");
//inquierer
const inquirer = require("inquirer");
//add table of contents and links
const questions = [{
    type: "input",
    message: "What is the title?",
    name: "title",
},
{
    type: "input",
    message: "write desciprtion of project",
    name: "description",
},
// {
//   type: "input",
//   message: "what are the table of contents",
//   name: "TC",
// },
{
    type: "input",
    message: "what type of installation",
    name: "installation",
},
{
    type: "input",
    message: "how to use project",
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
    message: "who contributed",
    name: "contribution",
},
{
    type: "input",
    message: "did you run any tests",
    name: "tests",
},
{
    type: "input",
    message: "what is your Github username",
    name: "github",
},
{
    type: "input",
    message: "and lastly, what is your email",
    name: "email",
},
    // {
    //   type: "input",
    //   message: "Questions?",
    //   name: "question",
    // },
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