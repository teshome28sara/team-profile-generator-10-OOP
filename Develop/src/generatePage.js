const generatePage = team => {
    // create the manager html
    const managerHTML = manager => {
       return `
   <div class="card employee-card">
   <div class="card-header bg-success text-white">
       <h2 class="card-title">${manager.getName()}</h2>
       <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
   </div>
   <div class="card-body">
       <ul class="list-group">
           <li class="list-group-item">ID: ${manager.getId()}</li>
           <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
           <li class="list-group-item">Office number: ${manager.getOffice()}</li>
       </ul>
   </div>
   </div>
       `;
   };
   
   const engineerHTML = engineer => {
       return`
       <div class="dist card bg-success mb-3" style="width: 18rem;" >
       <div class="card-header">
         Engineer <i class="fas fa-chalkboard-teacher"></i>
         </span>
       </div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item">Name:${engineer.name}</li>
         <li class="list-group-item">Employee ID:${engineer.id}</li>
         <li class="list-group-item">GitHub:<a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
         <li class="list-group-item">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
       </ul>
     </div>
       `  
   }
   const internHTML = intern => {
       return`
       <div class="dist card bg-info mb-3" style="width: 18rem;" >
       <div class="card-header">
         Intern <i class="fas fa-baby"></i>
         </span>
       </div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item">Name:${intern.name}</li>
         <li class="list-group-item">Employee ID:${intern.id}</li>
         <li class="list-group-item">School Name:${intern.school}</li>
         <li class="list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
       </ul>
     </div>
       `  
   }
   const generateTeamMemberPage = teamArray => {
       empList = [];
       for (let i = 0; teamArray.length>i; i++){ 
           const role = teamArray[i].getRole();
   
   
           if (role === 'Manager'){ 
               empList.push(managerHTML(teamArray[i]));
           }
           if (role === 'Engineer'){ 
               empList.push(engineerHTML(teamArray[i]));
           }
           if (role === 'Intern'){ 
               empList.push(internHTML(teamArray[i]));
           }
       }
       const  mergedTeam = empList.join(''); 
       return HTMLPage(mergedTeam); 
   
   
   }
   
   const HTMLPage = mergedTeam =>{
       return`
       <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta http-equiv="X-UA-Compatible" content="ie=edge" />
       <link 
         rel="stylesheet" 
         href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
       <link
         rel="stylesheet"
         href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
       />
       <link
         rel="stylesheet"
         href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
         integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
         crossorigin="anonymous"
       />
       <link
         href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
         rel="stylesheet"
       />
       <link rel="stylesheet"
             href="https://fonts.googleapis.com/css?family=Tangerine">
       <link rel="stylesheet" href="./style.css" />
       <title> Team Profile </title>
     </head>
     <body>
     <header>
     <nav class="navbar" >
       <span class="navbar-brand mb-0 h1 w-100 text-center" ><h1> My Team </h1></span>
   </nav>
   </header>
         <main>
       ${mergedTeam}
         </main>
         
     </body>
     <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
     </html> 
       `
   }
   
   return generateTeamMemberPage(team)
}
   
   
   // export to index.html
module.exports = generatePage;