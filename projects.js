const projects = [
    {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/bethh56", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/bethh56"
    },
    {
    title: "Another Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/bethh56", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/bethh56"
    },
    {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/bethh56", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/bethh56"
    }
]

const printToDom = (divId, textToPrint) => {
    const selctedDiv = document.getElementById(divId);
    selctedDiv.innerHTML = textToPrint;
}

const createProjectCards = (projectCards) => {
    let domString = "";
    for (let i = 0; i < projectCards.length; i++) {
        if (projectCards[i].available === true) {
            domString += `<div class="card ml-3 mr-3 mb-4 text-body" id=projectCard>`;
            domString +=  `<header>`;
            domString +=    `<h1>${projectCards[i].title}</h1>`;
            domString +=  `</header>`;
            domString +=  `<img src="${projectCards[i].screenshot}"/>`;
            domString +=  `<div>`;
            domString +=     `<p>${projectCards[i].technologiesUsed}</p>`;
            domString +=     `<div class="${projectCards[i].available}"></div>`;
            domString +=     `<a href="${projectCards[i].url}">Link to Project</a>`;
            domString +=     `<br>`;
            domString +=     `<a href="${projectCards[i].githuburl}">Link to GitHub</a>`; 
            domString +=  `</div>`;   
            domString += `</div>`;
        }    
    }
    printToDom('projectsToDom', domString);
}


const init = () => {
    createProjectCards(projects);    
}

init();
