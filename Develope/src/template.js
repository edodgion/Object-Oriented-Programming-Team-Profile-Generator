const generateManager = (answers) => {
    return `<div class='container'>
    <ul class="ul"><li>
  <div class="col-md-3">
  <div class="card cardbody">
       <div class="card-header font: text-white" style="background: #1a75ff">
              ${answers.name}<br>
              <div class="fas fa-mug-hot">
                ${answers.getRole()}
              </div>
        </div>
  <div class="card-body">
      <form role="form">          
      <div class="form-group">
         <p> <b> ID: </b> ${answers.id} </p>
      </div>
      <div class="form-group">
         <p> <b> Email: </b> ${answers.email} </p>
      </div>
      <div class="form-group">
         <p> <b>Office Number: </b>${answers.officeNumber}   </p>                 
      </div>   
                   
      </form>
  </div>
  </div>
</div>
</li>`;
};
const generateEngineer = (answers) => {
    return `<div class='container'>
    <ul class="ul"><li>
  <div class="col-md-3">
  <div class="card cardbody">
  <div class="card-header font: text-white" style="background: #1a75ff">
            ${answers.name}<br> 
              <div class="fas fa-glasses">
              <br>
              ${answers.getRole()}
              </div>
              </div>
  <div class="card-body">
      <form role="form">          
      <div class="form-group">
       <p> <b>  ID: </b>  ${answers.id} </p>
      </div>
      <div class="form-group">
       <p> <b>  Email: </b> ${answers.email} </p>
      </div>
      <div class="form-group">
        <p> <b> GitHub: </b> ${answers.gitHub}  </p>            
      </div>                
      </form>
  </div>
  </div>
</div>
</li>`;
};
const generateIntern = (answers) => {
    return `<div class='container'>
    <ul class="ul"><li>
  <div class="col-md-3">
  <div class="card cardbody">
  <div class="card-header font: text-white" style="background: #1a75ff">
              ${answers.name}<br>
              <div class="fas fa-user-graduate">
              <br>
             ${answers.getRole()}
              </div>
              </div>
  <div class="card-body">
      <form role="form">          
      <div class="form-group">
       <p> <b>  ID: </b> ${answers.id} </P>
      </div>
      <div class="form-group">
       <p> <b> Email: </b> ${answers.email} </P>
      </div>
      <div class="form-group">
      <p> <b>  School: </b> ${answers.school} </p>            
      </div>                
      </form>
  </div>
  </div>
</div>
</li>`;
};
const generateCards = (answers) => {
    let htmlString = "";
    
    answers.forEach((element) => {
        console.log(element)
        //generate a card based on role
        if (element.getRole() === "Manager") {
            let string = generateManager(element);
            htmlString += string;
        }
        else if
            (element.getRole() === "Engineer") {
            let string = generateEngineer(element);
            htmlString += string;

        }
        else if
            (element.getRole() === "Intern") {
            let string = generateIntern(element);
            htmlString += string;
        }
    });
    return htmlString;

};
const generateHTML = (answers) => {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/ba0d43019a.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="./dist/style.css"/>
      </head>
  <body>
  <div class="jumbotron jumbotron-fluid" style='background-color: #ff0066;'>
  <div class="container">
  <h1 class="display-4 text-center">My Team</h1>
  </div>
</div>
      ${generateCards(answers)}
  
  </body>
  </html>`;
};
module.exports = generateHTML;