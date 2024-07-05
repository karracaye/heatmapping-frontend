const axios = require('axios');

export const axiosInstance = axios.create({
    headers: {
        'ngrok-skip-browser-warning': true
    }
})

export const Url = (collection) => {
    return 'https://93aa-112-200-206-19.ngrok-free.app' + collection;
}