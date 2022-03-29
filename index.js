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
      message: "What is the employee's email? ",
      name: 'email',
    },
    {
      type: 'input',
      message: "What is the employee's Id? ",
      name: 'id',
    },
    {
      type: 'list',
      message: 'Do you want add another employee?',
      name: 'linkedin',
      choices: ['Engineer',
                'Intern',
              'No more employees']
    },
    {
      type: 'input',
      message: 'What is your github username?',
      name: 'gitHub',
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
        <title>My Team!</title>
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
      <header>
        <marquee behavior="alternate" scrollamount="10">
        <h1>This is your Team!</h1>
      </header>
      </marquee>
      <main>
        <div class="container">
            <div class="title">
              <h2 >${response.name}<!--name--></h2>
                <h3>👨‍💼 Manager</h3>
             </div>
           <ul>
             <li>
              Email:  <a href="${response.email}.com"target="_blank">${response.email}</a> <!-- email -->
             </li>
             <li>
                Id: ${response.id} <!-- id -->
             </li>
             <li>
               Office #: ${response.officeNum} <!-- office number -->
             </li>
           </ul>
        </div>
        <div class="container">
            <div class="title">
              <h2 >${response.name}<!--name--></h2>
              <h3>👩‍🔧 Engineer</h3>
            </div>
           <ul>
             <li>
              Email: <a href="${response.email}.com"target="_blank">${response.email}</a> <!-- email -->
             </li>
             <li>
                Id: ${response.id}   <!-- id -->
             </li>
             <li>
             GitHub:  <a href="https://github.com/${response.gitHub}"target="_blank"></a> <!-- github  -->
             </li>
           </ul>
        </div>
        <div class="container">
          <div class="title">
            <h2 >${response.name}<!--name--></h2>
            <h3>🧑‍🎓 Intern</h3>
          </div>
              <ul>
                <li>
                   Email: <a href="${response.email}.com"target="_blank">${response.email}</a> <!-- email -->
                </li>
                <li>
                   Id: ${response.id}   <!-- id -->
                </li>
                <li>
                  School: ${response.school} <!-- school -->
                </li>
              </ul>
        </div>
      </main>
    </body>
    </html>
    
    `, (err) =>
    err ? console.error(err) : console.log('HTML file created')
    );
    });