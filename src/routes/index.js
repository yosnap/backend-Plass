import { Router } from 'express';
import { getAdverts } from '../controllers/adverts';
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from '../controllers/categories';
import { createSubCategory, deleteSubCategory, getSubCategories, getSubCategory, updateSubCategory } from '../controllers/subcategories';
import { signIn, signUp } from '../controllers/users';
import { checkToken } from '../middlewares/Auth';
import { prv } from './private';

export const api = Router();

//RUTAS PUBLICAS
api.post('/signin',signIn);
api.post('/signup',signUp);
api.use('/api',checkToken,prv);
api.get('/adverts',getAdverts);

api.post('/category',createCategory);
api.get('/categories',getCategories);
api.get('/category/:id',getCategory);
api.put('/category/:id',updateCategory);
api.delete('/category/:id',deleteCategory);

api.post('/subcat',createSubCategory);
api.get('/subcats',getSubCategories);
api.get('/subcat/:id',getSubCategory);
api.put('/subcat/:id',updateSubCategory);
api.delete('/subcat/:id',deleteSubCategory);
