export const DevRole = (req,res,next) => {
    if(!req.role) return next({success:false,status:400,message:'No autorizado'});
    if(req.role !== 'Dev') return next({success:false,status:403,message:'Permisos insuficientes'});
    next();
};

export const AdmRole = (req,res,next) => {
    console.log(req.role)
    if(!req.role) return next({success:false,status:400,message:'No autorizado'});
    if(req.role !== 'Adm'){
        if(req.role !== 'Dev') return next({success:false,status:403,message:'Permisos insuficientes'});
        next();
    }
    if(req.role === 'Adm') next()
}