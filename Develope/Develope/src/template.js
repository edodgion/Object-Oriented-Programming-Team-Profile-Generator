//creating the team by running functions that OUTPUT a string th is HTML
const generateTeam = team =>{
const generateManager = manager => {
    return `<div>HTML ${manager.getName()}</div>`
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html>
<head>
	<title>My Team</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body> 
    <div class="container-fluid">
    <div class="row">
	<div class="col-12 jumbotron mb-3 team-heading">
		<h1 class="text-center">My Team</h1>
	</div>
    </div>
    </div>
    <div class="container">
    <div class="row">
		<div class="team-area col-12 d-flex justify-content-center">
				${generateTeam(team)}
				<ul>
					<li>Coding</li>
					<li>JavaScript</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
		</div>
	</div>
</body>
</html>
    `
 }
};