import Advert from '../models/Advert';

export const createAdvert = async (req,res,next) => {
    try {
        const doc = new Advert(req.body);
        const advert = await doc.save();
        return res.status(200).send({succes:true,message:'Registro exitoso',advert});
    } catch (error) {
        next(error);
    }
}

export const getAdverts = async (req,res,next) => {
    try {
        const docs = await Advert.find()
        .populate('createdBy')
        .populate('comments')
        .populate({path:'category',populate:{path:'category'}});
        if(!docs.length) return res.status(404).send({success:false,message:'Sin registros'});
        return res.status(200).send({success:true,adverts:docs});
    } catch (error) {
        next(error);
    }
}

export const getAdvert = async (req,res,next) => {
    try {
        const id = req.params.id;
        const advert = await Advert.findById(id)
        .populate('createdBy')
        .populate('comments')
        .populate('category');
        if(!advert) return res.status(404).send({success:false,message:'Registro no encontrado'});
        return res.status(200).send({success:true,advert}); 
    } catch (error) {
        next();
    }
}

export const AddComment = async (req,res,next) => {
    try {
        const advert = await Advert.findById(id);
        if(!advert) return next({success:false,status:404,message:'No se encontró el registro'});
        advert.comments.push(req.body.comments);
        await advert.save();
        return res.status(200).send({success:true,message:'Petición satisfactoria'});
    } catch (error) {
        next(error);        
    }
}

export const updateAdvert = async (req,res,next) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const updatedAdvert = await Advert.findByIdAndUpdate(id,update);
        return res.status(200).send({success:true,message:'Actualizado exitosamente',last:updatedAdvert});
    } catch (error) {
        next(error);
    }
}

export const deleteAdvert = async (req,res,next) => {
    try {
        const id = req.params.id;
        const advert = await Advert.findById(id);
        if(!advert) return res.status(404).send({success:false,message:'Registro no encontrado'});
        await advert.remove();
        return res.status(200).send({success:true,message:'Eliminado exitosamente'});
    } catch (error) {
        next(error);
    }
}