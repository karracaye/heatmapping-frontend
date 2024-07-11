const axios = require('axios');

const instance = axios.create({
  headers: {
    'ngrok-skip-browser-warning': true,
  },
})

const baseUrl = (api) => {
  return `https://41bd-112-200-206-19.ngrok-free.app${api}`;
}

export default {
  instance,
  baseUrl,
};