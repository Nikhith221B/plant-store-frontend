import axios from 'axios';

const BASE_URL = 'https://plant-store-frontend-n39j.onrender.com';

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const fetchPlants = async (search = '', category = '') => {
    const res = await api.get('/plants', { params: { search, category } });
    return res.data;
};

export const addPlant = async (data) => {
    const res = await api.post('/plants', data);
    return res.data;
};

export default api;