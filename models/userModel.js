import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: String,
    password: String,

});
export const userModel = mongoose.model('User', userSchema);

