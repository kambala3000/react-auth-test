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
import validateInput from './inputsValidation';

export let router = express.Router();

router.post('/', (req, res) => {
    const { errors, isValid } = validateInput(req.body);
    if (!isValid) {
        res.status(400).json(errors);
    }
});