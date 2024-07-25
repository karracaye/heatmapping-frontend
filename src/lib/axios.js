import Cookies from 'js-cookie';

const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://b7ce-103-252-35-202.ngrok-free.app',
  headers: {
    'ngrok-skip-browser-warning': true,
  }
})

instance.defaults.withCredentials = true;

const authorization = {
  headers: {
    authorization: `bearer ${Cookies.get('token')}`,
  }
}

export default {
  instance,
  authorization,
}
