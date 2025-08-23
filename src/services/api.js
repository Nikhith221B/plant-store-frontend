import axios from 'axios';

const BASE_URL = 'https://plant-store-backend-gjoh.onrender.com';

export const fetchPlants = async (search = '', category = '') => {
    try {
        const response = await axios.get(`${BASE_URL}/plants`, {
            params: { search, category },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch plants');
    }
};

export const createPlant = async (plantData) => {
    try {
        const response = await axios.post(`${BASE_URL}/plants`, plantData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to add plant');
    }
};
