import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://ddcb-112-200-206-19.ngrok-free.app/',
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": true,
    }
})

export default axiosInstance


