const ErrorCodes = {
    11000:'Ya existe el registro'
}


export const MongoErrors = (error,req,res,next) => {
    if(error.code ) {
        let message = ErrorCodes[error.code] || error
        return res.status(400).send({success:false,message});
    }else {
        next(error);
    }
}