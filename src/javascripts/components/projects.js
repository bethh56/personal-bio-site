import projectData from '../helpers/data/projectData';
import utils from '../helpers/utils';

const createProjectCards = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = '';
      console.error(projects.data);
      projects.forEach((projectCards) => {
        if (projectCards.available === true) {
          domString += '<div class="projectCard col-4" id=projectCard>';
          domString += `<img src="${projectCards.screenshot}"/>`;
          domString += '<header>';
          domString += `<h4>${projectCards.title}</h4>`;
          domString += '</header>';
          domString += '<div>';
          domString += `<p>${projectCards.technologiesUsed}</p>`;
          domString += `<div class="${projectCards.available}"></div>`;
          domString += `<a href="${projectCards.url}">Link to Project</a>`;
          domString += '<br>';
          domString += `<a href="${projectCards.githuburl}">Link to GitHub</a>`;
          domString += '</div>';
          domString += '</div>';
        }
      });
      utils.printToDom('projectsToDom', domString);
    })
    .catch((err) => console.error('it is not working! neat.', err));
};

export default { createProjectCards };
