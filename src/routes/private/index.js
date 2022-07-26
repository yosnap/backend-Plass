import { Router } from 'express';
import { advert } from './advert';
import { cmm } from './comments';
import { usrs } from './users';

export const prv = Router();

prv.use('/adverts',advert);
prv.use('/users',usrs);
prv.use('/comments',cmm);