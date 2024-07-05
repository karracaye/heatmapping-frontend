const axios = require('axios');

function config(collection) {
    return {
        baseUrl: 'https://93aa-112-200-206-19.ngrok-free.app/' + collection,
        headers: {
            "ngrok-skip-browser-warning": true,
        }
    }
}

const login = axios.create(config('login'));
const users = axios.create(config('users'));

module.exports = {
    login,
    users,
}