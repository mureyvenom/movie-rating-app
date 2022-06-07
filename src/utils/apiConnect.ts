import axios from 'axios';

export default axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    apiKey: 'b9a28153',
  },
});
