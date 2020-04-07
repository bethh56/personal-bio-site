import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => axios.get(`${baseURL}/projects.json`);

export default { getProjects };
