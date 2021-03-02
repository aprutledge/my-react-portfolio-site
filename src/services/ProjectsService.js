import axios from 'axios';

const API_URL = 'https://api.github.com/users/';
const USER = 'aprutledge';

const getProjects = () => {
  return axios
    .get(API_URL + USER + '/repos?sort=updated')
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default {
  getProjects,
};
