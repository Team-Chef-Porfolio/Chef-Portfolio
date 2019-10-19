import axios from 'axios';
 

export const axiosAuthenticate = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://chef-portfolio-buildweeks-bw.herokuapp.com/api',
    headers: {
      Authorization: token
    }
  });
};

