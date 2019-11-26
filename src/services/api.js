import axios from 'axios';

const api = axios.create({
  baseURL: 'https://toolsbossabox.herokuapp.com',
});

export default api;
