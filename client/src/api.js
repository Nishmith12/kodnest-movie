import axios from 'axios';

let apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Remove trailing slash if present to avoid double slashes (e.g., .app//api)
apiUrl = apiUrl.replace(/\/+$/, '');

if (!apiUrl.endsWith('/api')) {
    apiUrl += '/api';
}

console.log("API Base URL:", apiUrl);

const api = axios.create({
    baseURL: apiUrl,
});

export default api;
