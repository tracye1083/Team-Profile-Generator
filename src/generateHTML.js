const generateTeam = team => {
    const generateManager = manager => {
        return `
        <section class='manager col-md-4'>
        <div class='card' style='width: 18rem;'>
            <div class='card-header'>
                ${manager.getName()}
                <hr>
                <i class="fas fa-crown"></i><h3> Manager</h3>
            </div>
            <ul class='list-group list-group-flush'>
            <li class='list-group-item'>Employee ID: ${manager.getId()}</li>
              <li class='list-group-item'>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class='list-group-item'>Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
          </div>
        </section>`
    }
    const generateEngineer = engineer => {
        return `
        <section class='engineer col-md-4'>
        <div class='card' style='width: 18rem;'>
            <div class='card-header'>
                ${engineer.getName()}
                <hr>
                <i class="fas fa-laptop-code"></i><h3> Engineer</h3>
            </div>
            <ul class='list-group list-group-flush'>
            <li class='list-group-item'>Employee ID: ${engineer.getId()}</li>
              <li class='list-group-item'>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class='list-group-item'>Github: <a href='http://www.github.com/${engineer.getGithub()}' target='_blank'>${engineer.getGithub()}</a></li>
            </ul>
          </div>
        </section>`
    }
    const generateIntern = intern => {
        return `
        <section class='intern col-md-4'>
        <div class='card' style='width: 18rem;'>
            <div class='card-header'>
                ${intern.getName()}
                <hr>
                <i class="fas fa-child"></i><h3> Intern</h3>
            </div>
            <ul class='list-group list-group-flush'>
            <li class='list-group-item'>Employee ID: ${intern.getId()}</li>
              <li class='list-group-item'>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class='list-group-item'>School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </section>`
    }
    const html = [];
    html.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)));
    html.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)).join(''));
    html.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)).join(''));
    return html.join('');
}
module.exports = team => {
    return `
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='stylesheet' href='style.css'>
    <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0' crossorigin='anonymous'>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;700&display=swap">
    <title>Team Profile</title>
</head>
<body>
  <nav class='navbar mb-3 py-4'>
    <div class='container-fluid justify-content-center'>
      <span class='navbar-brand mb-0'><h2><i class="fas fa-sitemap"></i> My Team <i class="fas fa-sitemap"></i></h2></span>
    </div>
  </nav>
  <main>
  <div class='container-fluid'>
  <div class='row'>
     ${generateTeam(team)}
     </div>
     </div>
  </main>
    <script src='../index.js'></script>
</body>
</html>`;
}