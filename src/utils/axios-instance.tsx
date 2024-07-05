const axios = require('axios');

const login = axios.create({ 
    baseURL: 'https://93aa-112-200-206-19.ngrok-free.app/login',
    headers: {
        "ngrok-skip-browser-warning": true,
    },
});

const users = axios.create({ 
    baseURL: 'https://93aa-112-200-206-19.ngrok-free.app/users',
    headers: {
        "ngrok-skip-browser-warning": true,
    },
});

module.exports = {
    login
}