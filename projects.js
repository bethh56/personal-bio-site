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
        domString += `<div>`;
        domString += `<header>`;
        domString += `<title>${projects[i].title}</title>`;
        domString += `</header>`;


        domString += `</div>`
    }
    printToDom('projects' domString);
}

createProjectCards();