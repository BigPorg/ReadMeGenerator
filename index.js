const inquirer = require("inquirer");
const fs = require("fs");
const gm = require("./generateMarkdown");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create and array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter title",
        name: "title",
    },
    {
        type: "input",
        message: "Enter description",
        name: "description",
    },
    {
        type: "input",
        message: "Enter install instructions",
        name: "instructions",
    },
    {
        type: "input",
        message: "Enter usage",
        name: "usage",
    },
    {
        type: "list",
        message: "Choose a license",
        name: "license",
        choices: ["MIT", "Mozilla", "Apache", "GNU APLv3", "GNU GPLv3", "GNU LGPLv3", "Boost", "Unilicense"],
    },
    {
        type: "input",
        message: "Enter contributors",
        name: "contributors",
    },
    {
        type: "input",
        message: "Enter testing instructions",
        name: "testing",
    },
    {
        type: "input",
        message: "Enter email",
        name: "email",
    },
    {
        type: "input",
        message: "Enter GitHub",
        name: "github",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Successfully created a README")
    );
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile("README.md", generateMarkdown(data))
        })
}

init();