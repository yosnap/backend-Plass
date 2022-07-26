import { Schema , model } from 'mongoose';

const Category = new Schema({
    tag:{type:String,required:true,unique:true},
    picturename:{type:String,required:true}
});

export default model('Category',Category);