const fs = require("fs");
const inquirer = require("inquirer");

// Import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 




// Import HTML templates


const generatePage = require("./src/generatePage.js")

let teamArray = [];


// // Team members start off as an empty array

inquirer.prompt([
  {
        name: 'role',
        type: 'list',
        message: 'Welcome to the Team Profile Generator! Are you ready to begin?',
        choices: ["yes", "no"],
       
       
    

        
      },
    ])
  .then((answers) => {
    if(answers.role === "yes"){
    addTeam();
    }else if(answers.role === "no"){
      console.log("maybe next time");
    }
  })

  

    
 function addTeam(){
    
      inquirer.prompt([{
        type: "list",
        message: "What type of employee would you like to add to your team?",
        name: "addEmployeePrompt",
        choices: ["Manager", "Engineer", "Intern", "No more team members are needed"]
      }])
      .then((answers) => {
        if(answers.addEmployeePrompt === "Manager"){
          addManager();
        }else if(answers.addEmployeePrompt === "Engineer"){
          addEngineer();
        }else if(answers.addEmployeePrompt === "Intern"){
          addIntern();
        }else if(answers.addEmployeePrompt === "No more team members are needed"){
          writeFile();
        }
      })
    }
    
//     // .then(function (userInput) {
//     //     switch(userInput.addEmployeePrompt) {
//     //       case "Manager":
//     //         addManager();
//     //         break;
//     //       case "Engineer":
//     //         addEngineer();
//     //         break;
//     //       case "Intern":
//     //         addIntern();
//     //         break;
  
//     //       default:
//     //         buildHtml();
//     //     }
//     //   })
//     // }
//     // function ADD manger
    function addManager() {
      inquirer.prompt ([
        
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?"
        },
    
        {
          type: "input",
          name: "managerId",
          message: "What is the manager's employee ID number?"
        },
    
        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email address?"
        },
    
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the manager's office number?"
        }
    
      ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        addTeam();
      });
    
    }
    // function Add Engineer
    function addEngineer() {
      inquirer.prompt([
        
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?"
        },
  
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's employee ID number?" 
        },
  
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email address?"
        },
  
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?"
        }
  
      ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        addTeam();
      });
  
    }
    // function Add Intern
    function addIntern() {
      inquirer.prompt([
        
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?"
        },
  
        {
          type: "input",
          name: "internId",
          message: "What is the intern's employee ID number?" 
        },
  
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email address?"
        },
  
        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?"
        }
  
      ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        addTeam();
      });
  
    }
    

function writeFile(){
  console.log("file successfully written");
  fs.writeFile("./output/index.html", generatePage(teamArray), () => {} )
  //fs.writeFileSync("./output/index.html", generatePage(teamArray), 'utf-8' )

}     
    
//     // addTeam();


  

 
  
  
 