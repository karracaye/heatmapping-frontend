import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const axios = require('axios');
const baseURL = 'https://84e0-112-200-198-95.ngrok-free.app';

const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    'ngrok-skip-browser-warning': true,
  }
})

axiosInstance.interceptors.request.use(
  (request) => {
    const token = Cookies.get('token');

    if (token) request.headers['authorization'] = `bearer ${token}`

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
)

axiosInstance.interceptors.response.use((response) => 
  response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const token = Cookies.get('token');

        const response = await axios.post(`${baseURL}/refresh`, {
          token,
        })
        
        const { refreshToken, token: newToken } = response.data;
        Cookies.set('refreshToken', refreshToken);
        Cookies.set('token', newToken);
        
        axiosInstance.defaults.headers.common['authorization'] = `bearer ${refreshToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        const router = useRouter();

        console.error('Token refresh failed:', refreshError);

        Cookies.remove('refreshToken');
        Cookies.remove('token');

        router.push('/login');

        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
)

export default axiosInstance;
