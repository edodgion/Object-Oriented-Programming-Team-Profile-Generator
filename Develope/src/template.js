const generateManager = (answers) => {
    return `<div class='container'>
    <ul class="ul">
    <div class="row">
  <div class="col-md-3">
  <div class="card cardbody">
       <div class="card-header font: text-white" style="background: #175fcc">
       <h1>${answers.name}</h1>
              <div class="fas fa-mug-hot">
                ${answers.getRole()}
              </div>
        </div>
  <div class="card-body">
      <form role="form">          
      <div class="form-group">
         <p>  ID:  ${answers.id} </p>
      </div>
      <div class="form-group">
         <p>  Email:  <a href="${answers.email}">${answers.email}</a></p>
      </div>
      <div class="form-group">
         <p> Office Number: ${answers.officeNumber}</p>                 
      </div>   
                   
      </form>
  </div>
  </div>
</div>`;
};
const generateEngineer = (answers) => {
    return `<div class='container'>
    <ul class="ul">
    <div class="row">
  <div class="col-md-3">
  <div class="card cardbody">
  <div class="card-header font: text-white" style="background: #175fcc">
           <h1> ${answers.name} </h1>
              <div class="fas fa-glasses">
              <br>
              ${answers.getRole()}
              </div>
              </div>
  <div class="card-body">
      <form role="form">          
      <div class="form-group">
       <p>ID: ${answers.id} </p>
      </div>
      <div class="form-group">
       <p>Email:<a href="${answers.email}"> ${answers.email}</a></p>
      </div>
      <div class="form-group">
        <p>GitHub:<a href="${answers.github}"> ${answers.github} </a></p>            
      </div>                
      </form>
  </div>
  </div>
</div>`;
};
const generateIntern = (answers) => {
    return `<div class='container'>
    <ul class="ul">
    <div class="row">
  <div class="col-md-3">
  <div class="card cardbody">
  <div class="card-header font: text-white" style="background: #175fcc">
  <h1> ${answers.name} </h1>
              <div class="fas fa-user-graduate">
              <br>
             ${answers.getRole()}
              </div>
              </div>
  <div class="card-body">
      <form role="form">          
      <div class="form-group">
       <p>ID: ${answers.id} </P>
      </div>
      <div class="form-group">
       <p>Email:<a href="${answers.email}"> ${answers.email}</a> </P>
      </div>
      <div class="form-group">
      <p>School: <a href="${answers.school}"> ${answers.school}</p>            
      </div>                
      </form>
  </div>
  </div>
</div>`;
};
const generateTeam = (answers) => {
    let htmlString = "";
    
    answers.forEach((element) => {
        console.log(element)
      
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
const generateHtml = (answers) => {
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
  <div class="jumbotron jumbotron-fluid" style='background-color: #be4242;'>
  <div class="container">
  <h1 class="display-4 text-center font: text-white p-3"><b> My Team </b></h1>
  </div>
</div>
      ${generateTeam(answers)}
  
  </body>
  </html>`;
};


module.exports = generateHtml;