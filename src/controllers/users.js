import User from '../models/User';
import { createToken } from '../services/Auth';
import { checkPassword, hashPassword } from '../services/Password';

export const signUp = async (req,res,next) => {
    try {
        const { body } = req;
        const hash = await hashPassword(body.password);
        body.password = hash;
        const user = new User({...body});
        const userSaved = await user.save();
        const token = createToken(userSaved);
        return res.status(200).send({success:true,token});
    } catch (error) {
        next(error);
    }
};

export const signIn = async (req,res,next) => {
    try {
        const args = req.body;
        const { username , password } = req.body;
        const user = await User.findOne({username}).select('password');
        const role = await User.findOne({username}).select('role');
        user.role = role.role;
        if(!user) return next({success:false,status:404,message:'Usuario o contraseña inválidos'})
        const { isValid } = await checkPassword(password,user.password);
        if(!isValid) return next({success:false,status:401,message:'Usuario o contraseña inválidos'})
        console.log(user)
        const token = createToken(user);
        return res.status(200).send({success:true,token,user:{username,id:user._id,role:user.role}});
    } catch (error) {
        next(error);
    }
}

export const getUsers = async (req,res,next) => {
    try {
        const users = await User.find();
        if(!users.length) return next({success:false,status:404,message:'No se encontraron registros'});
        return res.status(200).send({success:true,users});
    } catch (error) {
        next(error);
    }
}

export const getUser = async (req,res,next) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if(!user) return next({success:false,status:404,message:'Usuario no encontrado'});
        return res.status(200).send({success:true,user});
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req,res,next) => {
    try {
        const id = req.params.id;
        if(req.body.password) req.body.password = await hashPassword(req.body.password);
        const update = req.body;
        const userUpdated = await User.findByIdAndUpdate(id,update);
        if(!userUpdated) return next({success:false,status:400,message:'Verifique los parámetros de su solicitud'})
        return res.status(200).send({success:true,last:userUpdated});
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req,res,next) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if(!user) return next({success:false,status:404,message:'Usuario no existe'});
        await user.remove();
        return res.status(200).send({success:true,message:'Usuario eliminado con éxito'});
    } catch (error) {
        next(error);
    }
}