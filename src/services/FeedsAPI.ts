import axios from 'axios';

const usersApi = axios.create({
  baseURL: 'https://localhost:5001/api/feeds'
});

export default usersApi;