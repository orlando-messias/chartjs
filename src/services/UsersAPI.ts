import axios from 'axios';

const usersApi = axios.create({
  baseURL: 'https://localhost:5001/api/users'
});

export default usersApi;