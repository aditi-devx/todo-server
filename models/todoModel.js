import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const todoSchema = new Schema({
    userId: {type:mongoose.Schema.Types.ObjectId ,ref:'User'},
    text: String,

});
export const todoModel = mongoose.model('todo', todoSchema);

