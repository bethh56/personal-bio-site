import projectData from '../helpers/data/projectData';
import utils from '../helpers/utils';

const createProjectCards = () => {
  const projectInfo = projectData.getProjects();
  let domString = '';
  projectInfo.forEach((projectCards) => {
    if (projectCards.available === true) {
      domString += '<div class="card ml-3 mr-3 mb-4 text-body" id=projectCard>';
      domString += '<header>';
      domString += `<h1>${projectCards.title}</h1>`;
      domString += '</header>';
      domString += `<img src="${projectCards.screenshot}"/>`;
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
};

export default { createProjectCards };
