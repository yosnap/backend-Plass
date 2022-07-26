import { Schema , model } from 'mongoose';

const SubCategory = new Schema({
    tag:{type:String,required:true,unique:true},
    category:{type:Schema.ObjectId,ref:'Category'}
});

export default model('SubCategory',SubCategory);