import SubCategory from '../models/SubCategory';

export const createSubCategory = async (req,res,next) => {
    try {
        const doc = new SubCategory(req.body);
        const subcategory = await doc.save();
        return res.status(200).send({succes:true,message:'Registro exitoso',subcategory});
    } catch (error) {
        next(error);
    }
}

export const getSubCategories = async (req,res,next) => {
    try {
        const docs = await SubCategory.find().populate('category');
        if(!docs.length) return res.status(404).send({success:false,message:'Sin registros'});
        return res.status(200).send({success:true,subcategories:docs});
    } catch (error) {
        next(error);
    }
}

export const getSubCategory = async (req,res,next) => {
    try {
        const id = req.params.id;
        const doc = await SubCategory.findById(id).populate('category');
        if(!doc) return res.status(404).send({success:false,message:'Registro no encontrado'});
        return res.status(200).send({success:true,subcategory:doc});
    } catch (error) {
        next(error);        
    }
}

export const updateSubCategory = async (req,res,next) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const doc = await SubCategory.findByIdAndUpdate(id,update);
        return res.status(200).send({success:true,previous:doc});
    } catch (error) {
        next(error);
    }
}

export const deleteSubCategory = async (req,res,next) => {
    try {
        const id = req.params.id;
        const doc = await SubCategory.findById(id);
        if(!doc) return res.status(404).send({success:false,message:'Registro no encontrado'});
        const removed = await doc.remove();
        return res.status(200).send({success:true,message:'Done'});
    } catch (error) {
        next(error);        
    }
}