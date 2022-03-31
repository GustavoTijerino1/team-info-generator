// const Manager = require('./classes/manager');
// const Engineer = require('./classes/engineer');
// const Intern = require('./classes/intern');
//    
// const allMembers = []
// const internal = require('stream');

const inquirer = require('inquirer')
const fs = require('fs');


const boss = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: "What is your Manager's name?",
      name: 'name',
    },
    {
      type: 'input',
      message: "What is the Manager's email? ",
      name: 'email',
    },
    {
      type: 'input',
      message: "What is the Manager's Id? ",
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the office number for the manager?',
      name: 'officeNumber',
      
    },
  ])

.then ((response) => {

  
  fs.writeFile('index.html', 
    `
    
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team!</title>
        <link rel="stylesheet" href="./assets/css/style.css" />
      </head>
      <body>
        <header>
            <marquee behavior="alternate" scrollamount="10">
            <h1>This is your Team!</h1>
            </marquee>
        </header>
          <main>
            <div class="container">
              <div class="title">
                <h2 >${response.name}<!--name--></h2>
                <h3>👨‍💼 Manager</h3>
              </div>
              <ul>
                <li>
                Email:  <a href="mailto:${response.email}.com">${response.email}</a> <!-- email -->
                </li>
                <li>
                Id: ${response.id} <!-- id -->
                </li>
                <li>
                Office #: ${response.officeNumber} <!-- office number -->
                </li>
              </ul>
            </div>
           </main>
      </body>
    </html>
    
           
           
           `, (err) =>
           err ? console.error(err) : console.log('HTML file created')
           );
           teamMem()
          });
        }
        
        boss()
        
        
        const employee = () => {
          return inquirer.prompt([

    {
      
      type: 'input',
      message: 'What is this team members name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is this team members ID number?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is this team members email?',
      name: 'email',
    },
    { 
      type: 'input',
      message: 'What is this team members GitHub profile?',
      name: 'github',

    },
    
   
    
  ]).then( choice => {
    
    fs.appendFileSync('index.html', 
    `
  <main>
    <div class="container">
      <div class="title">
        <h2 >${choice.name}<!--name--></h2>
        <h3>👩‍🔧 Engineer</h3>
      </div>
      <ul>
        <li>
        Email: <a href="mailto:${choice.email}.com">${choice.email}</a> <!-- email -->
        </li>
        <li>
        Id: ${choice.id}   <!-- id -->
        </li>
        <li>
        <a href="https://github.com/${choice.github}"target="_blank"> GitHub</a> <!-- github  -->
        </li>
      </ul>
    </div>
  </main>
    `
    , (err) =>
    err ? console.error(err) : console.log('HTML file created')
    );
    teamMem()
  });
}




const intern = () => {
  return inquirer.prompt([
    {
      
      type: 'input',
      message: 'What is this team members name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is this team members ID number?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is this team members email?',
      name: 'email',
    },

    { 
      type: 'input',
      message: 'What school did you go?',
      name: 'school',
    },

    
  ]).then( response => {

    fs.appendFile('index.html', 
    `
    <main>
      <div class="container">
            <div class="title">
            <h2 >${response.name}<!--name--></h2>
            <h3>🧑‍🎓 Intern</h3>
          </div>
              <ul>
              <li>
              Email: <a href="mailto:${response.email}.com">${response.email}</a> <!-- email -->
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
      `
      , (err) =>
    err ? console.error(err) : console.log('HTML file created')
    );
    teamMem()
  });
}


const done = () => {
  return null
}

const teamMem = () => {
  return inquirer.prompt([
 {

      type: 'list',
      name: 'role',
      message: "Please choose your employee's role",
      choices: ['Engineer', 'Intern', 'Done']
    },
  ]) 
  .then( choice => {
    if (choice.role === 'Intern' ) {
      intern()
    } else if (choice.role === 'Engineer') {
      
      employee()

  } else  {
    done()

    }
  })
}