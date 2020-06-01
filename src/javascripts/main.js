import projects from './components/projects';
import '../styles/main.scss';
import utils from './helpers/utils';


const addDateToFooter = () => {
  const date = new Date().getFullYear();
  let domString = '';
  domString += `<p class="col-xs-1 m-3 text-center text-white">Nielsen ${date}</p>`;
  utils.printToDom('addMomentTimeStamp', domString);
};

const init = () => {
  addDateToFooter();
  projects.createProjectCards();
};

init();
