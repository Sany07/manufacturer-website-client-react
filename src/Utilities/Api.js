import axios from "axios";

const axiosPrivate = axios.create({});

axiosPrivate.interceptors.request.use(function (config) {
    if(!config.headers.authorization){
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }
    return config;
  }, function (error) {
   
    return Promise.reject(error);
  });

// Add a response interceptor
axiosPrivate.interceptors.response.use(function (response) {

    return response;
  }, function (error) {

    if(error.response.status === 403){
        // refresh token 
        // send to the server
    }
    return Promise.reject(error);
  });

  export default axiosPrivate;