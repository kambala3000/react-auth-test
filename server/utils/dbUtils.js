import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import config from '../config.json';
import '../models/User';

const User = mongoose.model('User');

export function setUpConnection() {
    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

// new user
export function addUser(data) {
    const user = new User({
        login: data.login,
        email: data.email,
        password: bcrypt.hashSync(data.password, 10),
        timezone: data.timezone
    });
    return user.save();
}
