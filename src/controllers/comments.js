import Comment from '../models/Comment';

export const createComment = async (req,res,next) => {
    try {
        const doc = new Comment(req.body);
        const comment = await doc.save();
        return res.status(200).send({succes:true,message:'Registro exitoso',comment});
    } catch (error) {
        next(error);
    }
}

export const getComments = async (req,res,next) => {
    try {
        const docs = await Comment.find();
        if(!docs.length) return res.status(404).send({success:false,message:'Sin registros'});
        return res.status(200).send({success:true,comments:docs});
    } catch (error) {
        next(error);
    }
}

export const getComment = async (req,res,next) => {
    try {
        const id = req.params.id;
        const comment = Comment.findById(id);
        if(!comment) return res.status(404).send({success:false,message:'Registro no encontrado'});
        return res.status(200).send({success:true,comment}); 
    } catch (error) {
        next();
    }
}

export const updateComment = async (req,res,next) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const updatedComment = await Comment.findByIdAndUpdate(id,update);
        return res.status(200).send({success:true,message:'Actualizado exitosamente',last:updatedComment});
    } catch (error) {
        next(error);
    }
}

export const deleteComment = async (req,res,next) => {
    try {
        const id = req.params.id;
        const comment = await Comment.findById(id);
        if(!comment) return res.status(404).send({success:false,message:'Registro no encontrado'});
        await comment.remove();
        return res.status(200).send({success:true,message:'Eliminado exitosamente'});
    } catch (error) {
        next(error);
    }
}