import axios from 'axios';
const apiUrl = 'http://localhost:3000';
const getUserDetail = async (token) => {};

const login = async ({ username, password }) => {
    try {
        const response = await axios.post(
            `${apiUrl}/api/pbl4/accounts/login`,
            {
                username,
                password,
            },
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        if (response && response.data) {
            return response.data;
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        if (error.response) {
            console.error('Server error:', error.response.status, error.response.data);
            throw new Error('Server error');
        } else if (error.request) {
            console.error('No response from server');
            throw new Error('No response from server');
        } else {
            console.error('Request error:', error.message);
            throw error;
        }
    }
};

const register = async (newAccount) => {
    try {
        const response = await axios.post(`${apiUrl}/api/pbl4/accounts/register/`, newAccount, {
            headers: { 'Content-Type': 'application/json' },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    getUserDetail,
    login,
    register,
};
