import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: String,
    password: String,

});
export const userModel = mongoose.model('User', userSchema);

