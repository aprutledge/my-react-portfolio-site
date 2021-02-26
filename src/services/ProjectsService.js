import axios from 'axios';

const API_URL = 'https://api.github.com/users/';
const USER = 'aprutledge';

const getProjects = () => {
  axios
    .get(API_URL + USER + '/repos')
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {});
};

export default {
  getProjects,
};
