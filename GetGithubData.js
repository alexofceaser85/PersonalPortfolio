const request = new XMLHttpRequest();

request.open("GET", "https://api.github.com/users/alexofceaser85/repos", true);

request.onload = function () {
    const data = JSON.parse(this.response);

    let statusHTML = "";

    data.forEach(element => {
        statusHTML += "<h1 class = 'github-project-name'>" + element.name + "</h1>";
        statusHTML += "<p class = 'github-project-description'>" + element.description + "</div>";
        statusHTML += "<p class = 'github-project-language'>" + element.language + "</div>";
    });

    document.getElementById("project-section").innerHTML = statusHTML;
}

request.send();