const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where are you from?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Tell us about yourself.',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'What is your linkedin url?',
      name: 'linkedin',
    },
    {
      type: 'input',
      message: 'What is your github url?',
      name: 'github',
    },
  ])
  .then((response) => {
    fs.appendFile('index.html', 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">${response.name}<!--name--></h1>
              <p class="lead">${response.location}<!--location--></p>
              <p class="lead">${response.bio}<!--bio--></p>
              <p class="lead">${response.linkedin}<!--LinkdIn URL--></p>
              <p class="lead">${response.github}<!--GitHub URL--></p>
            </div>
          </div>
    </body>
    </html>
    `, (err) =>
    err ? console.error(err) : console.log('HTML file created')
    );
    });