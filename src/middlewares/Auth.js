import jwt from 'jwt-simple';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import {} from 'dotenv/config';

const secret = process.env.SECRET

export const checkToken = (req,res,next) => {
    if(!req.headers.authorization) return next({success:false,status:401,message:'Sin cabeceras de autorización'});
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.decode(token,secret);
    dayjs.extend(isSameOrBefore);
    if(!dayjs().isSameOrBefore(payload.exp)) return next({success:false,status:401,message:'Sesión expirada'});
    req.user = payload.sub;
    req.role = payload.role;
    next()
} 