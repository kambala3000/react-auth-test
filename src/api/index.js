import axios from 'axios';

import { apiPrefix } from '../../server/config.json';

export default {
    addUser(data) {
        // console.log(data);
        return axios.post(`${apiPrefix}/users`, data)
    }
};