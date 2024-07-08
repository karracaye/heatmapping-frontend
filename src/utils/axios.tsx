const axios = require('axios');

export const axiosInstance = axios.create({
    headers: {
        'ngrok-skip-browser-warning': true,
    }
})

export const axiosBaseUrl = (collection) => {
    return 'https://b3e5-112-200-206-19.ngrok-free.app' + collection;
}