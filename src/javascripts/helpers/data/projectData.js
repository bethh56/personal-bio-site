import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseUrl;

const getProjects = () => axios.get(`${baseURL}/projects.json`);

export default { getProjects };
