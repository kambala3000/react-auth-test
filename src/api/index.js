import axios from 'axios';

import { apiPrefix } from '../../server/config.json';

export default {
    getUser(id) {
        return axios.get(`${apiPrefix}/users/${id}`);
    },

    addUser(data) {
        return axios.post(`${apiPrefix}/users`, data);
    }
};
