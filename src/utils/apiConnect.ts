import axios from 'axios';

export default axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    apiKey: process.env.REACT_APP_API_KEY,
  },
});
