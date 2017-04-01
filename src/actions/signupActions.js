import api from '../api';

export function userSignupRequest(userData) {
    return dispatch => {
        return api.addUser(userData);
    };
}

export function isUserExists(id) {
    return dispatch => {
        return api.getUser(id);
    };
}
