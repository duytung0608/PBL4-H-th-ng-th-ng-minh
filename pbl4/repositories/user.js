// user.js

import axios from 'axios';

const API_URL = 'https://pbl4-h-th-ng-th-ng-minh.onrender.com/api/pbl4/accounts';

const User = {
    login: async (username, password) => {
        try {
            const response = await axios.post(`${API_URL}/login`, { username, password });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    // Các hàm khác liên quan đến người dùng có thể được thêm ở đây
};

export default User;
