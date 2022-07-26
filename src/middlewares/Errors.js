export const ErrorsMiddleware = (error,req,res,next) => {
    if(error?.success === false ){ 
        return res.status(error.status).send({success:false,message:error.message});
    }else{
        console.log({error})
    }
}