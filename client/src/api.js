import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

console.log("API Base URL:", apiUrl);

const api = axios.create({
    baseURL: apiUrl,
});

export default api;
