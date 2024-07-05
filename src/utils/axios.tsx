const axios = require('axios');

export const axiosInstance = axios.create({ 
    baseURL: 'https://93aa-112-200-206-19.ngrok-free.app/users',
    headers: {
        "ngrok-skip-browser-warning": true,
    },
});

