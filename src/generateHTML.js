const Employee = require("../lib/Employee");

//create team cards 
const teamHTML = (team) => {

    //create manager card
    const managerHTML =  (manager) => 
        `
        <div class="column is-one-third">
            <div class="card employee-card">
                <div class="card-header has-background-info has-text-white p-2 employee-header">
                    <div class="media">
                        <div class="media-left">
                            <i class="material-icons md-48">star</i>
                        </div>
                        <div class="media-content">
                            <p class="title is-4 has-text-white">${manager.name}</p>
                            <p class="subtitle is-6 has-text-white">Manager</p>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <p>ID Number: ${manager.id}</p>
                    <p>Email Address: <a href="mailto:${manager.email}">${manager.email}</p>
                    <p>Office Number: ${manager.office}</p> 
                </div>
            </div>
        </div>
        `
    ;

    //create engineer card
    const engineerHTML =  (engineer) => 
        `
        <div class="column is-one-third">
            <div class="card employee-card">
                <div class="card-header has-background-info has-text-white p-2 employee-header">
                    <div class="media">
                        <div class="media-left">
                            <i class="material-icons md-48">rocket</i>
                        </div>
                        <div class="media-content">
                            <p class="title is-4 has-text-white">${engineer.name}</p>
                            <p class="subtitle is-6 has-text-white">Engineer</p>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <p>ID Number: ${engineer.id}</p>
                    <p>Email Address: <a href="mailto:${engineer.email}">${engineer.email}</p>
                    <p>GitHub: <a href="https://github.com/${engineer.gitHub}" target="_blank"
                    rel="noopener noreferrer">${engineer.github}</p> 
                </div>
            </div>
        </div>
        `
        ;

        //create intern card
        const internHTML =  (intern) => 
        `
        <div class="column is-one-third">
            <div class="card employee-card">
                <div class="card-header has-background-info has-text-white p-2 employee-header">
                    <div class="media">
                        <div class="media-left">
                            <i class="material-icons md-48">school</i>
                        </div>
                        <div class="media-content">
                            <p class="title is-4 has-text-white">${intern.name}</p>
                            <p class="subtitle is-6 has-text-white">Intern</p>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <p>Id Number: ${intern.id}</p>
                    <p>Email Address: <a href="mailto:${intern.email}">${intern.email}</p>
                    <p>School: ${intern.school}</p> 
                </div>
            </div>
        </div>
        `
        ;

        const html = [];

        html.push(
            team
            .filter((employee) => employee.getRole() === "Manager")
            .map((manager) => managerHTML(manager))
            .join("")
        );

        html.push(
            team
            .filter((employee) => employee.getRole() === "Engineer")
            .map((engineer) => engineerHTML(engineer))
            .join("")
        );

        html.push(
            team.filter((employee) => employee.getRole() === "Intern")
            .map((intern) => internHTML(intern))
            .join("")
        );
}


//create main body html
const mainHTML = (team) => 
    `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
        <title> Our Team </title>
    </head>

    <body>

        <section class="hero is-small is-link has-text-centered">
            <div class="hero-body">
            <p class="title">
                Our Team
            </p>
            </div>
        </section>

        <section id="team-container">
            <div class="container is-fluid">
                <div class="columns is-multiline">
                ${teamHTML(team)}
                </div>
            </div>           
        </section>
    </body>
    `
    ;

module.exports = mainHTML;
