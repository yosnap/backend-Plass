import { createComment, getComments, getComment, deleteComment, updateComment } from '../../controllers/comments';
import { Router } from 'express';
import { DevRole } from '../../middlewares/Roles';

export const cmm = Router();

cmm.post('/new',createComment);
cmm.post('/all',getComments);
cmm.post('/:id',getComment);
cmm.delete('/:id',DevRole,deleteComment);
cmm.put('/:id',DevRole,updateComment);