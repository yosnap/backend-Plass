import { Schema , model } from 'mongoose';

const User = new Schema({
    username:{type:String,required:true,unique:true,lowercase:true},
    password:{type:String,required:true,select:false},
    role:{type:String,enum:['Dev','Adm','Usr']},
    avatar:{type:String},
    bio:{type:String},
    rating:{type:Number},
    createdAt:{type:Date,default:Date.now()},
    lastlogin:{type:Date}
});

export default model('User',User);