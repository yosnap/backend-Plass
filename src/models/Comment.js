import { Schema , model } from 'mongoose';

const Comment = new Schema({
    author:{type:Schema.ObjectId,ref:'User'},
    date:{type:Date,default:Date.now()},
    content:{type:String},
    likes:{type:Number},
    dislikes:{type:Number},
    replies:[{type:Schema.ObjectId,ref:'Comments'}]
});

export default model('Comment',Comment); 

