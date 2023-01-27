const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");
const engineer = require("./lib/Employee");
const intern = require("./lib/Intern");
const manager = require("./lib/manager");

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the team manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the team manager's employee id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the team manager's email address?"
    },
    {
        type: "input",
        name: "office",
        message: "What is the team manager's office number?"
    },
    {
        type: "list",
        name: "next",
        message: "What would you like to do next?",
        choices: ["add engineer", "add intern", "finish and exit"]
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's employee id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github?"
    },
    {
        type: "list",
        name: "next",
        message: "What would you like to do next?",
        choices: ["add engineer", "add intern", "finish and exit"]
    }
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's employee id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?"
    },
    {
        type: "input",
        name: "school",
        message: "What is the team intern's school?"
    },
    {
        type: "list",
        name: "next",
        message: "What would you like to do next?",
        choices: ["add engineer", "add intern", "finish and exit"]
    }
];