import { Router } from 'express';
import { getUsers , getUser , updateUser , deleteUser } from '../../controllers/users';
import { DevRole } from '../../middlewares/Roles';

export const usrs = Router();

usrs.get('/list',getUsers);
usrs.get('/profile/:id',getUser);
usrs.put('/profile/:id',updateUser);
usrs.delete('/profile/:id',DevRole,deleteUser);