import { Schema , model } from 'mongoose';

const Advert = new Schema({
    title:{type:String,required:true},
    category:{type:Schema.ObjectId,ref:'SubCategory'},
    description:{type:String,required:true},
    image:[{type:String}],
    raiting:{type:Number},
    price:{type:Number,required:true},
    status:{type:String,enum:['cerrado','en curso','abierto']},
    type:{type:String,enum:['Solicitud','Servicio']},
    comments:[{type:Schema.ObjectId,ref:'Comment'}],
    replies:[{type:Schema.ObjectId,ref:'User'}],
    createdBy:{type:Schema.ObjectId,ref:'User'},
    createdAt:{type:Date,default:Date.now()}
});

export default model('Advert',Advert);