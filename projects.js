const projects = [
    {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    }
]

const printToDom = (divId, textToPrint) => {
    const selctedDiv = document.getElementById(divId);
    selctedDiv.innerHTML = textToPrint;
}

const createProjectCards = () => {
    let domString = "";
    for (let i = 0; i < projects.length; i++) {
        domString += `<div class="card mx-auto w-75 text-body" id=projectCard>`;
        domString +=  `<header>`;
        domString +=    `<h1>${projects[i].title}</h1>`;
        domString +=  `</header>`;
        domString +=  `<img src="${projects[i].screenshot}"/>`;
        domString +=  `<div>`;
        domString +=     `<p>${projects[i].technologiesUsed}</p>`;
        domString +=     `<p>${projects[i].available}</p>`;
        domString +=     `<a href="${projects[i].url}">Link to Project</a>`;
        domString +=     `<br>`;
        domString +=     `<a href="${projects[i].githuburl}">Link to GitHub</a>`; 
        domString +=  `</div>`;   
        domString += `</div>`
    }
    printToDom('projectsToDom', domString);
}


const init = () => {
    createProjectCards();    
}

init();
