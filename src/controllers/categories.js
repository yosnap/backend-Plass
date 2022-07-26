import Category from '../models/Category';

export const createCategory = async (req,res,next) => {
    try {
        const doc = new Category(req.body);
        const category = await doc.save();
        return res.status(200).send({succes:true,message:'Registro exitoso',category});
    } catch (error) {
        next(error);
    }
}

export const getCategories = async (req,res,next) => {
    try {
        const docs = await Category.find();
        if(!docs.length) return res.status(404).send({success:false,message:'Sin registros'});
        return res.status(200).send({success:true,categories:docs});
    } catch (error) {
        next(error);
    }
}

export const getCategory = async (req,res,next) => {
    try {
        const id = req.params.id;
        const doc = await Category.findById(id);
        if(!doc) return res.status(404).send({success:false,message:'Registro no encontrado'});
        return res.status(200).send({success:true,category:doc});
    } catch (error) {
        next(error);        
    }
}

export const updateCategory = async (req,res,next) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const doc = await Category.findByIdAndUpdate(id,update);
        return res.status(200).send({success:true,previous:doc});
    } catch (error) {
        next(error);
    }
}

export const deleteCategory = async (req,res,next) => {
    try {
        const id = req.params.id;
        const doc = await Category.findById(id);
        if(!doc) return res.status(404).send({success:false,message:'Registro no encontrado'});
        const removed = await doc.remove();
        return res.status(200).send({success:true,message:'Done',removed});
    } catch (error) {
        next(error);        
    }
}