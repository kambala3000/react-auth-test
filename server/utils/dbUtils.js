// import mongoose from "mongoose";

import config from '../config.json';

// import '../models/User';

//  export function setUpConnection() {
//     mongoose.Promise = global.Promise;
//     mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
// };

// export function addUser(data) {
//     return data;
// };


// ---------------------------

import express from 'express';
import Validator from 'validator';

export let router = express.Router();

function validateInput(data) {
    let errors = {};
    if (Validator.isEmpty(data.login)) {
        errors.login = 'This field is required';
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'This field is required';
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid email';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }
    if (Validator.isEmpty(data.passwordConfirm)) {
        errors.passwordConfirm = 'This field is required';
    }
    if (!Validator.equals(data.password, data.passwordConfirm)) {
        errors.passwordConfirm = 'Passwords must match';
    }
    if (Validator.isEmpty(data.timezone)) {
        errors.timezone = 'This field is required';
    }
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};

router.post('/', (req, res) => {
    const { errors, isValid } = validateInput(req.body);
    if (!isValid) {
        res.status(400).json(errors);
    }
});