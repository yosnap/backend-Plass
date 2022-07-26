import { Router } from 'express';
import { getAdverts , getAdvert , createAdvert , updateAdvert , deleteAdvert, AddComment } from '../../controllers/adverts';
import { AdmRole } from '../../middlewares/Roles';

export const advert = Router();

advert.get('/list',getAdverts);
advert.get('/:id',getAdvert);
advert.post('/new',AdmRole,createAdvert);
advert.put('/:id',AdmRole,updateAdvert);
advert.delete('/:id',AdmRole,deleteAdvert);
advert.put('/add/comment/:id',AddComment);