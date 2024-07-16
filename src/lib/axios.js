import Cookies from 'js-cookie';

const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://08c2-112-200-206-19.ngrok-free.app',
  headers: {
    'ngrok-skip-browser-warning': true,
  }
})

const authorization = {
  headers: {
    authorization: `bearer ${Cookies.get('token')}`,
  }
}

export default {
  instance,
  authorization,
}
