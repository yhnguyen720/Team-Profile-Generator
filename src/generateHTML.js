function manager() {
    return`
    <div class="column is-one-third">
        <div class="card" id="manager">
            <div class="card-header has-background-info has-text-white p-2">
                <div class="media">
                    <div class="media-left">
                        <i class="material-icons md-48">star</i>
                    </div>
                    <div class="media-content">
                        <p class="title is-4 has-text-white" id="name"> name </p>
                        <p class="subtitle is-6 has-text-white" id="role"> Manager </p>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <p id="id"> ID </p>
                <p id="email"> email </p>
                <p id="office-number"> office number </p> 
            </div>
        </div>
    </div>
    `
}

function engineer() {
    return `
    <div class="column is-one-third">
        <div class="card" id="engineer">
            <div class="card-header has-background-primary has-text-white p-2">
                <div class="media">
                    <div class="media-left">
                        <i class="material-icons md-48">rocket</i>
                    </div>
                    <div class="media-content">
                        <p class="title is-4 has-text-white" id="name"> name </p>
                        <p class="subtitle is-6 has-text-white" id="role"> Engineer </p>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <p id="id"> ID </p>
                <p id="email"> email </p>
                <p id="github"> github </p> 
            </div>
        </div>
    </div>
    `
}

function intern() {
    return `
    <div class="column is-one-third">
        <div class="card" id="intern">
            <div class="card-header has-background-success has-text-white p-2">
                <div class="media">
                    <div class="media-left">
                        <i class="material-icons md-48">school</i>
                    </div>
                    <div class="media-content">
                    <p class="title is-4 has-text-white" id="name"> name </p>
                    <p class="subtitle is-6 has-text-white" id="role"> Intern </p>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <p id="id"> ID </p>
                <p id="email"> email </p>
                <p id="school"> school </p> 
            </div>
        </div>
    </div>
    `
}


function generateHTML() {
    return`
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


                </div>
            </div>           
        </section>
    </body>
    `
}