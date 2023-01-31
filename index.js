//import npm packages
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

//import classes
const Engineer = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/manager");

//output directory, path and file name
const dist_dir = path.resolve(_dirname, "dist");
const output = path.join(dist_dir, "index.html");

//html template
const generateHTML = require("./src/generateHTML");

//empty array of team members
const team = [];

//function to choose next step 
function menu() {
    inquirer
        .promt([
            {
                type: "list",
                name: "role",
                messages: "Would you like to add an engineer, intern or finish building team?",
                choices: ["Engineer", "Intern", "Finish"]
            },
        ])
        .then((val) => {
            if (val.role === "Engineer"){
                addEngineer();
            } else if (val.role === "Intern") {
                addIntern();
            } else {
                createTeam();
            }
        });
};

//function to add manager
function addManager() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter a name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's employee id?",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("Please enter an id.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email address?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter an email.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "office",
            message: "What is the team manager's office number?",
            validate: office => {
                if (office) {
                    return true;
                } else {
                    console.log("Please enter an office number.");
                    return false;
                }
            }
        },
        ])
        .then((val) => {
            const manager = new Manager(val.name, val.id, val.email, val.office);
            console.table(manager);
            team.push(manager);
            menu();
        })
};

//function to add engineer
function addEngineer() {
    inquirer
        .prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's employee id?",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("Please enter an id.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter an email.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github?",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("Please enter github account info.");
                    return false;
                }
            }
        }
        ])
        .then((val) => {
            const engineer = new Engineer(val.name, val.id, val.email, val.github);
            console.table(engineer);
            team.push(engineer);
            menu();
        })
};

//function to add intern
function addIntern() {
    inquirer
        .prompt ([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Please enter name.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's employee id?",
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log("Please enter an id.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email address?",
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        consolelog("Please enter an email.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "school",
                message: "What is the team intern's school?",
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log("Please enter a school.")
                        return false;
                    }
                }
            },
        ])
        .then((val) => {
            const intern = new Intern(val.name, val.id, val.edmail, val.school);
            console.table(intern);
            team.push(intern);
            menu();
        })
}

function createTeam() {
    if (!fs.existsSync(dist_dir)) {
        fs.mkdirSync(dist_dir);
    } else {
        fs.writeFileSync(output, generateHTML(team), "utf-8");
        console.log('HTML file created in the dist folder');
    }
}

function startApp() {
    addManager();
}

startApp();
