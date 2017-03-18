import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
// login
// email
// password
// timezone
});

const User = mongoose.model('User', UserSchema);
