import projectData from '../helpers/data/projectData';
import utils from '../helpers/utils';

const createProjectCards = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = '';
      projects.forEach((projectCards) => {
        if (projectCards.available === true) {
          domString += '<div class="projectCard col-3" id=projectCard>';
          domString += `<img src="${projectCards.screenshot}"/>`;
          domString += '<header>';
          domString += `<h4>${projectCards.title}</h4>`;
          domString += '</header>';
          domString += '<div>';
          domString += `<h6>${projectCards.description}</h6>`;
          domString += `<p>${projectCards.technologiesUsed}</p>`;
          domString += `<div class="${projectCards.available}"></div>`;
          domString += `<a class="text-dark" href="${projectCards.url}">View Project</a> || <a class="text-dark" href="${projectCards.githuburl}">View on GitHub <i class="fab fa-github"></i></a>`;
          domString += '</div>';
          domString += '</div>';
        }
      });
      utils.printToDom('projectsToDom', domString);
    })
    .catch((err) => console.error('it is not working! neat.', err));
};

export default { createProjectCards };
